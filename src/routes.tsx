import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Posts from './pages/Posts/Posts';
import Comments from './pages/Comments/Comments';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Posts} />
      <Route path="/comments/:postId" exact component={Comments} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
