import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "./components/layout/Header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonsList from "./components/pages/persons/redux_person_list/PersonsList";
import PersonBase from "./components/pages/persons/redux_person_view/PersonBase";
import { Provider } from 'react-redux';
//import store from './store';
import Footer from "./components/layout/footer";
import PersonAddUpdate from "./components/pages/persons/redux_person_add/PersonAdd";
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'


const initialState = {};
const store = configureStore(
    initialState);

class App extends Component{

 render(){

    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
              <div className="App">
                  <div className="container">
                      <Header/>
                      <Route  path="/person_list/"  exact  component={PersonsList}  />
                      <Route  path="/person/:id" exact component={PersonBase}  />
                      <Route  path="/person_add/" exact component={PersonAddUpdate}  />
                      <Footer/>
                  </div>
              </div>
        </ConnectedRouter>
     </Provider>
    );
  }
}

export default App;
