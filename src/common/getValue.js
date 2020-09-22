const fetchData = require(`./fetchData`);
const { url } = require(`../configs.json`);

const getValue = async (type) => {
  switch (type) {
    case `dolar`:
      return await fetchData(`${url}`);
    case `bitcoin`:
      return await fetchData(`${url}/bitcoin-hoje/`);
    case `euro`:
      return await fetchData(`${url}/euro-hoje/`);
    case `ouro`:
      return await fetchData(`${url}/ouro-hoje/`);
    case `iene`:
      return await fetchData(`${url}/iene/`);
    case `dolar-canadense`:
      return await fetchData(`${url}/dolar-canadense-hoje/`);
    case `dolar-australiano`:
      return await fetchData(`${url}/dolar-australiano-hoje/`);
    case `franco-suico`:
      return await fetchData(`${url}/franco-suico-hoje/`);
    case `libra`:
      return await fetchData(`${url}/libra-hoje/`);
  }
};

module.exports = getValue;
