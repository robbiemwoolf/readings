// React State Management 22

// Complex Forms 22.8

// overview: With what you've already learned about forms, you can build more complex forms that make use of checkboxes, radio buttons, and other input types. Additionally, you can easily update your forms to incorporate multiple new types of values. In this lesson, you'll see how different input types can be used to build a complex form.

// App.js
    function App() {
        return <SubscriberForm />;
    }

// SubscriberForm.js

function SubscriberForm() {
    const initialFormState = {
      name: "",
      email: "",
    };
    const [formData, setFormData] = useState({ ...initialFormState });
    const handleChange = ({ target }) => {
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Submitted:", formData);
      setFormData({ ...initialFormState });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Enter Your Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br />
        <label htmlFor="email">
          Your Email:
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
}

// Initial Form State

    // In the above example, a variable initialFormState is declared at the top of the form, like so:

    const initialFormState = {
        name: "",
        email: "",
    };

    // This object is then used in a few places:

        // The initial state stored in formData is created from this object.

        // When the form is reset, a new object is created from this object.

    // Including an initial form state can be quite uesful in your forms, for several reasons:

        // The information that your form stores is recorded at the top of the component. This makes it easy to know what your form is recording.

        // Instead of calling useState() multiple times in your component, you only need to call it once.

        // Instead of ending up with multiple state functions (such as setName() and setEmail()), you only have one.

        // Resetting the form to its initial state becomes trivial.

    // However, if you add new inputs to your form, this object will not be updated automatically. If you decide to use an initialFormState variable, you will need to add keys whenever you add a new input field.

// Set a Default Name

    // In the initialFormState variable, change the empty string to a string with your name in it. On the rendered form, you'll see that your name shows up in the input field.

    // This ability to set default values can also be useful when creating forms.

// Additional Input Types

    // The select Elements

        // The select elements work very similarly to inputs, except that they make use of the option element, as shown below:

        <label htmlFor="referral">
            How did you hear about us?
            <select
                id="referral"
                name="referral"
                onChange={handleChange}
                value={formData.referral}
            >
                <option value="">-- Select an Option --</option>
                <option value="twitter">Twitter</option>
                <option value="wom">Word of Mouth</option>
                <option value="youtube">YouTube</option>
            </select>
        </label>

    // In the example above, you can see that the onChange and value attributes for the select element are similar to other elements. Note that each option element must have a value associated with it, which will be recorded under the select element's name.

// Update Your Form

    // Then update your initialFormState to include a referral key with a value of an empty string, like this:

    const initialFormState = {
        name: "",
        email: "",
        referral: "",
    };

// Set A Value

    // Try setting the referral key to a specific value so that it is chosen as the first option. For example, you could se the value inside of initialFormState to twitter.

// Radio Buttons

    // Radio buttons are a bit different from select elements, in that there is no grouping for radio buttons in the same way there is for select elements. Instead, radio buttons are grouped by being given the same name. Here's an example:

    <fieldset>
        <legend>How old are you?</legend>
        <label htmlFor="low">
            Under 18
            <input
            id="low"
            type="radio"
            name="age"
            onChange={handleChange}
            value="low"
            checked={formData.age === "low"}
            />
        </label>
        <label htmlFor="middle">
            18 - 60
            <input
            id="middle"
            type="radio"
            name="age"
            onChange={handleChange}
            value="middle"
            checked={formData.age === "middle"}
            />
        </label>
    </fieldset>

    // Note: A fieldset element isn't actually requried for radio buttons. This is just to help group the elements on your page.

    // In the example above, the first label and input have an id and value of low. However, the name attribute is set to age. This name attribute is shared with the second input.

    // The radio button can be set to the appropriate value using the checked attribute. If the value stored inside of the formData matches the name of the input, it will be selected. Otherwise, it won't be selected.

// Update Your Form

    // Then update your initialFormState to include an age key with a value of an empty string, like this:

    const initialFormState = {
        name: "",
        email: "",
        referral: "",
        age: "",
    };

// Add A New Radio Button

    // Add a new radio button with a name of high for people over the age of 60. Make sure to change the value of checked so that it can be selected by default if needed.

// Checkboxes

    // Checkboxes are strange in that they don't typically operate based on the value. Instead, they operate based on whether or not they are checked.

    <label htmlFor="subscription">
        Receive email notifications?
        <input
            id="subscription"
            type="checkbox"
            name="subscription"
            onChange={handleChange}
            checked={formData.subscription}
            value="subscription"
        />
    </label>

    // This looks similar to how radio buttons work. But if you try clicking the actual checkbox, it will not change and an error will be displayed in the console about an uncontrolled input. This is because the value, no matter what the state of the checkbox is, will always be subscription.

    // This means that you'll need to update your handleChange() function as follows:

    const handleChange = ({ target }) => {
        const value = target.type === "checkbox" ? target.checked : target.value;
        setFormData({
          ...formData,
          [target.name]: value,
        });
    };

    // The code above checks to see whether or not the changed input is a checkbox. If it is, it takes the value from the checked property instead of value. Otherwise, it will take the value of the input.

// Update Your Form

    // Update your initialFormState to include a subscription key with a vlue of true.

    const initialFormState = {
        name: "",
        email: "",
        referral: "",
        age: "",
        subscription: true,
    };

    