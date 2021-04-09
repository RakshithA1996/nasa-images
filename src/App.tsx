import React, {Component, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import { fetchPODRequest } from "./services/redux/actions/pictureOfDayAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPODRequest());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
