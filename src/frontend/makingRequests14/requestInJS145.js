
//how to make a request with JS
//install axious and write this code, this is doing the same thing you did in postman
const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios.get(url).then((response) => {  //axios.get(url) is a promise, which means that the then() method can be called on it; the then() callback function will provide a parameter which is an objedt that contains details about the response
  console.log(response.status); //returns info about the status code
  console.log(response.statusText); // '' the status code message
  console.log(response.data); // '' the response body
});

// if an error with axious occurs, you can use catch()

axios.get("malformed url").catch((error) => {
    console.log(error.message);
  });


//complex requests
  //axios library provides different methods for common HTTP verbs:
    // get()
    // post()
    // put()
    // patch()
    // delete()
  // the second optional argument in all of these methods is a config object which can include information like additional headers or the request body
  
  //most of the time, you will be providing a request body, which can be accomplished by adding an object with the request body data

  const url = "http://localhost:5000/constellations";
axios
  .post(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
  })
  .then((response) => {
    console.log(response.data);
  });

  // the above request will create new data for the Ara constellatin on the server. it will return the newly created constellation with an ID

  let newArray = {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
    id: "DVaSPTf",
  };


//delete
  const url = "http://localhost:5000/constellations/:id"; //replace :id with the id from the constellation you wish to delete
axios
  .delete(url, {  //just replaced post with delete
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
  })
  .then((response) => {
    console.log(response.data);
  });