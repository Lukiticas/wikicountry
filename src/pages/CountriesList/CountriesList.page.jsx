import PaginatedList from "../../components/PaginatedList/PaginatedList.component";
import SearchNav from "../../components/SearchNav/SearchNav.component";
import { CLMain, CLSection } from "./CountriesList.styles";

const CountriesList = ({ list, setChangedList, changedList }) => {
  const newList = changedList.length ? changedList : list;
  return (
    <CLMain>
      <SearchNav list={list} setChangedList={setChangedList} />
      <PaginatedList items={newList} itemsPerPage={10} Wrapper={CLSection} />
    </CLMain>
  );
};

export default CountriesList;
