import { useState } from "react";
import { questions, results, type PersonalityType } from "./data/questions";
import "./App.css";
import React from "react";

type Scores = Record<PersonalityType, number>;

type Screen = "start" | "quiz" | "result";

interface FinalResult {
  main: PersonalityType;
  scores: Scores;
}

const createInitialScores = (): Scores => ({
  builder: 0,
  creative: 0,
  detective: 0,
  guardian: 0,
  futurist: 0,
});

function App() {
  const [screen, setScreen] = useState<Screen>("start");

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const [selectedAnswer, setSelectedAnswer] = useState<PersonalityType | null>(
    null,
  );

  const [scores, setScores] = useState<Scores>(createInitialScores());

  const [finalResult, setFinalResult] = useState<FinalResult | null>(null);

  // =================================
  // START QUIZ
  // =================================

  const startQuiz = () => {
    setScreen("quiz");
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setFinalResult(null);
    setScores(createInitialScores());
  };

  // =================================
  // SELECT ANSWER
  // =================================

  const selectAnswer = (type: PersonalityType) => {
    setSelectedAnswer(type);
  };

  // =================================
  // CALCULATE RESULT
  // =================================

  const calculateResult = (finalScores: Scores) => {
    const sortedResults = (
      Object.entries(finalScores) as [PersonalityType, number][]
    ).sort((a, b) => b[1] - a[1]);

    const winner = sortedResults[0]?.[0];

    if (!winner) {
      return;
    }

    setFinalResult({
      main: winner,
      scores: finalScores,
    });

    setScreen("result");
  };

  // =================================
  // NEXT QUESTION
  // =================================

  const nextQuestion = () => {
    if (!selectedAnswer) {
      return;
    }

    const updatedScores: Scores = {
      ...scores,
      [selectedAnswer]: scores[selectedAnswer] + 1,
    };

    setScores(updatedScores);

    const isLastQuestion = currentQuestion === questions.length - 1;

    if (isLastQuestion) {
      calculateResult(updatedScores);
      return;
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1);

    setSelectedAnswer(null);
  };

  // =================================
  // RESTART QUIZ
  // =================================

  const restartQuiz = () => {
    setScreen("start");
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScores(createInitialScores());
    setFinalResult(null);
  };

  // =================================
  // PERCENTAGE
  // =================================

  const getPercentage = (score: number): number => {
    return Math.round((score / questions.length) * 100);
  };

  // =================================
  // CURRENT QUESTION
  // =================================

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="app">
      {/* =================================
          START SCREEN
      ================================= */}

      {screen === "start" && (
        <main className="start-screen">
          <div className="sparkle sparkle-one">✦</div>

          <div className="sparkle sparkle-two">✧</div>

          <div className="brand">OLATECH GIRL! 👋</div>

          <div className="hero-emoji">💻✨</div>

          <h1>
            QUAL ÁREA DE
            <span>TECH É A SUA?</span>
          </h1>

          <p className="subtitle">
            Faça o teste e descubra qual profissão tech combina com a sua
            personalidade! 👀
          </p>

          <button type="button" className="primary-button" onClick={startQuiz}>
            COMEÇAR O TESTE 💖
          </button>

          <p className="small-text">
            6 perguntas • 5 personalidades • 1 resultado
          </p>
        </main>
      )}

      {/* =================================
          QUIZ SCREEN
      ================================= */}

      {screen === "quiz" && currentQuestionData && (
        <main className="quiz-screen">
          <div className="quiz-header">
            <div className="brand">OLATECH TESTE</div>

            <div className="question-counter">
              {currentQuestion + 1} / {questions.length}
            </div>
          </div>

          {/* PROGRESS BAR */}

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          {/* QUESTION CARD */}

          <div className="question-card">
            <div className="question-number">
              PERGUNTA {currentQuestion + 1}
            </div>

            <h2>{currentQuestionData.question}</h2>

            {/* ANSWERS */}

            <div className="answers">
              {currentQuestionData.answers.map((answer, index) => {
                const isSelected = selectedAnswer === answer.type;

                return (
                  <button
                    key={`${answer.type}-${index}`}
                    type="button"
                    className={`answer-button ${isSelected ? "selected" : ""}`}
                    onClick={() => selectAnswer(answer.type)}
                  >
                    <span className="answer-letter">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span>{answer.text}</span>
                  </button>
                );
              })}
            </div>

            {/* NEXT BUTTON */}

            <button
              type="button"
              className="next-button"
              onClick={nextQuestion}
              disabled={!selectedAnswer}
            >
              {currentQuestion === questions.length - 1
                ? "VER MEU RESULTADO ✨"
                : "PRÓXIMA →"}
            </button>
          </div>
        </main>
      )}

      {/* =================================
          RESULT SCREEN
      ================================= */}

      {screen === "result" && finalResult && (
        <main className="result-screen">
          <div className="brand">OLATECH</div>

          <p className="result-label">✨ SEU RESULTADO ✨</p>

          {/* =================================
              RESULT CARD
          ================================= */}

          <div className="result-card">
            {/* PERSONA IMAGE */}

            <div className="result-image-wrapper">
              <img
                src={results[finalResult.main].image}
                alt={results[finalResult.main].title}
                className="result-image"
              />
            </div>

            {/* EMOJI */}

            <div className="result-emoji">
              {results[finalResult.main].emoji}
            </div>

            {/* TITLE */}

            <p className="you-are">VOCÊ É</p>

            <h1>{results[finalResult.main].title}</h1>

            <h2>{results[finalResult.main].profession}</h2>

            {/* DESCRIPTION */}

            <p className="result-description">
              {results[finalResult.main].description}
            </p>

            {/* CAREERS */}

            <div className="careers">
              <p>💡 ÁREAS PARA EXPLORAR:</p>

              {results[finalResult.main].careers.map((career) => (
                <span key={career}>{career}</span>
              ))}
            </div>
          </div>

          {/* =================================
              PERSONALITY SCORES
          ================================= */}

          <div className="score-section">
            <h3>Sua personalidade tech 👀</h3>

            {(Object.entries(finalResult.scores) as [PersonalityType, number][])
              .sort((a, b) => b[1] - a[1])
              .map(([type, score]) => {
                const percentage = getPercentage(score);

                return (
                  <div className="score-row" key={type}>
                    <div className="score-info">
                      <span>
                        {results[type].emoji} {results[type].title}
                      </span>

                      <strong>{percentage}%</strong>
                    </div>

                    <div className="score-background">
                      <div
                        className="score-progress"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          {/* =================================
              RESTART
          ================================= */}

          <button
            type="button"
            className="primary-button"
            onClick={restartQuiz}
          >
            FAZER O TESTE NOVAMENTE 🔄
          </button>

          <p className="share-text">
            📲 Tire um print do seu resultado e compartilhe!
          </p>
        </main>
      )}
    </div>
  );
}

export default App;
