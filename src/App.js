import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import { IntlProvider } from "react-intl";
import { LocaleContext } from "./Components/Dependencies/Messages/LocaleContext";
import en from "./translations/en.json";
import es from "./translations/es.json";
import fr from "./translations/fr.json";
import hin from "./translations/hin.json";
import ml from "./translations/ml.json";
const messages = {
  en,
  fr,
  hin,
  ml,
  es,
};
function App() {
  const [locale] = useContext(LocaleContext);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="AppContainer">
        <div className="App">
          <Main />
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
