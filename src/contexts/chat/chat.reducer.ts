import {
  ActionPayloadType,
  ActionTypes,
  ChatReducerType,
  DispatchTypes,
} from "./chat-type";

export const CHAT_INITIAL_STATE: ChatReducerType = {
  header: {
    profileImage: "/svgs/avatar.svg",
    activity_status: "Online",
    profileName: "Jack",
  },
  messages: {},
};

export const chatReducer = (
  state: ChatReducerType = CHAT_INITIAL_STATE,
  action: DispatchTypes
): ChatReducerType => {
  switch (action.type) {
    case "HEADER_UPDATED":
      return { ...state, header: { ...state.header, ...action.payload } };
    case "NEW_MESSAGE_ADDED":
      return {
        ...state,
        messages: { ...state.messages, [action.payload.id]: action.payload },
      };
    case "MESSAGE_DELETED":
      delete state.messages[action.payload];
      return { ...state, messages: { ...state.messages } };

    case "MESSAGE_UPDATED":
      state.messages[action.payload.id] = action.payload;
      return { ...state, messages: { ...state.messages } };
    case "SET_MESSAGE_ID":
      return { ...state, messageID: action.payload };
    case "SET_MESSAGES":
      return { ...state, messages: { ...action.payload } };
    default:
      return state;
  }
};
