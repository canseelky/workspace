export const SET_CURRENT_QUESTION = "setCurrentQuestion";
export const SET_SCORE = "SetScore";
export const SET_USER_ANSWERED = "setUserAnswered";
export const SET_USER_ANSWER = "setUserAnswer";
export const RESTART = "restart";

export const getNextQuestion = (lenOfQuestion) => {
  return {
    type: SET_CURRENT_QUESTION,
    payload: lenOfQuestion,
  };
};

export const setScore = () => {
  return {
    type: SET_SCORE,
  };
};

export const setUserAnswered = (payload) => {
  return {
    type: SET_USER_ANSWERED,
    payload,
  };
};

export const setUserChoice = (payload) => {
  return {
    type: SET_USER_ANSWER,
    payload,
  };
};
