import './App.css';
import React from 'react';
import Header  from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import Chat  from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  
  const [ {user} , dispatch] = useStateValue();

  return (
    <div className="App">

      <Router>
        {!user ?(
            <Login />
        ): (
            <>
          <Header/>
          <div className="app__body">
             <Sidebar/>
             <Switch>
               <Route path="/rooms/:roomId">
                 <Chat/>
               </Route>

               <Route path="/">
                
                 <h1>Hey,Welcome To InfoSnity {user?.user} + User </h1>
               </Route>

              </Switch>
          </div>
          </>
        ) }
        
      </Router>
    </div>
  );
}

export default App;
