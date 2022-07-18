import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import {
  selectArcticlesList,
  selectArticlesError,
  selectArticlesLoading,
} from "../../store/articles/selectors";
import { Spinner } from "../Spinner/Spinner";
import "./Articles.css";

export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArcticlesList);
  const loading = useSelector(selectArticlesLoading);
  const error = useSelector(selectArticlesError);

  const requestArticles = async () => {
    dispatch(getArticles());
  };
  useEffect(() => {
    requestArticles();
  }, []);

  return (
    <div className="articles-block">
      <h1 className="articles-heading">Articles</h1>
      {loading ? (
        <span className="spinner">
          {" "}
          <Spinner />
        </span>
      ) : (
        <>
          <button className="articles-btn" onClick={requestArticles}>
            REQUEST
          </button>
          {!!error && <h4>ERROR: {error}</h4>}
          <ul className="articles-list">
            {articles.map(article => (
              <li key={article._id}>{article.text}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
