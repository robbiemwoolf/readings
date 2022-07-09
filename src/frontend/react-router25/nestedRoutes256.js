// React Router 25

// Nested Routes 25.6

    // overview: One way that you can keep things a bit cleaner is by using nested routes, which you'll explore in this lesson. By the end of this lesson, you will be able to use nested <Route> components to show more than one component at a time.

// terms:

    // nested route: also called a child rout, a route displayed inside of another route

// What's the problem?

    // Sometimes, as the visitor navigages through the site, you want to change only a small part of the screen, not the entire page. You can see in the image below that as the visitor navigates between different paths (users/1, users/1/posts, and users/1/posts/:postId), some parts of the page don't change.

    // In the above image, the user's name and the Profile and Posts buttons stay the same visually across three different URLs; only the content below changes. One way to accomplish this routing is to create three different page components for each URL and change out the nested components to get a different view. Although this approach will work, it means that any change to the layout will require changes to multiple page components.

// Nested Routes

    // A better solution is to use nested routes to display more than one component at the same time.

    // Nested routes, or child routes, are routes displayed inside of another route. This means that there can be more routes inside a component that is rendered by another route.

// DO THIS  

    // Now, add nested routes for /users/:userId/posts and /users/:userId/posts/:postId. To do that, create two new components, PostList and User, to contain the nested routes.

// Create a PostList Component

import React from "react"; 
import { Route, Switch, useRouteMatch } from "react-router-dom"; 

function PostList() { 
  return ( 
      <Switch> 
        <Route exact path={"/users/:userId/posts"}> 
          <p>Here are a list of the user’s posts</p> 
        </Route> 
        <Route path={"/users/:userId/posts/:postId"}> 
          <p>Here is a single post</p> 
        </Route> 
      </Switch> 
  ); 
} 

export default PostList;

// The <PostList> component returns a <Switch> component that wraps two routes, one for /users/:userId/posts and one for /users/:userId/posts/:postId. If the path in the URL matches the path for either route, then a paragraph element will be rendered. Nothing else will happen at this point.

// Create a <User> Component

import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";
import PostList from "./PostList";

function User() {
  return (
    <Switch>
      <Route path={"/users/:userId/posts"}>
        <PostList />
      </Route>
      <Route path={"/users/:userId"}>
        <UserProfile />
      </Route>
    </Switch>
  );
};

export default User;

// The <User> component returns a <Switch> component, which in turn wraps two nested routes. These nested routes display different components within the <User> component. The first route, which is for the /users/:userId/posts path, displays the <PostList> component. The second route, which is for the /users/:userId path displays the <UserProfile> component.

// Update the /users/:userId route in the App component

    // Next, connect the nested routes to the top-level App component. Inside App.js, import the <User> and <PostList> components.

    // Next, update the <Route> component for the /users/:userId path to wrap the <User> component instead of the <UserProfile> component:

    // The <App> component now has a route that displays the <User> component when the URL path matches /users/:userId. Keep in mind that the UserProfile component is now rendered by a nested route within the <User> component. Take a look at some of the code below from the <User> component:

    return (
        ...
      
        <Switch>
          <Route path={'/users/:userId/posts'}>
            <PostList />
          </Route>
          <Route path={'/users/:userId'}>
            <UserProfile />
          </Route>
        </Switch>
    );

    // The <User> component has two nested routes to display different components inside of the <User> component. <Route path={'/users/:userId/posts'}> displays the <PostList> component, and <Route path={'/users/:userId'}> displays the <UserProfile> component.

    // In this example, when the URL matches /users/:userId, the App displays the <User> component, which in turn displays the <UserProfile> component.

    // Keep in mind that the <PostList> component also contains nested routes. So if you navigate to localhost:3000/users/1/posts, the page should display the "Here are a list of the user's posts" message nested inside the <PostList> component. And if you navigate to the path for a single post, localhost:3000/users/1/posts/1, the page should display the "Here is a single post" message, also nested inside the <PostList> component.

    // You can nest routes as much as necessary, but keep in mind it may increase the complexity of your app.

// Determining The Nested Routes

    // How do you decide what should be a nested route?

        // It's like deciding what should be a component: you can use the single-responsibility principle. That is, each route should have one thing that it does and one component that changes.

    // Exploring the above example a bit, how does the <PostList> component know that the links to its posts need to start with /users/:userId/posts/? You can hardcode the links to start with /users/:userId/posts/, but then many components need to change if the URL changes. So how can you display the component on any URL and have the links include the route that matched to display the component? You can use the useRouteMatch() hook to get the URL from the closest matching <Route> in the tree.

// The useRouteMatch() hook

    // The useRouteMatch() hook is useful any time that you need to get information about the closest matching <Route> in the tree.

    // It includes the exact, strict, and sensitive options, as well as URL parameters. 

        // For example, the following is the route match information that the <PostList> component would receive when displayed at /users/1/posts.

        {
            "path":"/users/:userId/posts",
            "url":"/users/1/posts",
            "isExact":true,
            "params":{
               "userId":"1"
         }

        // Notice that the object above that contains a path property. The path property points to a path pattern which was used to match a URL, and it includes the :userId parameter. You can use the path property to create dynamic paths for your Route components. Next, you will use the path property to clean up a few nested routes in the app.

// DO THIS Use useRouteMatch() To Clean Up The Nested Routes

    // Notice that there's some repetition with the paths in the <PostList> component. All the paths here start with /users/:userId/posts. Although you can hardcode the links to start with /user/:userId/posts/, as you have done, the problem is that many components would need to be updated if the URL changes. If you miss any component, then the routing for that component will break. As you can imagine, this isn't ideal. It's better to write the nested route's path to be dynamic.

    // To avoid hardcoding the links, you can use the useRouteMatch() hook from the react-router-dom library to get the URL from the closest matching <Route> in the tree. Within the <PostList> component, you can now use the path property to create links that include the current URL for routes nested within <PostList>, like this:

    import { Route, Switch, useRouteMatch } from "react-router-dom"; 

function PostList() { 
  const { path } = useRouteMatch(); 

  return ( 
      <Switch> 
        <Route exact path={path}> 
          <p>Here are a list of the user’s posts</p> 
        </Route> 
        <Route path={`${path}/:postId`}> 
          <p>Here is a single post</p> 
        </Route> 
      </Switch> 
  ); 
}

// Now, the nested routes in the <PostList> component have dynamic paths.