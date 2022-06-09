import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import DesignScreen from './screens/DesignScreen';
import DesignDetailsScreen from './screens/DesignDetailsScreen';
import FurnitureScreen from './screens/FurnitureScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/designs" component={DesignScreen} />
        <Route path="/design/:id" component={DesignDetailsScreen} />
        <Route path="/furniture" component={FurnitureScreen} />
        <Route path="/projects" component={ProjectsScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
