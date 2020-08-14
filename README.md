# Jaeminkim.com

## Features

6 portfolio pieces in each individual page.

Home page.

Contact Page.

React App using React Router to route to different pages.

Single Page Web App, load all assets of websites in inital load, so the website will run fast no matter what device and internet network.

Loading Screen that will show how long the user will have to wait for the portfolio to load..

Check if the user is using a mobile device, maybe load a mobile version of the site using assets of different sizes so it will load faster.

## Installing React App

To Install React just use the CLI

    npx create-react-app nameofapp

This command will install React App

Make sure to have node and npm installed.

## Installing React Router to React.JS App

React Router is the functionality to route HTML via the Single Page Web Application Functionality.

Using this functionality we can implement menus and sub menus and direct the single page to various HTMLs to simulate a multi page experience.

Install via npm

    npm install react-router-dom

Example code of React Router

    import React from "react";
    import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";

    export default function App() {
    return (
        <Router>
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/users">Users</Link>
                </li>
            </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
            </Switch>
        </div>
        </Router>
    );
    }

    function Home() {
    return <h2>Home</h2>;
    }

    function About() {
    return <h2>About</h2>;
    }

    function Users() {
    return <h2>Users</h2>;
    }

## Installing React-Bootstrap

Install via npm

    npm install react-bootstrap bootstrap

