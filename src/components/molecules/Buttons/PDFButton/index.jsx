import { getPDFAPIHandler } from "../../../../api/services/pdf";
import useLegalCase from "../../../../helpers/hooks/useLegalCase";
import { Button, Container, Paragraph } from "../../../atoms";

const PDFButton = () => {
  const legalCase = useLegalCase();

  const handleClick = async () => {
    return await getPDFAPIHandler(legalCase)
      .then((res) => {
        const blob = new Blob([res], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "document.pdf";
        link.click();
      })
      .catch((err) => {
        console.log('Error PDFButton', err);
        alert("Erro em gerar o PDF");
      });
  };

  return (
    <Container content="caseLawsuitCardContent">
      <Paragraph>
        Faça o download da versão PDF do cadastro:
      </Paragraph>
      <Button onClick={handleClick} styles="download">
        Download PDF
      </Button>
    </Container>
  );
};

export { PDFButton };