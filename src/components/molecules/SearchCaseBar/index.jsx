import { MdSearch } from "react-icons/md";
import { Container } from "../../atoms";
import { SearchInput } from "./styles";

const SearchCaseBar = ({ cases, setCaseSearchResult }) => {
  const handleChange = event => {
    const name = event.target.value.toLowerCase();

    const filterCasesByName = (array, value) => {
      const filteredArr = array.filter(item =>
        item.name.toLowerCase().includes(value)
      );
      return filteredArr;
    };

    if (!name) return;

    const result = filterCasesByName(cases, name);
    setCaseSearchResult(result);
  };

  const handleSubmit = event => event.preventDefault();

  return (
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
  );
};

export { SearchCaseBar };