import { ChatList } from "../ChatList/ChatList";
import { Chat } from "../Chat/Chat";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { WaitingPage } from "../WaitingPage/WaitingPage";
import { Profile } from "../Profile/Profile";
import { Home } from "../Home/Home";
import { Articles } from "../Articles/Articles";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../../services/firebase";
import { signIn, signOut } from "../../store/profile/actions";
import { SignUp } from "../SignUp/SignUp";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

import { initMessageTracking } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";

export const Router = () => {
  const msgs = useSelector(selectMessages);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(signIn());
      } else {
        dispatch(signOut());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  useEffect(() => {
    dispatch(initMessageTracking());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="header-block">
        <Link to="/profile" className="btn-home">
          <FontAwesomeIcon className="font-icon" icon={faUserCircle} />
        </Link>
        <Link to="/" className="btn-home">
          <FontAwesomeIcon className="font-icon" icon={faHome} />
        </Link>
        <Link to="/articles" className="btn-home">
          <FontAwesomeIcon className="font-icon" icon={faNewspaper} />
        </Link>
      </div>
      <Link to="/chats" className="App-header__heading">
        Все чаты{" "}
      </Link>

      <Routes>
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route path="articles" element={<Articles />} />
        <Route path="chats">
          <Route
            index
            element={
              <header className="App-header">
                <div className="chat-list-block">
                  <PrivateRoute>
                    <ChatList />
                  </PrivateRoute>
                </div>
                <WaitingPage />
              </header>
            }
          />
          <Route
            path=":chatId"
            element={
              <header className="App-header">
                <div className="chat-list-block">
                  <PrivateRoute>
                    <ChatList />
                  </PrivateRoute>
                </div>
                <PrivateRoute>
                  <Chat msgs={msgs} />
                </PrivateRoute>
              </header>
            }
          />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  );
};
