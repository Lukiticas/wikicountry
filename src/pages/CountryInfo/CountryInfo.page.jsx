import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "styled-components";

import ReactLoading from "react-loading";
import {
  LoadingPage,
  LoadingIcon,
  NavBody,
  CIBody,
  CIMain,
  CIFlag,
  CISection,
  BCCard,
} from "./CountryInfo.styles";
import NavButton from "../../components/NavButton/NavButton.component";
import ListItem from "../../components/ListItem/ListItem.component";
import {
  ListSubtitle,
  ListTitle,
} from "../../components/ListItem/ListItem.styles";
import formatNumber from "../../utils/formatNumber";

const CountryInfo = ({ list }) => {
  const { code } = useParams();
  const [country, SetCountryData] = useState();
  const [borders, setBorders] = useState([]);
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();

  const getNameAPI = async (listOfCodes) => {
    if (
      listOfCodes === undefined ||
      (typeof listOfCodes !== Array && !listOfCodes.length)
    )
      return setBorders(undefined);
    const items = await Promise.all(
      listOfCodes.map((code) =>
        fetch(`https://restcountries.com/v3.1/alpha/${code}`).then((data) =>
          data.json()
        )
      )
    );
    setBorders(items);
  };

  useEffect(() => {
    const actualCountry = list.filter((item) => item.alpha3Code === code);
    SetCountryData(actualCountry[0]);
  }, [list]);

  useEffect(() => {
    country && getNameAPI(country.borders);
  }, [country, list]);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      {country ? (
        <CIBody>
          <NavBody>
            <NavButton title="Back" toDo={handleGoBack} />
          </NavBody>

          <CIMain>
            <div className="img-ctn">
              <CIFlag src={country.flags.svg} />
            </div>
            <CISection>
              <h2>{country.name}</h2>
              <div className="info-section">
                <div className="item-wrapper">
                  <ListItem title="Native Name" subtitle={country.nativeName} />
                  <ListItem
                    title="Population"
                    subtitle={formatNumber(country.population)}
                  />
                  <ListItem title="Region" subtitle={country.region} />
                  <ListItem title="Sub Region" subtitle={country.subregion} />
                  <ListItem title="Capital" subtitle={country.capital} />
                </div>
                <div className="item-wrapper">
                  <ListItem
                    title="Top Level Domain"
                    subtitle={country.topLevelDomain}
                  />
                  <ListItem
                    title="Currencies"
                    subtitle={country.currencies
                      .map((item) => item.name)
                      .join(", ")}
                  />
                  <ListItem
                    title="Languages"
                    subtitle={country.languages
                      .map((item) => item.name)
                      .join(", ")}
                  />
                </div>
              </div>
              <div className="border-countries">
                <ListTitle>Border Countries:</ListTitle>
                {borders !== undefined ? (
                  borders.map((border, idx) => {
                    return (
                      <BCCard
                        reloadDocument
                        to={`/${border[0].cca3}`}
                        key={idx}
                      >
                        {border[0].name.common}
                      </BCCard>
                    );
                  })
                ) : (
                  <ListSubtitle>none</ListSubtitle>
                )}
              </div>
            </CISection>
          </CIMain>
        </CIBody>
      ) : (
        <LoadingPage>
          <LoadingIcon>
            <ReactLoading type="spokes" color={colors.wordPrimary} />
            <h1>Carregando...</h1>
          </LoadingIcon>
        </LoadingPage>
      )}
    </>
  );
};

export default CountryInfo;
