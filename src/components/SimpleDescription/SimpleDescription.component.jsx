import { ListSubtitle, ListTitle } from "./SimpleDescription.styles";

const SimpleDescription = ({ title, subtitle }) => {
  return (
    <>
      <ListTitle>
        {title}: <ListSubtitle>{subtitle}</ListSubtitle>.
      </ListTitle>
    </>
  );
};

export default SimpleDescription;
