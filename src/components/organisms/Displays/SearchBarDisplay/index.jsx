import { MdSearch } from "react-icons/md";
import { Container, Heading, Paragraph } from "../../../atoms";
import { SearchInput } from "./styles";

const SearchBarDisplay = ({ legalCases, setCaseSearchResult }) => {
  const handleChange = event => {
    if (!event.target.value) setCaseSearchResult(legalCases);

    // const filterCasesByParticipantsName = (array, query) => { };
  };

  const handleSubmit = event => event.preventDefault();

  return (
    <>
      <Heading type="subSectionHeading">
        Pesquisa de casos
      </Heading>
      <Paragraph>
        Pesquise casos no campo abaixo utilizando o nome de alguma das partes.{' '}
        <br /> O resultado é mostrado na tabela de sumário.
      </Paragraph>
      <Container content="any" mt="0.5rem">
        <form onSubmit={handleSubmit}>
          <Container content="row">
            <SearchInput
              type='text'
              placeholder="Insira o nome de uma das partes do processo"
              onChange={handleChange}
            />
            <Container content='searchInputIconContent'>
              <MdSearch />
            </Container>
          </Container>
        </form>
      </Container>
    </>
  );
};

export { SearchBarDisplay };