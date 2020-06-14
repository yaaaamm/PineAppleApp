import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Header from "./components/layout/Header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonsList from "./components/pages/persons/redux_person_list/PersonsList";
import PersonBase from "./components/pages/persons/redux_person_view/PersonBase";
import { Provider } from 'react-redux';
import Footer from "./components/layout/footer";
import PersonAddUpdate from "./components/pages/persons/redux_person_add/PersonAddUpdeteForm";
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'


const initialState = {};
const store = configureStore(
    initialState);



/*const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Provider store={store}>
          <ConnectedRouter history={history}>
              <div className="App">
                  <div className="container">
                      <Header/>
                      <Route  path="/person_list/"  exact  component={PersonsList}  />
                      <Route  path="/person/:id" exact component={PersonBase}  />
                      <Route  path="/person_add/" exact component={PersonAddUpdate}  />
                      <Route  path="/person_update/:id" exact component={PersonAddUpdate}  />
                      <Footer/>
                  </div>
              </div>
        </ConnectedRouter>
     </Provider>

  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);*/

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
                      <Route  path="/person_update/:id" exact component={PersonAddUpdate}  />
                      <Footer/>
                  </div>
              </div>
        </ConnectedRouter>
     </Provider>
    );
  }
}

export default App;
