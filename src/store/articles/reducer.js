import { REQUEST_STATUS } from "../constants";
import {
  REQUEST_ARTICLES_FAIL,
  REQUEST_ARTICLES_LOADING,
  REQUEST_ARTICLES_SUCCESS,
} from "./actions";

const dataState = {
  articlesList: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: "",
  },
};
export const articlesReducer = (state = dataState, { type, payload }) => {
  switch (type) {
    case REQUEST_ARTICLES_LOADING:
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.LOADING,
        },
      };
    case REQUEST_ARTICLES_SUCCESS:
      return {
        ...state,
        articlesList: payload,
        request: {
          error: "",
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    case REQUEST_ARTICLES_FAIL:
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAIL,
        },
      };
    default:
      return state;
  }
};
