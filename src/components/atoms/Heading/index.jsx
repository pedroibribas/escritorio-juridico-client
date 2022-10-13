import { PageHeading, SectionHeading, SubSectionHeading } from "./styles";

const Heading = ({ type, children }) => {
  const headings = {
    pageHeading: PageHeading,
    sectionHeading: SectionHeading,
    subSectionHeading: SubSectionHeading,
    fallback: SubSectionHeading,
  };

  const key = headings[type] ? type : "fallback";

  const Component = headings[key];

  return <Component>{children}</Component>
};

export { Heading };