const GET_ORDERDETAIL = 'order/GET_ORDERDETAIL';
const SETLOADING_ORDERDETAIL = 'order/SETLOADING_ORDERDETAIL';

export const getOrderDetail = (item) => ({
  type: GET_ORDERDETAIL,
  payload: item,
});

export const setLodingOrderDetail = (isLoding) => ({
  type: SETLOADING_ORDERDETAIL,
  payload: isLoding,
});

export const INITIAL_STATE = {
  content: {},
  isLoading: false,
};

export default function orderDetailReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ORDERDETAIL:
      return { ...state, content: action.payload };
    case SETLOADING_ORDERDETAIL:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
