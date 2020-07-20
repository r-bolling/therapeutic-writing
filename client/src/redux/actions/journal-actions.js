export const SUBMIT_FORM = "SUBMIT_FORM";
export const HANDLE_SUBMIT = "HANDLE_SUBMIT";
export const REMOVE_ENTRY = "REMOVE_ENTRY";
export const SET_TEMPLATE = "SET_TEMPLATE";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export const GET_ENTRIES = "GET_ENTRIES";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const USER_EMAIL = "USER_EMAIL";

export function setUserEmail(email) {
  return {
    type: USER_EMAIL,
    email,
  };
}

export function getEntries(entries) {
  return {
    type: GET_ENTRIES,
    entries,
  };
}

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
export function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer,
  };
}

export function submitFormAction(newEntry) {
  return {
    type: SUBMIT_FORM,
    newEntry,
  };
}
export function setTemplateAction(templateID) {
  return {
    type: SET_TEMPLATE,
    templateID,
  };
}

export function handleSubmitAction(entries) {
  return {
    type: HANDLE_SUBMIT,
    entries,
  };
}

export function removeEntryAction(entries) {
  return {
    type: REMOVE_ENTRY,
    entries,
  };
}
