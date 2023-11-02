import { createContext } from "react";
import Theme from "../components/Theme";

export const darkModeContext = createContext("ㅎㅇ");

export function DarkmodeContext() {
  return (
    <darkModeContext.Provider value={{ theme: "라이트 모드" }}>
      <Theme />
    </darkModeContext.Provider>
  );
}
