require("dotenv").config();

const port = process.env.SERVER_PORT;
const { MY_NAME, MY_PASSWORD, MY_LANGUAGE, MY_CITY } = process.env;

console.log(`This Server will run on port ${port}`);
console.log(
  `I am ${MY_NAME}, wilder in ${MY_CITY}, and I love ${MY_LANGUAGE}.`
);
