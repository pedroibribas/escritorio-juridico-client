import styled from "styled-components";

const Font = styled.span`
  font-family: var(--sourceSerifPro);
`;

const PageHeading = styled.h1`
  max-width: var(--max-w-base);
  margin: 3rem auto 0;
  font-size: 2rem;
  font-weight: 600;
`

const SectionHeading = styled.h2`
  padding-top: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
`

const SubSectionHeading = styled.h3`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
`

export { Font, PageHeading, SectionHeading, SubSectionHeading };