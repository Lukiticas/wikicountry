import { Link } from "react-router-dom";
import formatNumber from "../../utils/formatNumber";
import ListItem from "../ListItem/ListItem.component";
import { CardBody, CardDetails, CardImage } from "./CountryCard.styles";

const CountryCard = (props) => {
  const {
    name,
    population,
    region,
    capital,
    flags,
    alpha3Code,
  } = props.country;

  return (
    <Link to={`/${alpha3Code}`}>
      <CardBody>
        <div>
          <CardImage loading="lazy" src={flags.png} alt={`${name} flag`} />
        </div>
        <CardDetails>
          <h2>{name}</h2>
          <ListItem title="Population" subtitle={formatNumber(population)} />
          <ListItem title="Region" subtitle={region} />
          <ListItem title="Capital" subtitle={capital} />
        </CardDetails>
      </CardBody>
    </Link>
  );
};

export default CountryCard;
