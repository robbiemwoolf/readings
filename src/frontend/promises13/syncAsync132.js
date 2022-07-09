// PROMISES
//SYNC AND ASYNC CODE

// event loop: a design pattern that a program may use to prioritize certain lines of code for execution

//up to this point, the code that you've run has been synchronous (which executes one code instruction at a time, in the order that the instructions are given)
//asynchronous code executes multiple instructions simultaneously, and the order in which the instructions complete isn't known

function useSetTimeout() {
    console.log("Start!");
  
    setTimeout(() => {
      console.log("Inside setTimeout!");
    }, 1000);
  
    console.log("End!");
  }
  
  useSetTimeout();//> "Start!" <br> "End!" <br> "Inside setTimeout!"

  //there are threee log statements
  //the second log() statement "Inside setTimeout" is inisde of a function passed to the setTimeout() function. The setTimeout() function takes two arguments: a callback function and a number that represents the number of milliseconds that should elapse before firing the callback 
  
  //despite the fact that the setTimeout() function is invoked immediately, the callback function isn't invoked until later. That means that the setTimeout() function is an asynchronous operation. 

  //the above example is obvious, the "Inside setTimeout" was forced to wait one second before running
  //what happens if we put the time to wait equal to zero?
  function useSetTimeout() {
    console.log("Start!");
  
    setTimeout(() => {
      console.log("Inside setTimeout!");
    }, 0);
  
    console.log("End!");
  }
  
  useSetTimeout();//> "Start!" <br> "End!" <br> "Inside setTimeout!"

  //it returns the same thing. That is because all sync code is going to run then the async code regardless of the designated wait time. The reason has to do with the event loop.

  //event loop
    //describes a process by which JavaScript will be described simply. Essentially, when JavaScript is being interpreted, asynchronous operations are not executed immediately. Instead, they are placed into an event queue and executed later. Those operations will run as soon as they can (which is always after the synchronous code has been run). 

    console.log("Start!"); // Synchronous code

    setTimeout(() => {
      console.log("Inside first setTimeout!"); // Asynchronous code
    }, 0);
    
    setTimeout(() => {
      console.log("Inside second setTimeout!"); // Asynchronous code
    }, 0);
    
    console.log("End!"); // Synchronous code
    //order logged
        //> "Start!" <br> "End!" <br> "Inside first setTimeout!" <br> "Inside second setTimeout!";

        //sync code first, the async code has same time delay so it will run first-in first-out

// Why use asynchronous JavaScript?
    //Synchronous code will block further execution until it has finished what it's doing. As a result, a long-running JavaScript function will make the web page or server unresponsive until the function has finished. This can result in a terrible user experience.

    //To solve this problem, JavaScript makes certain operations asynchronous. This way, the web page or server is responsive while waiting for long-running tasks to complete.

// common scenarios
    //async code is usually preferred when one of the following conditions applies:
        //you want the application to continue to be able to run without waiting for some process
        //you have no choice but to wait because the process depends on something outside of your control

//animations
    //in web dev, many graphical animations are powered by JavaScript using tools like setTimeout(). This can be anything from incredible visual displays to a notification icon blinking red.

    //LINK IN animation132 to see animation example
        //after we updated the line of code the animation moves as expected and we can scroll the page up and down during the animation. Look at the browser's console and notice tht the order of the console.log() statements has changed. This is because requestAnimationFrame() is an asynchronous function that allows the browser to repaint the screen between calls to animateDev().

// External web requests
    //when you're requesting data from an external source, you have little choice but to wait for the requested information. If the external source is down or having a slow day, the request will take longer.
    //intensive processes, like processing images or video files, are often put into an asynchronous function so that the long-running process doesn't slow down the main program

    //do this
        //write code that downloads a video from a remote server and processes it after the download completes. However, downloading a large video from a remote server takes some time depending on the network speed and the size of the video
        //link asyncdownloadvideo folder
        