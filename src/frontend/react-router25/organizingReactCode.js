// React Router 25

// Organizing React Code 25.3

    // overview: Describe the two most common ways of organizing React code.

// What's the problem?

    // This is the file structure created by Create React App, as of version 3.4.1:

    /*   my-app
        ├── README.md
        ├── package-lock.json
        ├── package.json
        ├── build  <-- created during build
        ├── node_modules
        ├── public
        │   ├── favicon.ico
        │   ├── index.html
        │   ├── logo192.png
        │   ├── logo512.png
        │   ├── manifest.json
        │   └── robots.txt
        └── src
            ├── App.css
            ├── App.js
            ├── App.test.js
            ├── index.css
            ├── index.js
            ├── logo.svg
            ├── serviceWorker.js
            └── setupTests.js
    */

    // Bear in mind that keeping all of your components in the src folder will get overwhelming, even for small applications.

    // It is your choice how you organize your code but it's usually a good idea to avoid deep nesting

// Avoid Deep Nesting

    // Deep directory nesting in JavaScript projects can present several challenges. It is harder to write relative imports between directories, and it's harder to update those imports when moving files.

    // Unless you have a compelling reason to use a deep folder structure, limit yourself to three nested folders within src.

// Grouping By File Type

    /*
    # Common files like App.js omitted for brevity
    src
    ├── api
    │   ├── APIUtils.js
    │   ├── APIUtils.test.js
    │   ├── ProfileAPI.js
    │   └── UserAPI.js
    └── components
        ├── Avatar.css
        ├── Avatar.js
        ├── Feed.css
        ├── Feed.js
        ├── FeedStory.js
        ├── FeedStory.test.js
        ├── Profile.js
        ├── ProfileHeader.css
        └── ProfileHeader.js
    */

    // as the project grows in size, the number of files in the components folder can get overwhelming. As a result, the components folder will often have nested folders that group the components in some way. Usually the  components are grouped by route, feature, or role in the application.

    // Some developers have even abandoned the components folder entirely; they only group the components by route, feature, or role.

// Grouping By Route

    // Another common project structure is to locate CSS, JavaScript, images, and tests together inside folder grouped by route.

    // Grouping by route means that anything displayed on the page for a given route is in a folder with the same name as the route.

    /*
        # Common files like App.js omitted for brevity
    ├── about
    │   ├── About.css
    │   ├── About.js
    │   ├── About.tests.js
    │   └── headquarters.jpeg
    ├── header
    │   ├── Header.css
    │   ├── Header.js
    │   ├── Header.tests.js
    │   ├── NavBar.css
    │   ├── NavBar.js
    │   ├── NavBar.tests.js
    │   └── header-background.jpeg
    ├── home
    │   ├── Home.css
    │   ├── Home.js
    │   └── Home.tests.js
    ├── login
    │   ├── Login.css
    │   ├── Login.js
    │   └── Login.tests.js
    └── profile
        ├── Profile.js
        ├── ProfileAPI.js
        ├── ProfileHeader.css
        ├── ProfileHeader.js
        └── index.js
    */

    // From this folder structure, you can see that there are routes for /about, / (home), /login, and /profile. Everything displayed on the page for each of those routes is included in the corresponding folder.

    // What about the header folder? That isn't a route; rather, it's a component that is displayed on multiple pages. Because its role is the header for all routes, it's in its own folder. In this case, the files are grouped by role.

    // If your application has nested routes (such as /user/1/post/), you may organize those components into nested folders like this:

    /*
        user
    ├── User.js
    ├── User.tests.js
    ├── Users.css
    ├── Users.js
    ├── Users.tests.js
    └── post
        ├── Post.js
        ├── Post.tests.js
        ├── Posts.css
        ├── Posts.js
        └── Posts.test.js
    */

    // or you can flatten the folders, like this:

    /*
        src
    ├── user
    │   ├── User.js
    │   ├── User.tests.js
    │   ├── Users.css
    │   ├── Users.js
    │   └── Users.tests.js
    └── user-post
        ├── UserPost.js
        ├── UserPost.tests.js
        ├── UserPosts.css
        ├── UserPosts.js
        └── UserPosts.test.js
    */