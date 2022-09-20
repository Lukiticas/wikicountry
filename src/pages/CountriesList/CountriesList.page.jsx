import CountryCard from "../../components/CountryCard/CountryCard.component";
import SearchNav from "../../components/SearchNav/SearchNav.component";
import { CLMain, CLSection } from "./CountriesList.styles";

const CountriesList = ({ list, setChangedList, changedList }) => {
  const newList = changedList.length ? changedList : list;

  const countryCards = newList.map((el) => {
    return <CountryCard key={el.name} country={el} />;
  });

  return (
    <CLMain>
      <SearchNav
        list={list}
        changedList={changedList}
        setChangedList={setChangedList}
      />
      <CLSection>{countryCards}</CLSection>;
    </CLMain>
  );
};

export default CountriesList;
