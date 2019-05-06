import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Auth from './Components/Auth/Auth'
// import Dashboard from './Components/Dashboard/Dashboard'
// import Form from './Components/Form/Form'
import Nav from './Components/Nav/Nav'
// import Post from './Components/Post/Post'
import { HashRouter as Router } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Auth /> */}
        {/* <Dashboard /> */}
        {/* <Form /> */}
        <Nav />
        {routes}
        {/* <Post /> */}
      </div>
    </Router>
  );
}

export default App;
