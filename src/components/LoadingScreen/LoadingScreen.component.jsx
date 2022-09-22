import ReactLoading from "react-loading";

const LoadingIconSection = ({
  ContainerForIcon,
  type,
  color,
  message,
  ...args
}) => {
  return (
    <ContainerForIcon {...args}>
      <ReactLoading type={type} color={color} />
      <h1>{message}</h1>
    </ContainerForIcon>
  );
};

const LoadingScreen = ({
  ContainerForPage,
  ContainerForIcon,
  type,
  color,
  message,
}) => {
  return (
    <ContainerForPage>
      <LoadingIconSection
        ContainerForIcon={ContainerForIcon}
        type={type}
        color={color}
        message={message}
      />
    </ContainerForPage>
  );
};

export default LoadingScreen;
