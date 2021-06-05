import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Repositorys from './pages/repositorys';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Repositorys} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
