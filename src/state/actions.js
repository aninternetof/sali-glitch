export const SET_TEST = 'SET_TEST';

const setTest = (data) => {
  return {
    type: SET_TEST,
    data,
  };
};

export default {
  SET_TEST,
  setTest,
}
