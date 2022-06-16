import ContentLoader from "react-content-loader";

const ThreeDots = (props) => (
  <ContentLoader
    width="330px"
    height="50px"
    viewBox="0 0 330 50"
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="130" cy="26" r="8" />
    <circle cx="182" cy="26" r="8" />
    <circle cx="234" cy="26" r="8" />
  </ContentLoader>
);

ThreeDots.metadata = {
  name: "RioF",
  github: "clariokids",
  description: "Three Dots",
  filename: "ThreeDots",
};

export default ThreeDots;
