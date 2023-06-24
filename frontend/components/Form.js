import React from "react";
import { connect } from "react-redux";
import { inputChange, postQuiz } from "../state/action-creators";

function Form(props) {
  const onChange = (evt) => {
    props.inputChange(evt.target.id, evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    props.postQuiz(props.form);
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        value={props.form.newQuestion}
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        value={props.form.newTrueAnswer}
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        value={props.form.newFalseAnswer}
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button
        disabled={
          props.form.newQuestion.trim().length <= 1 ||
          props.form.newTrueAnswer.trim().length <= 1 ||
          props.form.newFalseAnswer.trim().length <= 1
        }
        id="submitNewQuizBtn"
      >
        Submit new quiz
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

export default connect(mapStateToProps, { inputChange, postQuiz })(Form);
