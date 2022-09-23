import { JSXErrorHandler } from "../JSXErrorHandler";
import { Font, PageHeading, SectionHeading, SubSectionHeading } from "./styles";

const Heading = ({ type, children }) => {
  switch (type) {
    case 'pageHeading':
      return (
        <PageHeading>
          <Font>{children}</Font>
        </PageHeading>
      )

    case 'sectionHeading':
      return (
        <SectionHeading>
          <Font>{children}</Font>
        </SectionHeading>
      )

    case 'subSectionHeading':
      return (
        <SubSectionHeading>
          <Font>{children}</Font>
        </SubSectionHeading>
      )

    default:
      return <JSXErrorHandler component='Heading' property='type' />
  }
};

export { Heading };