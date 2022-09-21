import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark.js";
import light from "./styles/themes/light.js";
import usePersistedState from "./utils/UsePersistedState";
import { GlobalStyle } from "./styles/global.styles";
import CountriesList from "./pages/CountriesList/CountriesList.page";
import CountryInfo from "./pages/CountryInfo/CountryInfo.page";
import Header from "./components/Header/Header.component";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);
  const [countriesList, SetCountriesList] = useState([]);
  const [changedList, setChangedList] = useState([]);

  useEffect(() => {
    async function countryData() {
      const data = await fetch("https://restcountries.com/v2/all");
      const json = await data.json();
      SetCountriesList(json);
    }
    countryData();
  }, []);

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header themeHandler={toggleTheme} />}>
          {countriesList && (
            <Route
              index
              element={
                <CountriesList
                  list={countriesList}
                  changedList={changedList}
                  setChangedList={setChangedList}
                />
              }
            />
          )}
          <Route
            exact
            path="/:code"
            element={<CountryInfo list={countriesList} />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
