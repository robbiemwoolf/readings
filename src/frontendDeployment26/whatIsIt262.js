// Frontend Deployment 26

    // overview: learn how to deploy your React application on the web

// What is frontend deployment? 26.2

    // overview: In this lesson, you'll learn what deploying an application generally involves. You'll also learn about what kinds of services that process may include.

// Sharing Your Work

    // To make your application accessible on the web, you'll need to deploy your application.

    // Deploying a web application typically means making it accessible on the web through a URL. 

    // Deployment is a way of sharing your work with the world by putting it on the web.

// Development, Staging, and Production

    // When you deploy, you deploy to a certain enironment. There are typically three environments:

        // The development environment references work done on your computer

        // The staging environment references a deployed version of the application that is used to test the changes being made

        // The production environment references a deployed version of the application that is your 'computer' version of the application. This version is ready for users.

// The Deployment Process

    // To deploy a website, you'll need to recreate your development environment's essential components on another machine. 

    //nManually deploying a website and setting up an environment is an entire topic in itself, often referred to as developer operations or DevOps. Thankfully, there are a number of modern tools and services that make deployment much easier.
    
    // Keep in mind that all of these services are often configuration heavy. That means that you need to follow a certain set of steps in a particular order. It's a good idea to take your own notes on the deployment process; this can be extremely useful for later on.

// Common Services

    // Static Website Services

        //There are a number of services that will host a static website (with HTML, CSS, and JS) for free or for a reduced cost. GitHub allows for deploying static websites as well as domain services like GoDaddy and Name.com.

    // Amazon Web Services

        // As one of the most popular solutions out there, Amazon Web Services (AWS) runs the web. Working with AWS can be complicated and costly for new developers, but it's an industry standard for most large websites.

        // AWS allows you to host applications in all kinds of languages. They provide a number of tools to facilitate this process, including their popular Elastic Beanstalk tool. They also provide a variety of other services, like file and database hosting.

            // https://aws.amazon.com/elasticbeanstalk/

    // Microsoft Azure

        // Microsoft Azure is similar to AWS in that it provides a number of different services for hosting applications of all kinds. Azure is built for large websites and projects, and it can host applications in a variety of languages.

    // Heroku And Vercel

        // Heroku is one of the more popular options, particularly among those who are just starting to code. Thanks to their easy-to-use command-line interface and excellent UI, Heroku can perform many of the same tasks that AWS and Azure can, with a bit less fuss.

        // Vercel, previously known as Zeit's now.sh, has become more popular as JavaScript has become more popular as both a frontend and backend language. Like Heroku, Vercel can quickly deploy React projects from the command line and offers a great UI.