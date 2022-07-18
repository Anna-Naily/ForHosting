import { Form } from "../Form/Form";
import "../../App.css";
import { useCallback } from "react";
import { useParams, Navigate } from "react-router";
import { push } from "firebase/database";
import { getChatMsgsListRefById } from "../../services/firebase";
import { useSelector } from "react-redux";
import { selectName } from "../../store/profile/selectors";

export const Chat = ({ msgs }) => {
  const { chatId } = useParams();
  const name = useSelector(selectName);

  const handleAddMessage = useCallback(
    message => {
      push(getChatMsgsListRefById(chatId), message);
    },
    [chatId]
  );

  if (!msgs[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="chat-window-block">
      <h2 className="header-user">Robot</h2>
      <div className="chat-window">
        {msgs[chatId].map(mes => (
          <div className="chat-window__el" key={mes.time}>
            {name}: {mes.text}
          </div>
        ))}
      </div>
      <div className="chat-window-bottom">
        <Form updateArray={handleAddMessage} />
      </div>
    </div>
  );
};
