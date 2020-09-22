# Realvalor

Realvalor is a library to obtain the quotation of some currencies.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar.

```bash
npm install realvalor
```

or

```bash
yarn add realvalor
```

## Usage

```JS
const realvalor = require("realvalor");

const dolar = async () => {
  const value = await realvalor("dolar");
  console.log(value);
};

const bitcoin = async () => {
  const value = await realvalor("bitcoin");
  console.log(value);
};

const euro = async () => {
  const value = await realvalor("euro");
  console.log(value);
};

const ouro = async () => {
  const value = await realvalor("ouro");
  console.log(value);
};

const iene = async () => {
  const value = await realvalor("iene");
  console.log(value);
};

const dolarCanadense = async () => {
  const value = await realvalor("dolar-canadense");
  console.log(value);
};

const dolarAustraliano = async () => {
  const value = await realvalor("dolar-australiano");
  console.log(value);
};

const francoSuico = async () => {
  const value = await realvalor("franco-suico");
  console.log(value);
};

const libra = async () => {
  const value = await realvalor("libra");
  console.log(value);
};

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
