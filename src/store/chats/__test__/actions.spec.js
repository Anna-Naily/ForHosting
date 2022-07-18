import { ADD_CHAT, addChat, SET_CHATS, setChats } from "../actions";

describe("addChat", () => {
  it("should return obj with certain type", () => {
    const expected = {
      type: ADD_CHAT,
    };
    const received = addChat();
    expect(received).toEqual(expected);
  });

  it("should return obj with type and payload", () => {
    const payload = [];
    const expected = {
      type: SET_CHATS,
      payload,
    };
    const received = setChats(payload);
    expect(received).toEqual(expected);
  });
});
