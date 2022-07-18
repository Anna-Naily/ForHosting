import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addChatWithfb,
  deleteChatWithfb,
  initChatsTracking,
} from "../../store/chats/actions";
import "./ChatList.css";
import { useDispatch, useSelector } from "react-redux";

import { selectChats } from "../../store/chats/selectors";

export const ChatList = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const chatList = useSelector(selectChats);
  const handleDeleteChat = useCallback(
    deleteId => {
      dispatch(deleteChatWithfb(deleteId));
    },

    [dispatch]
  );
  useEffect(() => {
    dispatch(initChatsTracking());
  }, [dispatch]);

  const handleAddChat = useCallback(() => {
    let newId = 1;
    if (chatList.length > 0) {
      newId = Number(chatList[chatList.length - 1].id) + 1;
    }
    if (value === "") {
      dispatch(addChatWithfb({ name: "Новый чат", mes: "", id: newId }));
    } else {
      dispatch(addChatWithfb({ name: value, mes: "", id: newId }));
    }

    setValue("");
  }, [chatList, value, dispatch]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className="chat-block">
      <ul className="list-chat">
        {chatList.map(chat => (
          <li className="list-chat__item" key={chat.id}>
            <Link to="/chats">
              <FontAwesomeIcon
                className="chat-icon"
                icon={faTimesCircle}
                onClick={() => handleDeleteChat(chat.id)}
              />
            </Link>
            <Link to={`/chats/${chat.id}`} className="link-chat">
              <h2 className="header-chat">{chat.name}</h2>
              <p className="text-chat">{chat.mes}</p>
            </Link>
          </li>
        ))}
      </ul>

      <input
        className="chat-input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Название чата"
      />
      <FontAwesomeIcon
        className="add-icon"
        icon={faPlus}
        onClick={handleAddChat}
      />
    </div>
  );
};
