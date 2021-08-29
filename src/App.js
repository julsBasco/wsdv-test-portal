import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Schedule from './components/Schedule'
import CardCollection from './components/CardCollection'
import Pop from './components/Pop'
import VideoLib from './components/VideoLib'

function App() {
    return (
        <div>
            <Router>
                <Route exact path="/home" component={Home} /> 
                <Route exact path="/" component={Home} /> 
                <Route exact path="/schedule" component={Schedule} /> 
                <Route exact path="/login" component={Login} />
                <Route exact path="/cardcollection" component={ CardCollection } />
                <Route exact path="/pop" component={ Pop } />
                <Route exact path="/videos" component={ VideoLib } />
            </Router>
            
           
        </div>
    )
}

export default App
