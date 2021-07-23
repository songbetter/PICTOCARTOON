const GET_ORDER = 'order/GET_ORDER';
const PAGING_ORDER = 'order/PAGING_ORDER';

export const getOrder = (item) => ({ type: GET_ORDER, payload: item });
export const pagingOrder = (page) => ({ type: PAGING_ORDER, payload: page });

export const INITIAL_STATE = { totalPages: 0, currentPage: 0, content: [] };

export default function orderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ORDER:
      return { ...state, ...action.payload };
    case PAGING_ORDER:
      return { ...state, currentPage: action.payload - 1 };
    default:
      return state;
  }
}
