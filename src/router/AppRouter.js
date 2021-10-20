import React from 'react';

// npm install react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { EnglishScreen } from '../components/english/EnglishScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    {/* public route */}
                    <Route 
                        component={ LoginScreen }
                        exact path="/login"
                    />
                    
                    {/* private route */}
                    <Route 
                        component={ EnglishScreen }
                        exact path="/"
                    />
                    
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    );
};
