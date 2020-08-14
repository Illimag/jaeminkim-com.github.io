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

## Components

We are using components in the src folder.

Just create a new dir for each component.

Reference the component from the App.js file in the src this way

    import { Test0 } from './components/home'

Then in the 

    index.js 

Create the compnent and export the component

    import React from 'react';
    import Card from 'react-bootstrap/Card';

    export const Test0 = () => (
    <Card>
    <Card.Body>This tttis some text within a card body.</Card.Body>
    </Card>
    )



## Pages of Website

- Home

- Contact/About

- Portfolio Page 1 

- Portfolio Page 2

- Portfolio Page 3

- Portfolio Page 4

- Portfolio Page 5

- Portfolio Page 6