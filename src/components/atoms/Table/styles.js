import styled from "styled-components";

const HomeCasesSummaryTable = styled.table`
    width: 1050px;
    border-spacing: 0;
    border: 1px solid var(--gray-300);
    font-family: var(--poppins);
    font-size: 0.9rem;

  th {
    height: 2rem;
    padding: 0 0.5rem;
    background: var(--slate-500);
    color: var(--white);
    font-weight: 400;
    text-align: left;

    &:first-child {
      width: 200px;
    }
    &:nth-child(2) {
      width: 300px;
    }
    &:nth-child(3) {
      width: 500px;
    }
    &:nth-child(4) {
      width: 50px;
    }
  }

  td {
    height: 2rem;
    padding: 0 0.5rem;
    border-top: 1px solid var(--gray-300);
    background: var(--white);
  }
`;

const CasePageSummaryTable = styled.table`
  font-family: var(--poppins);
  font-size: 0.9rem;

  th {
    background: #FFF;
    text-align: left;
    font-weight: 600;
  }

  td {
    padding: 0 0.75rem;

    &:first-child {
      font-weight: 600;
      padding: 0; 
    }
  }
`;

const CasePageDetailsTable = styled.table`
  border-spacing: 0;
  font-family: var(--sourceSerifPro);
  font-size: 1rem;

  /* fix borders */
  tr {
    th,td {
      border: 1px solid #000;
    }
    
    th {
      border-right: none;
    }

    & + tr {
      th,td {
        border-top: none;
      }
    }
  }

  th {
    width: 200px;
    padding: 0.1rem 0;
    background: var(--gray-300);
    font-weight: 600;
  }

  td {
    width: 400px;
    padding-left: 1rem;
  }
`;

export { CasePageDetailsTable, CasePageSummaryTable, HomeCasesSummaryTable };