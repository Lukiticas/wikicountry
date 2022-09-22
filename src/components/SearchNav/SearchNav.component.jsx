import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { changeBasedOnRegion, changeBaseOnSearch } from "../../utils";

import { MagnifyingGlass, CaretUp, CaretDown } from "phosphor-react";

import {
  NavBody,
  NavSearch,
  NavSelect,
  NavInput,
  NavSelectWrapper,
} from "./SearchNav.styles";

const SearchNav = ({ list, setChangedList, onSelect }) => {
  const { colors } = useContext(ThemeContext);
  const [regionSelected, setRegionSelected] = useState("");
  const [countrySelected, setCountrySelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelected = (evt) => {
    onSelect((ol) => !ol);
    setRegionSelected(evt.target.value);
  };

  useEffect(() => {
    changeBasedOnRegion(list, regionSelected, setChangedList);
  }, [regionSelected]);

  useEffect(() => {
    changeBaseOnSearch(list, countrySelected, setChangedList);
  }, [countrySelected]);

  return (
    <NavBody>
      <NavSearch>
        <MagnifyingGlass size={24} color={colors.wordPrimary} />
        <NavInput
          value={countrySelected}
          onChange={(evt) => {
            onSelect((ol) => !ol);
            setCountrySelected(evt.target.value);
          }}
          placeholder="Search for a country..."
          autoComplete="off"
        />
      </NavSearch>

      <NavSelectWrapper>
        <NavSelect
          defaultValue={regionSelected}
          onClick={() => {
            setIsOpen((ol) => !ol);
          }}
          onBlur={() => setIsOpen((ol) => !ol)}
          onChange={handleSelected}
        >
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
        {isOpen ? (
          <CaretDown color={colors.wordPrimary} size={16} weight="bold" />
        ) : (
          <CaretUp color={colors.wordPrimary} size={16} weight="bold" />
        )}
      </NavSelectWrapper>
    </NavBody>
  );
};

export default SearchNav;
