import React, { createContext, useContext, useState } from "react";

/**
 * @description 전역 state context api
 */
const GlobalContext = createContext({
  state: {},
  actions: {},
});

/**
 * @param {*} param0 {children} 하위 리액트 컴포넌트
 * @description 전역 context provider
 */
const GlobalProvider = ({ children }) => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageBinary, setImageBinary] = useState(null);

  const value = {
    state: { imageFile, imageUrl, imageBinary },
    actions: { setImageFile, setImageUrl, setImageBinary },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const value = useContext(GlobalContext);
  const { state = {}, actions = {} } = value;
  return [state, actions];
};

export { GlobalContext, GlobalProvider, useGlobalContext };
