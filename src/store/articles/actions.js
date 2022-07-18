import { apiUrl } from "../constants";
export const REQUEST_ARTICLES_LOADING = "ARTICLES::REQUEST_LOADING";
export const REQUEST_ARTICLES_FAIL = "ARTICLES::REQUEST_FAIL";
export const REQUEST_ARTICLES_SUCCESS = "ARTICLES::REQUEST_SUCCESS";

export const getArticlesLoading = () => ({
  type: REQUEST_ARTICLES_LOADING,
});
export const getArticlesFail = error => ({
  type: REQUEST_ARTICLES_FAIL,
  payload: error,
});
export const getArticlesSuccess = articles => ({
  type: REQUEST_ARTICLES_SUCCESS,
  payload: articles,
});

export const getArticles = () => async dispatch => {
  dispatch(getArticlesLoading());
  try {
    const response = await fetch(apiUrl);
    console.log(response);

    if (!response.ok) {
      throw new Error("You have a error");
    }
    const result = await response.json();
    dispatch(getArticlesSuccess(result));
  } catch (error) {
    //console.warn(error);
    dispatch(getArticlesFail(error.message));
  }
};
