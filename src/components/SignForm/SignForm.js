import { useState } from "react";
import { Spinner } from "../Spinner/Spinner";

export const SignForm = ({ onSubmit, error, loading }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePass = e => {
    setPass(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(email, pass);
    setEmail("");
    setPass("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={handleChangeEmail} />
        <input type="password" value={pass} onChange={handleChangePass} />
        <input type="submit" value="Войти" disabled={loading} />
      </form>
      {loading && <Spinner />}
      {error && <h4>{error}</h4>}
    </>
  );
};
