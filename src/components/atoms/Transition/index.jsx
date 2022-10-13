import styled from "styled-components";

const HeightTransition = styled.div`
  height: ${props => props.isOpen ? props.size : '0px'};
  transition: height 0.25s ease-in-out;
  overflow-y: ${props => props.overflowY || 'scroll'};
`;

const Transition = ({ property, toggle, size, overflowY, children }) => {
  const transitions = {
    heightTransition: HeightTransition,
    fallback: HeightTransition,
  };

  const key = transitions[property] ? property : "fallback";

  const Component = transitions[key];

  return (
    <Component
      isOpen={toggle}
      size={size}
      overflowY={overflowY}
    >
      {children}
    </Component>
  );
};

export { Transition };