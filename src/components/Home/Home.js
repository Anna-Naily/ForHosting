import React from "react";
import { Link } from "react-router-dom";
import { logIn } from "../../services/firebase";
import { SignForm } from "../SignForm/SignForm";
import "./Home.css";
import { useState } from "react";

export const Home = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignIn = async (email, pass) => {
    setLoading(true);
    try {
      await logIn(email, pass);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-home-block">
      <h1 className="main-home-block__heading">Добро пожаловать в чат</h1>
      <SignForm onSubmit={handleSignIn} error={error} loading={loading} />
      <Link to="/signup">Зарегистрироваться</Link>
    </div>
  );
};
