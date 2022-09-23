import styled from 'styled-components'

const SectionContainer = styled.section`
  width: 100%;
  height: ${props => props.isScreenHeight ? '100vh' : 'auto'};
  padding: ${props => props.isScreenHeight ? '10rem' : 'none'};
  background: ${props => props.color || 'var(--white)'};
`

const SectionContent = styled.div`
  max-width: ${props => props.size || 'var(--max-w-base)'};
  margin: 0 auto;
  padding: 0 6rem 2rem;
`

const Section = ({ color, isScreenHeight, size, children }) => (
  <SectionContainer isScreenHeight={isScreenHeight} color={color}>
    <SectionContent size={size}>
      {children}
    </SectionContent>
  </SectionContainer>
);

export { Section };
