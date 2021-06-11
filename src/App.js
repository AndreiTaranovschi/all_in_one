
import './App.css';
import Pages from './components/Pages/Pages';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutMe from './components/Pages/componentsAboutMe/AboutMe'
import AppToDo from './components/Pages/componentsToDo/AppToDo';
import AppWeather from './components/Pages/componentsWeather/AppWeather';
import Photo from './components/componentsImages/images';
console.log(AboutMe)
function App() {


  return (
    <BrowserRouter>


      <div className="App">
        <photo />
        <Pages />
        <div>
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/AppToDo' component={AppToDo} />
          <Route path='/AppWeather' component={AppWeather} />
          <Route path='/images' component={Photo} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
