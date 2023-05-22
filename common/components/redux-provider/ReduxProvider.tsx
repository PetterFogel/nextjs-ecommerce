"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ReduxProvider = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);
