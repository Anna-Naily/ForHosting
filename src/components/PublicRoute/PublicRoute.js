import { Navigate } from "react-router";
import { selectAuth } from "../../store/profile/selectors";
import { useSelector } from "react-redux";

export const PublicRoute = ({ children }) => {
  const authed = useSelector(selectAuth);
  return !authed ? children : <Navigate to="/chats" replace />;
};
