
import React from 'react';


import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


import LoginForm from './Component/Loginpage/Login';
import Home from './Component/Home/Home';
import Signup from './Component/SignUpPage/Signup';
import NotFound from './Component/NotfoundPage/NotFound';
import viewInstitute from './AdminServices/Institute/viewInstitute';
import viewCourse from './AdminServices/Course/ViewCourse';
import AddInstitute from './AdminServices/Institute/AddInstitute';
import ViewCart from './AdminServices/Student/ViewCart';
import AddCourse from './AdminServices/Course/AddCourse';
import EditInstitute from './AdminServices/Institute/EditIinstitute';
import StudentsList from './Student/students';
import './App.css';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/institute" component={viewInstitute} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/course/:id" component={viewCourse} />
            <Route exact path="/add/institute" component={AddInstitute} />
            <Route exact path="/cart/:id" component={ViewCart} />
            <Route exact path="/add/course/:id" component={AddCourse} />
            <Route exact path="/edit/institute/:id" component={EditInstitute} />
            <Route exact path="/list/students" component={StudentsList} />
            <Redirect to="/not-found" />
        </Switch>
    </BrowserRouter>



)

export default App
