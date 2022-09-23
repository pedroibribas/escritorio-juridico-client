import { getPDFAPIHandler } from "../../api/services/pdf";

const savePDF = async (data) => {
  return await getPDFAPIHandler(data)
    .then((res) => {
      const blob = new Blob([res], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "document.pdf";
      link.click();
    })
    .catch((err) => console.log(err));
};

export { savePDF };