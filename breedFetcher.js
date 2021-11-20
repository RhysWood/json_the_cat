const request = require('request');
const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if(!error){
    const data = JSON.parse(body);
    if (data[0] === undefined){
      console.log(`We have no information on the ${breed} breed!`)
      return
    } else {
      console.log(data[0].description);
      return
    }
  } else {
    console.log(`Something went wrong! ${error}`);
    return;
  };
})