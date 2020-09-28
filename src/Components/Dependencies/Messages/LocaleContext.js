import React from "react";
export const LocaleContext = React.createContext();
const LocaleContextProvider = (props) => {
  const [locale, setLocale] = React.useState("en");
  return (
    <LocaleContext.Provider value={[locale, setLocale]}>
      {props.children}
    </LocaleContext.Provider>
  );
};
export default LocaleContextProvider;
