import React, { useRef, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";

export const Form = props => {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const { chatId } = useParams();
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.updateArray({
      author: "User",
      id: chatId,
      text: text,
      time: Date.now(),
    });
    setText("");
    inputRef.current?.focus();
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className="form-block" onSubmit={handleSubmit}>
      <input
        className="form-block__input"
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введите сообщение"
      />
      <Button
        className="mb-2 btn-input"
        as="input"
        type="submit"
        value="Отправить"
        size="sm"
      />{" "}
    </form>
  );
};
