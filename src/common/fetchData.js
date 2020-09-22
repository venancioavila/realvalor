const axios = require("axios");
const cheerio = require("cheerio");

const fetchData = async (url) => {
  const result = await axios.get(url);
  const html = cheerio.load(result.data);
  const value = html("body").find("#nacional").val();
  if (value === "1,00") {
    const value = html("body").find("#estrangeiro").val();
    const formated = Number(value.replace(",", "."));
    return formated;
  }
  const formated = Number(value.replace(",", "."));
  return formated;
};

module.exports = fetchData;
