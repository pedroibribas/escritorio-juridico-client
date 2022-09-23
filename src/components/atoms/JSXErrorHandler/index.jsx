import styled from "styled-components";

const Alert = styled.mark`
  font-family: cursive;
  text-decoration: wavy;
`;

const Component = styled.span`
  color: #FF1E00;
  font-weight: 600;
`;

const Property = styled.span`
  /* color: #3CCF4E; */
  font-style: italic;
  font-weight: 600;
`;

const JSXErrorHandler = ({ component, property }) => (
  <Alert>
    <Component>Component &lt;{component}&gt;:</Component> React prop{' '}
    <Property>{property}</Property> is missing
  </Alert>
)

export { JSXErrorHandler };