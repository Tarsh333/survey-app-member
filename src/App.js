import React from 'react'
import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { Container } from 'react-bootstrap';
import AddSurvey from './AddSurvey/AddSurvey'
import Login from './Login Signup/Login'
import { useGlobalContext } from './Context'
import Signup from './Login Signup/Signup'
const App = () => {
    const {loggedIn}=useGlobalContext()

    return (
        <>
            <Header />
            <Router>
                <Sidebar className="col-md-2" />
                <div className="page">
                    <Switch>
                        <Route exact path="/">{loggedIn?<AddSurvey className="col-md-10" />:<Redirect to="/login"/>}</Route>
                        <Route exact path="/add-survey">{loggedIn?<AddSurvey className="col-md-10" />:<Redirect to="/login"/>}</Route>
                        <Route exact path="/login">{!loggedIn?<Login className="col-md-10" />:<Redirect to="/"/>}</Route>
                        <Route exact path="/signup">{!loggedIn?<Signup className="col-md-10" />:<Redirect to="/"/>}</Route>
                        {/* <Route> {login?<Profile/>:<Redirect to="/"/>}</Route> */}
                        {/* <Route exact path="*"><Error /></Route> */}
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App

