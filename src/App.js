import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AddNewBook from './pages/AddNewBook';
import NotFound from './pages/NotFound';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add-new-book' exact component={AddNewBook} />
        <Route path='/book/:id' exact component={BookDetails} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
