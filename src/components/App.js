import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'

function App() {
    return (
        <div>
            
            <Router>
                <AuthProvider>
                    <Switch>
                        <PrivateRoute exact path='/' component={ Dashboard } />
                        
                        <Route path = '/login' component={ Login } />
                    </Switch>
                </AuthProvider>
            </Router>
          
            
           
        </div>
    )
}

export default App
