"use client";

import { Provider } from "react-redux";

import { store as reduxStore } from "@/lib/redux";

export const ReduxProvider = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};
