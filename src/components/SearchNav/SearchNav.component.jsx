import { NavBody, NavSearch, NavSelect, NavInput } from "./SearchNav.styles";
import { MagnifyingGlass } from "phosphor-react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const SearchNav = ({ list, setChangedList, changedList }) => {
  const [regionSelected, setRegionSelected] = useState("");
  const [countrySelected, setCountrySelected] = useState("");
  const { colors, title } = useContext(ThemeContext);
  const handleSelected = (evt) => {
    setRegionSelected(evt.target.value);
  };

  const changeBasedOnRegion = (list, region) => {
    const newList = list.filter((el) => el.region === region);
    setChangedList(regionSelected === "none" ? [] : newList);
  };

  const changeBaseOnSearch = (list, words) => {
    const newList = list.filter((el) => {
      const treated = Object.entries(el.translations);
      return treated.some((el) => el[1].includes(words));
    });
    setChangedList(newList);
  };

  useEffect(() => {
    changeBasedOnRegion(list, regionSelected);
  }, [regionSelected]);

  useEffect(() => {
    changeBaseOnSearch(list, countrySelected);
  }, [countrySelected]);

  return (
    <NavBody>
      <NavSearch>
        <MagnifyingGlass size={24} color={colors.wordPrimary} />
        <NavInput
          value={countrySelected}
          onChange={(evt) => setCountrySelected(evt.target.value)}
          placeholder="Search for a country..."
        />
      </NavSearch>

      <NavSelect defaultValue={regionSelected} onChange={handleSelected}>
        <option disabled hidden value="">
          Filter by Region
        </option>
        <option value="Africa">África</option>
        <option value="Americas">America</option>
        <option value="Asia">Ásia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="none">Show All</option>
      </NavSelect>
    </NavBody>
  );
};

export default SearchNav;
