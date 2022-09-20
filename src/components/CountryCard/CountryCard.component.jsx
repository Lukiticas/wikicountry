import { Link } from "react-router-dom";
import { CardBody, CardDetails, CardImage } from "./CountryCard.styles";

const CountryCard = (props) => {
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  const {
    name,
    population,
    region,
    capital,
    flags,
    alpha3Code,
  } = props.country;

  return (
    <Link to={`/country/${alpha3Code}`}>
      <CardBody>
        <div>
          <CardImage loading="lazy" src={flags.png} alt={`${name} flag`} />
        </div>
        <CardDetails>
          <h2>{name}</h2>
          <p>
            Population:
            <span>{formatNumber(population)}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </CardDetails>
      </CardBody>
    </Link>
  );
};

export default CountryCard;
