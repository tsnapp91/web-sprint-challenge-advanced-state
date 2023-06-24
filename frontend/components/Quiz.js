import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuiz, postAnswer, selectAnswer } from "../state/action-creators";

function Quiz(props) {
  useEffect(() => {
    props.fetchQuiz();
  }, []);

  const answerQuestion = () => {
    const answer = {
      quiz_id: props.quiz.quiz_id,
      answer_id: props.selectedAnswer.answer_id,
    };
    props.postAnswer(answer);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div
                className={
                  props.selectedAnswer?.answer_id ===
                  props.quiz.answers[0].answer_id
                    ? "answer selected"
                    : "answer"
                }
              >
                {props.quiz.answers[0].text}
                <button
                  onClick={() => props.selectAnswer(props.quiz.answers[0])}
                >
                  {props.selectedAnswer?.answer_id ===
                  props.quiz.answers[0].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>

              <div
                className={
                  props.selectedAnswer?.answer_id ===
                  props.quiz.answers[1].answer_id
                    ? "answer selected"
                    : "answer"
                }
              >
                {props.quiz.answers[1].text}
                <button
                  onClick={() => props.selectAnswer(props.quiz.answers[1])}
                >
                  {props.selectedAnswer?.answer_id ===
                  props.quiz.answers[1].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>
            </div>

            <button
              disabled={!props.selectedAnswer}
              onClick={() => answerQuestion()}
              id="submitAnswerBtn"
            >
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
  };
};

export default connect(mapStateToProps, {
  fetchQuiz,
  selectAnswer,
  postAnswer,
})(Quiz);
