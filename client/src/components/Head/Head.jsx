import { Helmet } from "react-helmet-async";

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>{`React Fastify Realm Demo | ${title}`}</title>
    </Helmet>
  );
};

export default Head;
