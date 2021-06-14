import { memo } from "react";
import styled from "styled-components";

const Footer = styled.footer`
  position: absolute;
  bottom: -6rem;
  border-top: 1px solid #eaeaea;
  width: 100vw;
  padding: 1.5rem !important;
`;

const PageFooter = () => {
  return (
    <Footer className="footer">
      <div className="content has-text-centered">
        <p className="title is-3">&copy; 2021 React Fastify Restaurants App</p>
      </div>
    </Footer>
  );
};

export default memo(PageFooter);
