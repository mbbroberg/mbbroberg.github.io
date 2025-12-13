let questions = [];
let scores = initializeScores();
let currentQuestion = 0;
let answers = {};

async function loadQuestions() {
  try {
    const response = await fetch('./data/questions.json');
    const data = await response.json();
    questions = data.questions;
    console.log(`Loaded ${questions.length} questions`);
  } catch (error) {
    console.error('Error loading questions:', error);
  }
}

async function init() {
  await loadQuestions();
  showQuestion();
}

function showQuestion() {
  const container = document.getElementById('test-container');
  
  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }
  
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  container.innerHTML = `
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${progress}%"></div>
    </div>
    
    <div class="question-counter">
      Question ${currentQuestion + 1} of ${questions.length}
    </div>
    
    <div class="question-content">
      <div class="options">
        <button class="option-btn" onclick="selectAnswer(${question.option1.type}, ${currentQuestion})">
          <span class="option-text">${question.option1.text}</span>
        </button>
        
        <button class="option-btn" onclick="selectAnswer(${question.option2.type}, ${currentQuestion})">
          <span class="option-text">${question.option2.text}</span>
        </button>
      </div>
    </div>
    
    <div class="navigation">
      <button onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>
        ← Previous
      </button>
      <button onclick="skipQuestion()">Skip</button>
    </div>
  `;
  
  if (answers[currentQuestion]) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
      if ((idx === 0 && answers[currentQuestion] === questions[currentQuestion].option1.type) ||
          (idx === 1 && answers[currentQuestion] === questions[currentQuestion].option2.type)) {
        btn.classList.add('selected');
      }
    });
  }
}

function selectAnswer(typeNumber, questionIndex) {
  answers[questionIndex] = typeNumber;
  recordAnswer(scores, typeNumber);
  
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.classList.remove('selected'));
  event.target.closest('.option-btn').classList.add('selected');
  
  // Auto-advance to next question after a short delay
  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 300);
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function skipQuestion() {
  currentQuestion++;
  showQuestion();
}

function showResults() {
  const type = calculateType(scores);
  const wing = calculateWing(scores);
  const typeDisplay = wing > 0 ? `${type}w${wing}` : `${type}`;
  
  const container = document.getElementById('test-container');
  container.innerHTML = `
    <div class="results-page">
      <h1>Your Enneagram Type</h1>
      
      <div class="type-result">
        <div class="type-number">${typeDisplay}</div>
      </div>
      
      <div class="score-breakdown">
        <h3>Score Breakdown</h3>
        <div class="scores">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(t => {
            const scoreKey = ['d_1', 'f_2', 'c_3', 'e_4', 'h_5', 'b_6', 'i_7', 'g_8', 'a_9'][t - 1];
            return `<div class="score-item">
              <span>Type ${t}</span>
              <span class="score-value">${scores[scoreKey]}</span>
            </div>`;
          }).join('')}
        </div>
      </div>
      
      <button onclick="retakeTest()" class="retake-btn">Retake Test</button>
    </div>
  `;
}

function retakeTest() {
  scores = initializeScores();
  answers = {};
  currentQuestion = 0;
  showQuestion();
}

document.addEventListener('DOMContentLoaded', init);
