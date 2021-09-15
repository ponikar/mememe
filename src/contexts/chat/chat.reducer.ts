import {
  ActionPayloadType,
  ActionTypes,
  ChatReducerType,
  DispatchTypes,
} from "./chat-type";

export const CHAT_INITIAL_STATE: ChatReducerType = {
  header: {
    profileImage: "./src/svgs/avatar.svg",
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
    default:
      return state;
  }
};
