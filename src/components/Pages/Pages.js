import React from 'react';
import { NavLink } from 'react-router-dom';
const Pages = () => {
    return (
        <div className="grid">
            <h1>Welcome Page</h1>
            <a href="/aboutMe">AboutMe</a>
            <div className="grid-item grid-item-1"><NavLink to="/AppToDo">To Do App</NavLink></div>
            <div className="grid-item grid-item-1"><NavLink to="/AppWeather">Weather App</NavLink></div>
            <div className="grid-item grid-item-1"><NavLink to="/images">images</NavLink></div>
        </div>
    );
}
export default Pages;