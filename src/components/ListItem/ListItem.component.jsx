import { ListSubtitle, ListTitle } from "./ListItem.styles";

const ListItem = ({ title, subtitle }) => {
  return (
    <>
      <ListTitle>
        {title}: <ListSubtitle>{subtitle}</ListSubtitle>.
      </ListTitle>
    </>
  );
};

export default ListItem;
