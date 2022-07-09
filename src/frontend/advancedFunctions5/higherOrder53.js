// advanced functions
// higher-order functions

// overview: learn what a higher-order function is and how to use forEach() to loop over items in an array

// terms
    // callback function: also called a callback, a function that is passed into another function as an argument
    // higher-order function: any function that either accepts a function as one of its incoming arguments or returns a function

// higher-order functions are incredibly powerful and can lead to some very customizable tools
    // for example, suppose that you created a shop and wished to give discounts on some items. You could create a function to calculate the discounted price as follows:
        const discountedPrice = (price, discount) => price * discount;
    // then you could call the function to calculate final prices for some items with a 10% discount, like this:
        const finalPriceBed = discountedPrice(200, 0.9) //> 180
        const finalPricePillow = discountedPrice(52, 0.9) //> 46.80
        const finalPriceCurtain = discountedPrice(32, 0.9) //> 28.80
    // instead of passing the same value of 0.9 we could make a new function that calculates a 10% discount. But what if sometimes we want to give a 25% discount? let's take a look:
        const discountPrice = discount => {
            return price => price * discount
        } 
        // the function above returns a functions that accepts a single parameter price and multiplies the price by the discount provided. You can use it to first create a function that calculates the 10% discount, and then use the generated function to calculate the discounts
        const tenPercentDiscount = discountPrice(0.9);
        const finalPriceBedB = tenPercentDiscount(200) //> 180
        const finalPricePillowB = tenPercentDiscount(52) //> 46.80
        const finalPriceCurtainB = tenPercentDiscount(32) //> 28.80
    // now we can later modify our discountPrice to give a 25% off
        const twentyFivePercentDiscount = discountPrice(0.75);
        const finalPriceBedC = twentyFivePercentDiscount(200) //> 150
        const finalPricePillowC = twentyFivePercentDiscount(52) //> 
        const finalPriceCurtainC = twentyFivePercentDiscount(32) //>
    // one final note on this example, the discountPric() function above was deliverately written with an explicit return statement but since it is a single return value we can write it like this:
        const discountPriceB = dicount => price => price * discount;


// the forEach() method
    // an existing higher-order functiont that is built into JS
  
    // we are going to loop through a park array and return the park names, we will do this multiple ways then show the forEach() method
    let parks = [
        { name: "Biscayne", rating: 4.2 },
        { name: "Grand Canyon", rating: 5 },
        { name: "Gateway Arch", rating: 4.5 },
        { name: "Indiana Dunes", rating: 4.1 },
      ]

      for (let i = 0; i < parks.length; i++) {
        console.log(parks[i].name);
      }
      //> Biscayne
      //> Grand Canyon
      //> Gateway Arch
      //> Indiana Dunes

      // because we are doing the same thing to each element of the array, we can write a function to perform that same task with each element. Then we can call that function repeatedly in the loop

      const logPark = park => console.log(park.name);

      for (let i = 0; i < parks.length; i++) {
        logPark(parks[i]);
      }
      //> Biscayne
      //> Grand Canyon
      //> Gateway Arch
      //> Indiana Dunes

      // think of the for loop as applying this function to each element of the array, one at a time. The function gets each item in succession. In this example, the function parameter park is called, becasue that's helpful for remembering what the item is.

      // the forEach() method lets you do this without a for loop. This lets you think about the items themselves, instead of counting indexes

      parks.forEach(logPark); // takes in function from line 56
      //> Biscayne
      //> Grand Canyon
      //> Gateway Arch
      //> Indiana Dunes

      // the forEach() method accepts a function as an argument. The function that you pass to the method is referred to as a callback function. In other words, a callback function is function that is passed into another function as an argument.

// How forEach() works
    // so where did park come from? or more so how does forEach() know what to put there? the forEach() method is a higher-order function, in that it takes a callback function as its argument

    // so we provided forEach() with a callback function. Then, internally, forEach() executes that callback function once for each element of the array

    // we can also use an anonymous function
      parks.forEach((park) => console.log(park.name))
      //> Biscayne
      //> Grand Canyon
      //> Gateway Arch
      //> Indiana Dunes
    // above we are defining an anonymous function in the invocation of forEach()

// customizing forEach()
    // just like for any other function, you could call the argument anything that you want, and you would get the same results
    parks.forEach((element) => console.log(element.name))
      //> Biscayne
      //> Grand Canyon
      //> Gateway Arch
      //> Indiana Dunes

    // but naming the argument after what the item means is more helpful to other developers

    // the forEach() method also gives you access to other arguments that you can use in the function, including the index adn the original collection

    parks.forEach((park, index, collection) => {
        console.log(`(${index + 1}/${collection.length}) ${park.name}`);
    });
        //> (1/4) Biscayne
        //> (2/4) Grand Canyon
        //> (3/4) Gateway Arch
        //> (4/4) Indiana Dunes

    // above, you can see that you have access to the individual element at each point in the array, the index at that point, and then the entire collection


