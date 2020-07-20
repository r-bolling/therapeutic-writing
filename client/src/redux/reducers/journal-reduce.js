import {
  SUBMIT_FORM,
  HANDLE_SUBMIT,
  REMOVE_ENTRY,
  SET_TEMPLATE,
  ADD_QUESTION,
  ADD_ANSWER,
  GET_ENTRIES,
  GET_QUESTIONS,
  USER_EMAIL,
} from "../actions/journal-actions";
// import entries from json file
// import css file

const initialState = {
  entries: [],
  count: 0,
  templateID: "open",
  questions: [],
  answers: [],
  userEmail: null,
};

export const journalReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_EMAIL:
      return {
        ...state,
        userEmail: action.email,
      };
    case GET_ENTRIES:
      return {
        ...state,
        entries: action.entries,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        entries: action.questions,
      };
    case ADD_QUESTION:
      const questionsCopy = state.questions;
      questionsCopy.push(action.question);
      return {
        ...state,
        questions: questionsCopy,
      };
    case ADD_ANSWER:
      const answersCopy = state.answers;
      answersCopy.push(action.answer);
      return {
        ...state,
        answers: answersCopy,
      };
    case SUBMIT_FORM:
      const entriesCopy = state.entries;
      entriesCopy.push(action.newEntry);
      return {
        ...state,
        entries: entriesCopy,
      };
    case HANDLE_SUBMIT:
      const newArr = [...state.entries];
      return {
        entries: action.entries,
      };
    case REMOVE_ENTRY:
      return {
        ...state,
        entries: action.entries,
      };
    case SET_TEMPLATE:
      return {
        ...state,
        templateID: action.templateID,
      };
    default:
      return state;
  }
};
