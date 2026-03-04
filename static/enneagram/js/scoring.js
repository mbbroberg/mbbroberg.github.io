/**
 * Enneagram Scoring Logic
 * Ported from RHEPY Python implementation
 */

function initializeScores() {
  return {
    d_1: 0, f_2: 0, c_3: 0, e_4: 0, h_5: 0, b_6: 0, i_7: 0, g_8: 0, a_9: 0, result: 0
  };
}

function recordAnswer(scores, typeNumber) {
  const typeMap = { 1: 'd_1', 2: 'f_2', 3: 'c_3', 4: 'e_4', 5: 'h_5', 6: 'b_6', 7: 'i_7', 8: 'g_8', 9: 'a_9' };
  if (typeMap[typeNumber]) scores[typeMap[typeNumber]]++;
}

function highestScore(scores) {
  const scoresTable = {
    [scores.d_1]: 1, [scores.f_2]: 2, [scores.c_3]: 3, [scores.e_4]: 4, [scores.h_5]: 5,
    [scores.b_6]: 6, [scores.i_7]: 7, [scores.g_8]: 8, [scores.a_9]: 9
  };
  const sortedScores = Object.keys(scoresTable).map(Number).sort((a, b) => a - b);
  const highestVal = sortedScores[sortedScores.length - 1];
  return scoresTable[highestVal];
}

function wingTie(scores) {
  const scoresTable = {
    [scores.d_1]: 1, [scores.f_2]: 2, [scores.c_3]: 3, [scores.e_4]: 4, [scores.h_5]: 5,
    [scores.b_6]: 6, [scores.i_7]: 7, [scores.g_8]: 8, [scores.a_9]: 9
  };
  const sortedScores = Object.keys(scoresTable).map(Number).sort((a, b) => a - b);
  const highest = sortedScores[sortedScores.length - 1];
  const secondHighest = sortedScores[sortedScores.length - 2];
  
  if (highest === secondHighest) {
    let secondHighestType = 0;
    for (const [score, type] of Object.entries(scoresTable)) {
      if (Number(score) === secondHighest && type !== scores.result) {
        secondHighestType = type;
        break;
      }
    }
    const wingScores = [scores.result, secondHighestType];
    let wingSum = 0;
    wingScores.forEach((type, index) => {
      wingSum += (index + 1) * scoresTable[Object.keys(scoresTable).find(k => scoresTable[k] === type)];
    });
    if (wingSum < 5 * 2 * (secondHighestType + secondHighest)) {
      return secondHighestType;
    }
  }
  return null;
}

