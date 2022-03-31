export const GET_DATA = "get_data";
const SET_DATA = "set_data";

export const get_data = () => ({
  type: GET_DATA
});

export const set_data = (data) => ({
  type: SET_DATA,
  data:data
});

const initialState = {
  data:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
        const {data}=action;
        return { ...state,data:data};
    default:
        return state;
  }
};
