const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(`We do not have any information on ${breedName}`, null);
        return;
      } else {
        callback(null, data[0].description);
        return;
      }
    } else {
      callback(`Something went wrong! ${error}`);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };
