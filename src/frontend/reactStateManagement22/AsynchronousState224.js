// React State Management 22

// Asynchronous State 22.4

// overview: Updating state is a process that happens asynchronously. And just like with other asynchronous operations in JavaScript, some odd bugs can occur, depending on what you're attempting to do. In this lesson, you'll see that you can get some unexpected behavior if you try to update the same state twice in a row. You'll also learn how to fix those problems.

// terms:

    // race condition: also called a race hazard, a condition where a program depends on the relative timing of one or more processes to function correctly

// App.js

function App() {
    const [subscribed, setSubscribed] = useState(false);
    const [subscribedCount, setSubscribedCount] = useState(0);
    const [alerts, setAlerts] = useState(false);
  
    return (
      <section>
        <p>Please click to subscribe to my updates!</p>
        <p>Subscriber Count: {subscribedCount}</p>
        <button
          onClick={() => {
            setSubscribed(!subscribed);
            setSubscribedCount(subscribedCount + 1);
            if (!alerts) setAlerts(true);
          }}
        >
          {subscribed ? "Unsubscribe" : "Subscribe"}
        </button>
        <button onClick={() => setAlerts(!alerts)}>
          {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
        </button>
      </section>
    );
};

    // When you click the Unsubscribe button (which is also the Subscribe button), the following happens:

        // The subscribed state is toggled.
        // The subscribedCount is increased by 1.
        // If the alerts are false, they are set to true.

// Multiple Updates

    // It is possible to make multiple changes to different states. But a problem arises when you try to make multiple changes to the same state at the same time.

    // For example, in the code below, setSubscribedCount() is called twice. Can you guess what this will do?

    <button 
        onClick={() => {
            setSubscribed(!subscribed);
            setSubscribedCount(subscribedCount + 1);
            setSubscribedCount(subscribedCount + 1);
            if (!alerts) setAlerts(true);
        }}
    >
        {subscribed ? "Unsubscribe" : "Subscribe"}
    </button>

    // If you try this locally, you'll notice that despite setSubscribedCount() being called twice, the subscribedCount only increases by 1.

    // This is because the updates to the state are done asynchronously. So when setSubscribedCount() is called twice in a row, both calls use the same initial value for subscribedCount.

    // For example, imagine that subscribedCount is 0. When you press the button, the first call to setSubscribedCount() sees the subscribedCount as 0 and updates it to 1. Then, the second call to setSubscribedCount() also sees the subscribedCount as 0 and also updates it to 1.

// Passing A Function For State Updates

    // There are a few ways to solve this problem. On is simply rewrite the setSubscribedCount() function to increment by 2 instead of 1.

    // However, there may be situations where this isn't ideal. So instead, you could pass setSubscribedCount() a function that takes the previous value of the state, as follows:

    setSubscribedCount((currentCount) => currentCount + 1);

    // Using a function means that you will avoid potential race conditions.

        // Instead of taking the value of subscribedCount, which is subject to change, the function will ensure that whatever the most recent value is, it will ad 1 to it.

// Updated code

function App() {
    const [subscribed, setSubscribed] = useState(false);
    const [subscribedCount, setSubscribedCount] = useState(0);
    const [alerts, setAlerts] = useState(false);
  
    return (
      <section>
        <p>Please click to subscribe to my updates!</p>
        <p>Subscriber Count: {subscribedCount}</p>
        <button
          onClick={() => {
            setSubscribed(!subscribed);
            setSubscribedCount((currentCount) => currentCount + 1);
            setSubscribedCount((currentCount) => currentCount + 1);
            if (!alerts) setAlerts(true);
          }}
        >
          {subscribed ? "Unsubscribe" : "Subscribe"}
        </button>
        <button onClick={() => setAlerts(!alerts)}>
          {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
        </button>
      </section>
    );
  }