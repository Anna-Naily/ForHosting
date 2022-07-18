import {
  getArticles,
  getArticlesLoading,
  getArticlesSuccess,
  REQUEST_ARTICLES_LOADING,
  REQUEST_ARTICLES_SUCCESS,
} from "../actions";

describe("getArticlesLoading", () => {
  it("should return obj with certain type", () => {
    const expected = {
      type: REQUEST_ARTICLES_LOADING,
    };
    const received = getArticlesLoading();
    expect(received).toEqual(expected);
  });
});

describe("getArticlesSuccess", () => {
  it("should return obj with type and payload", () => {
    const payload = [];
    const expected = {
      type: REQUEST_ARTICLES_SUCCESS,
      payload,
    };

    const received = getArticlesSuccess(payload);

    expect(received).toEqual(expected);
  });
});
describe("getArticles", () => {
  it("dispatches getArticlesLoading", () => {
    const mockDispatch = jest.fn();

    getArticles()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(getArticlesLoading());
  });

  it("dispatches success action on successfull fetch", async () => {
    const result = { articles: [] };
    fetch.mockResponseOnce(JSON.stringify(result));
    const mockDispatch = jest.fn();
    await getArticles()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(result));
  });
});
