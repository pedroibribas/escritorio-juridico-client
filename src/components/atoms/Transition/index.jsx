import styled from "styled-components";
import { JSXErrorHandler } from "../JSXErrorHandler";

const HeightTransition = styled.div`
  height: ${props => props.isOpen ? props.size : '0px'};
  transition: height 0.25s ease-in-out;
  overflow-y: ${props => props.overflowY || 'scroll'};
`;

const Transition = ({ property, toggle, size, overflowY, children }) => {
  switch (property) {
    case 'heightTransition':
      return (
        <HeightTransition isOpen={toggle} size={size} overflowY={overflowY}>
          {children}
        </HeightTransition>
      );

    default:
      return <JSXErrorHandler component='Transition' property='property' />;
  }
};

export { Transition };