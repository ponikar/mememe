import React, { useCallback, useMemo } from "react";
import { HeaderType } from "./chat-type";
import { useChatContext } from "./chat.context";

export const useHeader = (): [
  HeaderType,
  (payload: Partial<HeaderType>) => void
] => {
  const {
    state: { header },
    dispatch,
  } = useChatContext();

  const memoHeader = useMemo(
    () => ({
      ...header,
    }),
    [header]
  );

  const updateHeader = useCallback(
    (payload: Partial<HeaderType>) => {
      dispatch({ type: "HEADER_UPDATED", payload: { ...header, ...payload } });
    },
    [header, dispatch]
  );

  return [memoHeader, updateHeader];
};
