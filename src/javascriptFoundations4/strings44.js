// the length of a string includes all characters: alphanumeric characters, punctuation marks, spaces between words, or other types of symbols that increase the length of a string
const pangram = "The Five Boxing Wizards Jump Quickly.";
pangram.length; //. 37

//bracket notation
const word = "Wizards";
word[0]; //> "W"
word[2]; //> "z"
word[9]; //> undefined

//function makes a string sentence case
const sentence = "The Five Boxing Wizards Jump Quickly."
function sentenceCase(sentence) {
    const firstCharacter = sentence[0]; //creates variable to equal the first letter of the sentence
    let result = firstCharacter.toUpperCase(); //creates a result variable and then this makes the first character uppercase
  
    for (let i = 1; i < sentence.length; i++) { //loops through the sentence string but starts at 1 so it skips the first letter
      const character = sentence[i]; // creates another variable to store each character of the string
      result += character.toLowerCase(); //adds the characters to the result variable (uppercase first character) while making the characters lowercase
    }
  
    return result; //returns the result //> "The five boxing wizards jump quickly."
  }

//alternative approach using the substr() method
  function sentenceCase(sentence) {
      const first = sentence.substr(0, 1); //means the substring will begin on index 0 and only include 1 character
      const rest = sentence.substr(1); //if you don't include a second argument, the substring will consist of every character following the given index

      return first.toUpperCase() + rest.toLowerCase(); //returns and joins the two strings together 
  }
    //the substr() method, aka the substring method, allows you to extract a specific section of characters in a string. It takes two arguments:
        //the index of the first character to include in the substring
        //the number of characters to extract

const words = "Guards! Guards!";
words.substr(3); //> "rds! Guards!"
words.substr(6, 4); //> "! Gu"
words.substr(25); //> undefined

//split() and join() methods
  //  const title = "the light FANTASTIC";
    titleize(title); //> "The Light Fantastic";

    function titleize(title) {
        const words = title.split(" "); //split() separates all the words //> [ "the", "light", "FANTASTIC" ]
        let result = [];
      
        for (let i = 0; i < words.length; i++) {
          const capitalized = sentenceCase(words[i]); //using our sentenceCase function from earlier
          result.push(capitalized); //push each word into the empty array //> [ "The", "Light", "Fantastic"]
        }
      
        return result.join(" "); //joins the words into a single string with spaces inbetween
      }
      
      titleize("the light FANTASTIC"); //> "The Light Fantastic"


const title = "Guards! Guards!";
title.split("!"); //> [ 'Guards', ' Guards', '' ]
title.split(""); //> ['G', 'u', 'a', 'r', 'd', 's', '!', ' ', 'G', 'u', 'a', 'r', 'd', 's', '!']
title.split("guards"); //> [ 'Guards! Guards!' ]

const titleArr = ["The", "Light", "Fantastic"];
titleArr.join("-"); //> The-Light-Fantastic
titleArr.join("_-_"); //> The_-_Light_-_Fantastic
titleArr.join(); //> The,Light,Fantastic  //note this doesn't just smush the words together it puts a comma in between

//template literals makes joining strings cleaner
    //concatenating string using + operator
    function bookSale(title, priceInCents) {
        const price = (priceInCents / 100).toFixed(2);
        return titleize(title) + " is on sale for $" + price + ".";
      }
      
      bookSale("the light fantastic", 950); //> "The Light Fantastic is on sale for $9.50."

    //concatenating string using template literals
    function bookSale(title, priceInCents) {
        const price = (priceInCents / 100).toFixed(2);
        return `${titleize(title)} is on sale for $${price}.`;
      }
    //syntax for template literals
        //begin and end string with backticks `
        //place variables or expressions inside of curly braces {}, which should be preceded by a dollar sign $. Like this ${}  

