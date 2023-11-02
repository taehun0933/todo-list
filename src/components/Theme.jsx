import React, { useContext } from "react";
import { darkModeContext } from "../context/DarkModeContext";

export default function Theme() {
  //
  const contextValue = useContext(darkModeContext);
  console.log(contextValue);
  return <div></div>;
}
