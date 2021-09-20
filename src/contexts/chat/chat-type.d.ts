import React from "react";

export interface ChatMessageType {
  id: number;
  message: string;
  seen: "yes" | "no";
  time: string;
  from: "sender" | "receiver" | null;
  type: "label" | "message";
}

export interface HeaderType {
  profileName: string;
  activity_status: string;
  profileImage: string;
}

export interface MessageType {
  [key: string]: ChatMessageType;
}

export interface ChatReducerType {
  header: HeaderType;
  messages: MessageType;
  messageID?: ChatMessageType["id"] | null;
}

export interface ChatContextType {
  state: ChatReducerType;
  dispatch: React.Dispatch<ActionTypes[keyof ActionTypes]>;
}

interface ActionTypes {
  HEADER_UPDATED: {
    type: "HEADER_UPDATED";
    payload: HeaderType;
  };
  NEW_MESSAGE_ADDED: {
    type: "NEW_MESSAGE_ADDED";
    payload: ChatMessageType;
  };
  MESSAGE_DELETED: {
    type: "MESSAGE_DELETED";
    payload: ChatMessageType["id"];
  };
  MESSAGE_UPDATED: {
    type: "MESSAGE_UPDATED";
    payload: ChatMessageType;
  };
  SET_MESSAGE_ID: {
    type: "SET_MESSAGE_ID";
    payload: ChatMessageType["id"] | null;
  };
  SET_MESSAGES: {
    type: "SET_MESSAGES";
    payload: MessageType;
  };
}

type DispatchTypes = ActionTypes[keyof ActionTypes];

export type ActionPayloadType = {
  [P in keyof ActionTypes]: ActionTypes[P]["payload"];
};

export type createMessageType = {
  type: ChatMessageType["type"];
  message: string;
  time: string;
  seen: ChatMessageType["seen"];
  from: ChatMessageType["from"];
};

export interface MessageItemsProps extends ChatMessageType {
  sender?: boolean;
  index: number;
  prevToMe: boolean;
}