function checkTriads(scores) {
  const triads = {
    intelligence: { feeling: scores.f_2 + scores.c_3 + scores.e_4, thinking: scores.h_5 + scores.b_6 + scores.i_7, instinct: scores.a_9 + scores.g_8 + scores.d_1 },
    hornevian: { assertive: scores.c_3 + scores.i_7 + scores.g_8, dutiful: scores.d_1 + scores.f_2 + scores.b_6, withdrawn: scores.e_4 + scores.h_5 + scores.a_9 },
    harmonic: { positive: scores.f_2 + scores.i_7 + scores.a_9, reactive: scores.e_4 + scores.b_6 + scores.g_8, competency: scores.d_1 + scores.c_3 + scores.h_5 }
  };
  
  const checks = [
    triads.intelligence.instinct > triads.intelligence.thinking && triads.intelligence.instinct > triads.intelligence.feeling && triads.hornevian.dutiful > triads.hornevian.assertive && triads.hornevian.dutiful > triads.hornevian.withdrawn && triads.harmonic.competency > triads.harmonic.reactive && triads.harmonic.competency > triads.harmonic.positive,
    triads.intelligence.feeling > triads.intelligence.thinking && triads.intelligence.feeling > triads.intelligence.instinct && triads.hornevian.dutiful > triads.hornevian.assertive && triads.hornevian.dutiful > triads.hornevian.withdrawn && triads.harmonic.positive > triads.harmonic.reactive && triads.harmonic.positive > triads.harmonic.competency,
    triads.intelligence.feeling > triads.intelligence.thinking && triads.intelligence.feeling > triads.intelligence.instinct && triads.hornevian.assertive > triads.hornevian.dutiful && triads.hornevian.assertive > triads.hornevian.withdrawn && triads.harmonic.competency > triads.harmonic.reactive && triads.harmonic.competency > triads.harmonic.positive,
    triads.intelligence.feeling > triads.intelligence.thinking && triads.intelligence.feeling > triads.intelligence.instinct && triads.hornevian.withdrawn > triads.hornevian.dutiful && triads.hornevian.withdrawn > triads.hornevian.assertive && triads.harmonic.reactive > triads.harmonic.competency && triads.harmonic.reactive > triads.harmonic.positive,
    triads.intelligence.thinking > triads.intelligence.feeling && triads.intelligence.thinking > triads.intelligence.instinct && triads.hornevian.withdrawn > triads.hornevian.dutiful && triads.hornevian.withdrawn > triads.hornevian.assertive && triads.harmonic.competency > triads.harmonic.reactive && triads.harmonic.competency > triads.harmonic.positive,
    triads.intelligence.thinking > triads.intelligence.feeling && triads.intelligence.thinking > triads.intelligence.instinct && triads.hornevian.dutiful > triads.hornevian.withdrawn && triads.hornevian.dutiful > triads.hornevian.assertive && triads.harmonic.reactive > triads.harmonic.competency && triads.harmonic.reactive > triads.harmonic.positive,
    triads.intelligence.thinking > triads.intelligence.feeling && triads.intelligence.thinking > triads.intelligence.instinct && triads.hornevian.assertive > triads.hornevian.withdrawn && triads.hornevian.assertive > triads.hornevian.dutiful && triads.harmonic.positive > triads.harmonic.competency && triads.harmonic.positive > triads.harmonic.reactive,
    triads.intelligence.instinct > triads.intelligence.feeling && triads.intelligence.instinct > triads.intelligence.thinking && triads.hornevian.assertive > triads.hornevian.withdrawn && triads.hornevian.assertive > triads.hornevian.dutiful && triads.harmonic.reactive > triads.harmonic.competency && triads.harmonic.reactive > triads.harmonic.positive,
    triads.intelligence.instinct > triads.intelligence.feeling && triads.intelligence.instinct > triads.intelligence.thinking && triads.hornevian.withdrawn > triads.hornevian.assertive && triads.hornevian.withdrawn > triads.hornevian.dutiful && triads.harmonic.positive > triads.harmonic.reactive && triads.harmonic.positive > triads.harmonic.positive
  ];
  
  for (let i = 0; i < checks.length; i++) {
    if (checks[i]) return i + 1;
  }
  return null;
}

function calculateType(scores) {
  let result = highestScore(scores);
  scores.result = result;
  const wingTieResult = wingTie(scores);
  if (wingTieResult) {
    result = wingTieResult;
    scores.result = result;
  }
  const triadResult = checkTriads(scores);
  if (triadResult) {
    result = triadResult;
    scores.result = result;
  }
  return result;
}

function calculateWing(scores) {
  const result = scores.result;
  let wing = 0;
  switch (result) {
    case 1: wing = scores.a_9 === scores.f_2 ? 0 : (scores.a_9 > scores.f_2 ? 9 : 2); break;
    case 2: wing = scores.d_1 === scores.c_3 ? 0 : (scores.d_1 > scores.c_3 ? 1 : 3); break;
    case 3: wing = scores.f_2 === scores.e_4 ? 0 : (scores.f_2 > scores.e_4 ? 2 : 4); break;
    case 4: wing = scores.c_3 === scores.h_5 ? 0 : (scores.c_3 > scores.h_5 ? 3 : 5); break;
    case 5: wing = scores.e_4 === scores.b_6 ? 0 : (scores.e_4 > scores.b_6 ? 4 : 6); break;
    case 6: wing = scores.h_5 === scores.i_7 ? 0 : (scores.h_5 > scores.i_7 ? 5 : 7); break;
    case 7: wing = scores.b_6 === scores.g_8 ? 0 : (scores.b_6 > scores.g_8 ? 6 : 8); break;
    case 8: wing = scores.i_7 === scores.a_9 ? 0 : (scores.i_7 > scores.a_9 ? 7 : 9); break;
    case 9: wing = scores.g_8 === scores.d_1 ? 0 : (scores.g_8 > scores.d_1 ? 8 : 1); break;
  }
  return wing;
}
