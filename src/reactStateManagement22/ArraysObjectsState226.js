// React State Manangement 22

// Arrays And Objects As State 22.6

// overview: You can use any kind of data type as the argument in your useState() function. However, mutable data types like objects and arrays may not work exactly the way that you expect. The function returned from useState() expects a new value to be placed inside of the function. As you'll see in this lesson, that means that you'll need to create a new array or object each time.

// Create React App

// App.js
function App() {
    return <CoinTossCounter />;
}

// CoinTossCounter.js
function CoinTossCounter() {
    const handleClick = (value) => {
      // TBD
    };
    return (
      <section>
        <div>
          <button onClick={() => handleClick("H")}>Heads</button>
          <button onClick={() => handleClick("T")}>Tails</button>
        </div>
      </section>
    );
}

//Array as State

    // To keep track of the results for your coin-toss application, it makes sense to use an array. That way, you can end up with something like the following as your state's value.

    ["H", "T", "H", "H"];

    // To do this, you can create a state object with a default value of an empty array, like this:

    const [results, setResults] = useState([]);

    // Now, you can fill in the handleClick() function. The results state is an array, which is a mutable object in JavaScript. However, keep in mind that you never want to edit the state directly. Because the state is updated asynchronously, directly editing it may not have the expected results.

    // Instead, create a new results array that has all the old contents as well as the new value at the end. Then, pass this array to the setResults() function, as follows:

    const handleClick = (value) => {
        setResults([...results, value]);
    };

    // The above code uses the spread operator ... to include all of the contents of the existing results variable and add the new value to the very end.

// Deleting Elements

    // You may want to give the user the ability to delete an item from an array.

    // The most common way to delete an item from an array in React is to use the filter() function of the array.

    // If you know the index of the element, you can delete by index, like this:

    const deleteToss = (indexToDelete) => {
        setResults((currentResults) =>
          currentResults.filter((ignored, index) => index !== indexToDelete)
        );
    };

    // You can also delete by the value or any property of the element in the object. For example, if you have a list of users loaded from a database, it is common to delete by ID, like this:

    const deleteUser = (idToDelete) => {
        setUsers((currentUsers) =>
          currentUsers.filter((user) => user.id !== idToDelete)
        );
    };

// DO THIS Add a Delete Last Button

    <button onClick={handleDeleteLast}>Delete Last</button>

    // This button should only delete the last coin flip in the list. When the button is clicked, a function called handleDeleteLast() should be called. Now, write the handleDeleteLast() function so that it correctly modifies the state.

    const handleDeleteLast = () => {
        const filteredList = results.filter(
          (result, index) => index !== results.length - 1
        );
        setResults(filteredList);
    };

// Object as State

    // Storing state inside of objects works very similarly. Each time that you make a change to the state, you will need to return a new object with its old contents. Once again, the spread operator is crucial for writing readable code.

    // Imagine that you also want to keep track of the number of heads and tails. Although you can do this by searching through the array, it can be more efficient to store these numbers as an object.

    // First, you'll need to create a new state object, like this:

    const [counts, setCounts] = useState({ H: 0, T: 0 });

    // Then, you can update the counts state in the handleClick() function. Take a look:

    const handleClick = (value) => {
        setResults([...results, value]);
        setCounts({
          ...counts,
          [value]: counts[value] + 1,
        });
    };

    // The object passed in as an argument in the above setCounts() function works as follows:

        // Create a new object.
        // Include all the key-value pairs inside of counts, which should include only the H key and the T key.
        // Create a new key for the given value. This will overwrite either H or T.
        // Set the new key's value to the current value plus 1.

// Display the Results

    <ul>
        <li>Heads: {counts["H"]}</li>
        <li>Tails: {counts["T"]}</li>
    </ul>

// Fix the Delete Last Button

    // Unfortunately, the Delete Last button no longer works. Because the handleDeleteLast() only calls the setResults() function, the counts object isn't being changed.

    // Update the code so that when the Delete Last button is clicked, the counts object is modified correctly as well.

    const handleDeleteLast = () => {
        const last = results[results.length - 1];
        const list = results.slice(0, -1);
      
        setResults(list);
        if (last) {
          setCounts({
            ...counts,
            [last]: counts[last] - 1,
          });
        };
    };

    // Note: The slice() method is used to remove the last element of the array and to create a new array.