import {
  CardArticle,
  CardImage,
  CardLink,
  CardSection,
  CardView,
  CardWrapper,
} from "./NewsCard.styles";

const NewsCard = ({ data }) => {
  const { source, title, content, url, image, publishedAt } = data;

  return (
    <CardArticle>
      <CardWrapper>
        <CardImage loading="lazy" src={image} alt={title} />
      </CardWrapper>
      <CardLink href={url}>
        <CardSection>
          <CardView>
            <small>{source.name}</small>
            <small>{publishedAt.slice(0, 10).replace(/-/g, "/")}</small>
          </CardView>
          <h3>{content.slice(0, 70)}...</h3>
          <p>{content.split("[")[0]}</p>
        </CardSection>
      </CardLink>
    </CardArticle>
  );
};

export default NewsCard;
