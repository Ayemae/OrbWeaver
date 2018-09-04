import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './components/pages/Comics Index/Index';
import Upload from './components/Upload';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index} />
      <Route exact path="/upload" component={Upload} />
    </div>
  </Router>
);

export default App;