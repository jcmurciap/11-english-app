import React from 'react';

// npm install react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RenewPassword } from '../components/auth/RenewPassword';
import { SignoutScreen } from '../components/auth/SignoutScreen';
import { EnglishScreen } from '../components/english/EnglishScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    {/* public route */}
                    <Route 
                        component={LoginScreen}
                        exact path="/login"
                    />
                    <Route 
                        component={ SignoutScreen }
                        exact path="/signout"
                    />
                    <Route 
                        component={ RenewPassword }
                        exact path="/renew"
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
