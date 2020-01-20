import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Form from "./Components/Form";

class App extends React.Component {
  
    // state = {
    //   List: [
    //     {
    //       id: 1,
    //       name: "Тарас Тополя",
    //       description: 'Фронтмен групи "Антитіла"',
    //       avatar: 32,
    //       gender: "men",
    //       facebook: "https://www.facebook.com/taras.topolya",
    //       twitter: "https://twitter.com/nb9gr",
    //       favorite: false
    //     },
    //     ]
    // };
    
  
 
    render() {
      return (
        <div className="container bootstrap snippet">
        <Router>
          
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Form
                //   ContactList={this.state.List}
                //   onStarPress={this.onStarPress}
                //   onDelete={this.onDelete}
                />
              )}
            ></Route>
        
            {/* <Route path="*" exact component={NotFound}></Route> */}
          </Switch>
        </Router>
                
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById("root"));
