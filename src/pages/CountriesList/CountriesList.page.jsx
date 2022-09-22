import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.component";
import PaginatedList from "../../components/PaginatedList/PaginatedList.component";
import SearchNav from "../../components/SearchNav/SearchNav.component";
import {
  CLMain,
  CLSection,
  CLLoading,
  CLLoadingIconSection,
} from "./CountriesList.styles";

const CountriesList = ({ list, setChangedList, changedList }) => {
  const [hasSelectBeenClicked, setHasSelectedBeenClicked] = useState(false);
  const { colors } = useContext(ThemeContext);
  const newList = changedList.length ? changedList : list;

  return (
    <CLMain>
      <SearchNav
        list={list}
        setChangedList={setChangedList}
        onSelect={setHasSelectedBeenClicked}
      />
      {list.length > 0 ? (
        <PaginatedList
          items={newList}
          itemsPerPage={10}
          Wrapper={CLSection}
          reactTo={hasSelectBeenClicked}
        />
      ) : (
        <LoadingScreen
          ContainerForIcon={CLLoadingIconSection}
          ContainerForPage={CLLoading}
          color={colors.wordPrimary}
          message="Loading..."
          type="cubes"
        />
      )}
    </CLMain>
  );
};

export default CountriesList;
