import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryMainPage = () => {
  const { code } = useParams();
  const [country, SetCountryData] = useState();

  useEffect(() => {
    async function countryData() {
      const data = await fetch(`https://restcountries.com/v2/alpha/${code}`);
      const json = await data.json();
      SetCountryData(json);
    }
    countryData();
  }, []);
  return (
    <main>
      <section>
        <div className="country__flag">
          <img
            src={country.flags.svg ? country.flags.svg : country.flags.png}
            alt={`${country.name} flag`}
          />
        </div>
        <div className="country__details">
          <h2>{country.name}</h2>
          <div className="country__details-infos"></div>
        </div>
      </section>
    </main>
  );
};

export default CountryMainPage;
