import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from "./actions";

const chatlist = [];

export const chatsReducer = (state = chatlist, { type, payload }) => {
  switch (type) {
    case ADD_CHAT:
      return [...state, payload];
    case DELETE_CHAT:
      return state.filter(({ id }) => id !== payload);
    case SET_CHATS:
      return payload;
    default:
      return state;
  }
};
