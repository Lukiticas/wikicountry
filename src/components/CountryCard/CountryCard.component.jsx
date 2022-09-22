import { Link } from "react-router-dom";
import formatNumber from "../../utils/formatNumber";
import SimpleDescription from "../SimpleDescription/SimpleDescription.component";
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
      <CardBody offSet={props.offSetAnimation}>
        <div>
          <CardImage loading="lazy" src={flags.png} alt={`${name} flag`} />
        </div>
        <CardDetails>
          <h3>{name}</h3>
          <SimpleDescription
            title="Population"
            subtitle={formatNumber(population)}
          />
          <SimpleDescription title="Region" subtitle={region} />
          <SimpleDescription
            title="Capital"
            subtitle={capital ? capital : "none"}
          />
        </CardDetails>
      </CardBody>
    </Link>
  );
};

export default CountryCard;
