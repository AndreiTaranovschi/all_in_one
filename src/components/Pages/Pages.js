import React from 'react';
import { NavLink } from 'react-router-dom';
const Pages = () => {
    return (
        <div>
            <h1>Welcome Page</h1>
            <a href="/aboutMe">AboutMe</a>
            <div><NavLink to="/AppToDo">To Do App</NavLink></div>
            <div><NavLink to="/AppWeather">Weather App</NavLink></div>
            <div><NavLink to="/images">images</NavLink></div>
        </div>
    );
}
export default Pages;