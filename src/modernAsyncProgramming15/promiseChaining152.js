// modern asynchronous programming

//promise chaining

// multiple asynchronous operations
    //it's common to need to make multiple async requests at nearly the same time. Sometimes, these requests depend on one another.

//from constellations example
axios.get(constellationsUrl).then(({ data }) => console.log(data));
axios.post(constellationsUrl, leo).then(({ data }) => console.log(data));
    //when you have multiple requests being fired around the same time, like a GET and a POST request. It it NOT safe to assume that the GET request will finish first
        // we should chain them together to make sure the GET completes before the POST

            axios
                .get(constellationsUrl).then(({ data }) => {
                     console.log(data);
            axios
                .post(constellationsUrl, leo).then(({ data }) => console.log(data));
            });
    // working code to determine if the constellation already exists before posting
        axios
        .get(constellationsUrl)
        .then(({ data }) => {
          const exists = data.find(({ name }) => name === leo.name);
          if (exists) throw `Constellation "${leo.name}" already exists.`;
          return axios
            .post(constellationsUrl, leo)
            .then(({ data }) => console.log(data));
        })
        .catch(console.log);

// we can make this promise code simpler by returning values inside of then() and catch()

axios
  .get(constellationsUrl)
  .then(({ data }) => {
    return data.find(({ name }) => name === leo.name);
  })
  .then((exists) => {
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios
      .post(constellationsUrl, leo)
      .then(({ data }) => console.log(data));
  })
  .catch(console.log)

//returning values allows you to make your code flatter; it reduces the number of nested callbacks needed to run your code

//returning promises

//when you return a promise, that promise is placed into the chain of events taking place with then() and catch(). If that promise resolves, it will move to the next then(). And if it rejects, it will move to the next catch()

axios
  .get(constellationsUrl)
  .then(({ data }) => {
    return data.find(({ name }) => name === leo.name);
  })
  .then((exists) => {
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios.post(constellationsUrl, leo);
  })
  .then(({ data }) => console.log(data))
  .catch(console.log);

//   The code above works as follows:
  
//   A GET request is made to the constellationsUrl. If that request fails, the entire chain of then() calls is skipped, and the console.log() statement inside of catch() is called.
  
//   The data is searched through to see whether or not there is a matching name. The record that's found is returned, or undefined is returned.
  
//   If the constellation already exists, an error is thrown, skipping ahead to the catch(). If the constellation does not exist, a POST request is created and returned. If that request fails, the next catch() is called.
  
//   The results of the POST request are logged. Specifically, the data key is logged.
  
//   When a promise is returned, the correct call of then() or catch() will be called next. Because of this, you don't have to place then() calls inside of other then() calls.