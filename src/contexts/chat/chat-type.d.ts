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

export interface ChatReducerType {
  header: HeaderType;
  messages: {
    [key: string]: ChatMessageType;
  };
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
    payload: number;
  };
}

type DispatchTypes = ActionTypes[keyof ActionTypes];

type ActionPayloadType<T = Partial<keyof ActionTypes>> =
  T extends keyof ActionTypes ? ActionTypes[T] : never;

export type createMessageType = {
  type: ChatMessageType["type"];
  message: string;
  time: string;
  seen: ChatMessageType["seen"];
  from: ChatMessageType["from"];
};
