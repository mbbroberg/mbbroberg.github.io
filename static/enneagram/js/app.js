let questions = [];
let scores = initializeScores();
let currentQuestion = 0;
let answers = {};

// Enneagram type information
const typeInfo = {
  1: {
    name: "THE REFORMER",
    description: "The Rational, Idealistic Type: Principled, Purposeful, Self-Controlled, and Perfectionistic",
    url: "https://www.enneagraminstitute.com/type-1"
  },
  2: {
    name: "THE HELPER",
    description: "The Caring, Interpersonal Type: Demonstrative, Generous, People-Pleasing, and Possessive",
    url: "https://www.enneagraminstitute.com/type-2"
  },
  3: {
    name: "THE ACHIEVER",
    description: "The Success-Oriented, Pragmatic Type: Adaptive, Excelling, Driven, and Image-Conscious",
    url: "https://www.enneagraminstitute.com/type-3"
  },
  4: {
    name: "THE INDIVIDUALIST",
    description: "The Sensitive, Withdrawn Type: Expressive, Dramatic, Self-Absorbed, and Temperamental",
    url: "https://www.enneagraminstitute.com/type-4"
  },
  5: {
    name: "THE INVESTIGATOR",
    description: "The Intense, Cerebral Type: Perceptive, Innovative, Secretive, and Isolated",
    url: "https://www.enneagraminstitute.com/type-5"
  },
  6: {
    name: "THE LOYALIST",
    description: "The Committed, Security-Oriented Type: Engaging, Responsible, Anxious, and Suspicious",
    url: "https://www.enneagraminstitute.com/type-6"
  },
  7: {
    name: "THE ENTHUSIAST",
    description: "The Busy, Fun-Loving Type: Spontaneous, Versatile, Distractible, and Scattered",
    url: "https://www.enneagraminstitute.com/type-7"
  },
  8: {
    name: "THE CHALLENGER",
    description: "The Powerful, Dominating Type: Self-Confident, Decisive, Willful, and Confrontational",
    url: "https://www.enneagraminstitute.com/type-8"
  },
  9: {
    name: "THE PEACEMAKER",
    description: "The Easygoing, Self-Effacing Type: Receptive, Reassuring, Agreeable, and Complacent",
    url: "https://www.enneagraminstitute.com/type-9"
  }
};

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
  const info = typeInfo[type];

  const container = document.getElementById('test-container');
  container.innerHTML = `
    <div class="results-page">
      <h1>Your Enneagram Type</h1>

      <div class="type-result">
        <div class="type-number">${typeDisplay}</div>
        <div class="type-name">${info.name}</div>
        <p class="type-description">${info.description}</p>
        <a href="${info.url}" target="_blank" rel="noopener noreferrer" class="learn-more-btn">
          Learn More About Type ${type} →
        </a>
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
