import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "styled-components";

import { ListTitle } from "../../components/SimpleDescription/SimpleDescription.styles";
import {
  LoadingIconSection,
  LoadingPageMain,
  NavBody,
  CIMain,
  CIMainSection,
  CIFlagImage,
  CISection,
  BBLink,
  InfoItemDivider,
  InfoSection,
  InfoBorderBody,
  MapSection,
  NewSection,
  NewsDiv,
} from "./CountryInfo.styles";

import LoadingScreen from "../../components/LoadingScreen/LoadingScreen.component";
import SimpleButton from "../../components/SimpleButton/SimpleButton.component";
import SimpleDescription from "../../components/SimpleDescription/SimpleDescription.component";

import { formatNumber } from "../../utils";
import CountryMap from "../../components/CountryMap/CountryMap.component";
import { useInView } from "react-intersection-observer";
import NewsCard from "../../components/NewsCard/NewsCard.component";

const API_KEY = import.meta.env.VITE_API_KEY;

const CountryInfo = ({ list }) => {
  const [country, SetCountryData] = useState();
  const [borders, setBorders] = useState([]);
  const [news, setNews] = useState([]);

  const { code } = useParams();
  const [ref, inView] = useInView({ threshold: 1.0 });
  const { colors } = useContext(ThemeContext);

  const navigate = useNavigate();
  const memoEnteredView = inView || news.length > 0;

  const handleGoBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const actualCountry = list.filter((item) => item.alpha3Code === code);
    SetCountryData(actualCountry[0]);
  }, [list]);

  useEffect(() => {
    const getNameAPI = async (listOfCodes) => {
      if (
        listOfCodes !== undefined ||
        (typeof listOfCodes === Array && listOfCodes.length)
      ) {
        const items = await Promise.all(
          listOfCodes.map(async (code) =>
            fetch(`https://restcountries.com/v3.1/alpha/${code}`).then((data) =>
              data.json()
            )
          )
        );
        setBorders(items);
      } else {
        return setBorders([[{ name: { common: "none" }, cca3: "" }]]);
      }
    };

    country && getNameAPI(country.borders);
  }, [country, list]);

  useEffect(() => {
    const getNewsAPI = async (target, pgSize) => {
      const API_URL = `https://newsapi.org/v2/everything?q=${target}&apiKey=${API_KEY}&pageSize=${pgSize}`;
      const data = await fetch(API_URL);
      const dataJson = await data.json();
      setNews(dataJson.articles);
    };

    country && getNewsAPI(country.name, 10);
  }, [memoEnteredView]);

  const borderList = country
    ? borders.map((border, idx) => {
        return (
          <BBLink reloadDocument to={`/${border[0].cca3}`} key={idx}>
            {border[0].name.common}
          </BBLink>
        );
      })
    : [];

  return (
    <>
      {country ? (
        <CIMain>
          <NavBody className="CIHeader">
            <SimpleButton title="Back" toDo={handleGoBack} />
          </NavBody>

          <CIMainSection className="CIMainSection">
            <div className="img-ctn">
              <CIFlagImage src={country.flags.svg} />
            </div>

            <CISection className="CISectionWrapper">
              <h2>{country.name}</h2>

              <InfoSection className="CISectionInfo">
                <InfoItemDivider>
                  <SimpleDescription
                    title="Native Name"
                    subtitle={country.nativeName}
                  />
                  <SimpleDescription
                    title="Population"
                    subtitle={formatNumber(country.population)}
                  />
                  <SimpleDescription title="Region" subtitle={country.region} />
                  <SimpleDescription
                    title="Sub Region"
                    subtitle={country.subregion}
                  />
                  <SimpleDescription
                    title="Capital"
                    subtitle={country.capital ? country.capital : "none"}
                  />
                </InfoItemDivider>
                <InfoItemDivider>
                  <SimpleDescription
                    title="Top Level Domain"
                    subtitle={country.topLevelDomain}
                  />
                  <SimpleDescription
                    title="Currencies"
                    subtitle={
                      country.currencies
                        ? country.currencies.map((item) => item.name).join(", ")
                        : "none"
                    }
                  />
                  <SimpleDescription
                    title="Languages"
                    subtitle={
                      country.languages
                        ? country.languages.map((item) => item.name).join(", ")
                        : "none"
                    }
                  />
                </InfoItemDivider>
              </InfoSection>

              <InfoBorderBody className="InfoBorderBody">
                <ListTitle>Border Countries:</ListTitle>
                {borderList}
              </InfoBorderBody>
            </CISection>
          </CIMainSection>

          <MapSection className="MapSection">
            <CountryMap coords={country.latlng} name={country.name} />
          </MapSection>

          <NewSection ref={ref} className="NewSection">
            <h2>Latest news </h2>
            <NewsDiv>
              {news.length &&
                news.map((el, idx) => <NewsCard key={idx} data={el} />)}
            </NewsDiv>
          </NewSection>
        </CIMain>
      ) : (
        <LoadingScreen
          ContainerForIcon={LoadingIconSection}
          ContainerForPage={LoadingPageMain}
          color={colors.wordPrimary}
          message="Loading..."
          type="spokes"
        />
      )}
    </>
  );
};

export default CountryInfo;
