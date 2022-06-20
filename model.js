import axios from "axios";
import Excel from "exceljs";

const employees = (
  await axios.get("https://edwardtanguay.netlify.app/share/employees.json")
).data;

const getTranslations = async () => {
  const translations = [];
};

export const siteModel = {
  employees,
};
