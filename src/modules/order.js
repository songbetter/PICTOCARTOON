const GET_ORDER = 'order/GET_ORDER';
const PAGING_ORDER = 'order/PAGING_ORDER';
const SETLOADING_ORDER = 'order/SETLOADING_ORDER';

export const getOrder = (item) => ({ type: GET_ORDER, payload: item });
export const pagingOrder = (page) => ({ type: PAGING_ORDER, payload: page });
export const setLodingOrder = (isLoding) => ({
  type: SETLOADING_ORDER,
  payload: isLoding,
});

export const INITIAL_STATE = {
  totalPages: 0,
  currentPage: 0,
  content: [],
  isLoading: false,
};

export default function orderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ORDER:
      return { ...state, ...action.payload };
    case PAGING_ORDER:
      return { ...state, currentPage: action.payload - 1 };
    case SETLOADING_ORDER:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
