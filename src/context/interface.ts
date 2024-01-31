import { ReactElement } from "react";

export interface IContext {
  theme: string;
  change: (theme: string) => void;
}

export interface IThemeProvider {
  children: ReactElement;
  props?: unknown;
}
