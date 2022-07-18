import { REQUEST_STATUS } from "../constants";

export const selectArcticlesList = state => state.articles.articlesList;
export const selectArticlesLoading = state =>
  state.articles.request.status === REQUEST_STATUS.LOADING;
export const selectArticlesError = state => state.articles.request.error;
