import styled from "styled-components";

const PageHeading = styled.h1`
  max-width: var(--max-w-base);
  margin: 3rem auto 0;
  font-family: var(--sourceSerifPro);
  font-size: 2rem;
  font-weight: 600;
`

const SectionHeading = styled.h2`
  padding-top: 2rem;
  font-family: var(--sourceSerifPro);
  font-size: 1.5rem;
  font-weight: 500;
`

const SubSectionHeading = styled.h3`
  margin-top: 1rem;
  font-family: var(--sourceSerifPro);
  font-size: 1.25rem;
  font-weight: 600;
`

export { PageHeading, SectionHeading, SubSectionHeading };