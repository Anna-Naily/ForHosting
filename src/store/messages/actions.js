import { onValue } from "@firebase/database";
import { messagesRef } from "../../services/firebase";
export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_ARRAY_MESSAGES = "MESSAGES::ADD_ARRAY_MESSAGES";
export const DELETE_ARRAY_MESSAGES = "MESSAGES::DELETE_ARRAY_MESSAGES";
export const SET_MESSAGES = "MESSAGERS::SET_MESSAGES";

export const addMessage = newMes => ({
  type: ADD_MESSAGE,
  payload: newMes,
});
export const addArrayMessages = id => ({
  type: ADD_ARRAY_MESSAGES,
  payload: id,
});
export const deleteArrayMessages = id => ({
  type: DELETE_ARRAY_MESSAGES,
  payload: id,
});
export const setMessages = newMsgs => ({
  type: SET_MESSAGES,
  payload: newMsgs,
});

export const initMessageTracking = () => dispatch => {
  onValue(messagesRef, snapshot => {
    const newMsgs = {};
    snapshot.forEach(chatMsgsSnap => {
      newMsgs[chatMsgsSnap.key] = Object.values(
        chatMsgsSnap.val().messageList || {}
      );
    });
    dispatch(setMessages(newMsgs));
  });
};

// export const addMessageWithReply = message => dispatch => {
//   dispatch(addMessage(message));
//   if (message.author !== "Robot") {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       const botMessage = {
//         author: "Robot",
//         id: message.id,
//         text: `Hello, ${message.author} !`,
//         time: Date.now(),
//       };
//       dispatch(addMessage(botMessage));
//     }, 1500);
//   }
// };
