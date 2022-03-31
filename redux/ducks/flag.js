const SETFALG = "setflag";
const UNSETFLAG = "unsetflag";

export const setflag = () => ({
  type: SETFALG
});

export const unsetflag = () => ({
  type: UNSETFLAG
});

const initialState = {
  flag: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SETFALG:
      return { ...state, flag:true};
    case UNSETFLAG:
      return { ...state, flag:false};
    default:
      return state;
  }
};
