import {
  ActionPayloadType,
  ActionTypes,
  ChatReducerType,
  DispatchTypes,
} from "./chat-type";

export const CHAT_INITIAL_STATE: ChatReducerType = {
  header: {
    profileImage: "",
    username: "iamJack",
    profileName: "Jack",
  },
  newDateLabel: "Today",
  newMessage: {
    id: new Date().getTime(),
    message: "New Message",
    seen: false,
    time: "10:30 AM",
    from: "receiver",
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
    default:
      return state;
  }
};
