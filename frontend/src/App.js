import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import DesignScreen from './screens/DesignScreen';
import FurnitureScreen from './screens/FurnitureScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/designs" component={DesignScreen} />
        <Route path="/furniture" component={FurnitureScreen} />
        <Route path="/projects" component={ProjectsScreen} />
        <Route path="/login" component={LoginScreen} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
