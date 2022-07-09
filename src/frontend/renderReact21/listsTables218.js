// Rendering With React

// List and Tables

// overview: Rendering lists and tables works slightly differently in React if those lists and tables are dependent on data. These differences aren't difficult to manage, but they're important to know about. This lesson will show you how to use lists and tables to create repeated elements in React.

// npx create-react-app lists-and-tables

// Lists
    // Imagine you are creating an application that creates a grocery list for you. You may want to show your items in a list, like this:
        <ul>
            <li>Bananas</li>
            <li>Apples</li>
            <li>Oranges</li>
        </ul>
    
    // you may want to create a list based on an array. This array may update or change based on the actions that you take in the application

        const groceryItems = ["Bananas", "Apples", "Oranges"];

    // you can use the map() mehtod to create a <li> item for each item in groceryItems. Then, wrap it all with a <ul> tag.

        // GroceryList.js
            function GroceryList({items}) {
                retun (
                    <ul>
                        {items.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                );
            }
    
    // you can then use this component by passing groceryItems into it, like this:

            <GroceryList items={groceryItems} />
    
    // This leads to the same list that was originally shown - except now, you can easily change the list by updating the groceryItems array.

// Rewriting Lists
    
    // We can clean up the above code a bit. Remember that JSX code can be assigned to a variable, like other JavaScript expressions. That means that the code below will work as well.

            // GroceryList.js
                function GroceryList({ items }) {
                    const list = items.map((item) => <li>{item}</li>);
                    return <ul>{list}</ul>
                }

        // Although there is no performance benefit to writing your code like this, you may find it a bit easier to read.

// Adding Keys

    // If you look a the console for the above example, you will notice that you get a warning:
        // Warning: Each child in a list should have a unique 'key' prop.

    // React uses keys to help it update a list when the groceryList array changes. When you're creating a list, always give each list item a unique key. You can use item as the key if you know that it will be unique, but it is generally safer to use the list index or a unique ID.

    // so our modified code will look like this:

        // GroceryList.js
            function GroceryList({ items }) {
                const list = items.map((item, index) => <li key={index}>{item}</li>);
                return <ul>{list}</ul>;
            }

            // now the warning message is gone

// DO THIS  add a todo list to your react app lists-and-tables

// Tables
    // Tables are useful for more complex information. For example, the grocery list created earlier could be built with more details

            <table>
                <tr>
                    <th>Quantity</th>
                    <th>Item</th>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Bananas</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Apples</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Oranges</td>
                </tr>
            </table>

        // instead of hardcoding the grocery list contents, you could have them stored liek the array below:
            const groceryList = [
                { quantity: 6, item: "Bananas" },
                { quantity: 3, item: "Apples" },
                { quantity: 10, item: "Oranges" },
            ];

        // When creating the table, you first add the header row, because that will be unchaged by the contents of groceryList. Then, you can use the map() method with groceryList to create a <tr> element for each row in the table. Like with lists, each row should have a unique key. Here's an example:
            function GroceryList({ items }) {
                const rows = groceryList.map(({ quantity, item }, index) => (
                <tr key={index}>
                    <td>{quantity}</td>
                    <td>{item}</td>
                </tr>
                ));
            
                return (
                <table>
                    <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Item</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
                );
            }

// DO THIS update your todo list
            