import React from "react"
import Signup from "./components/account/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/home/Dashboard"
import Login from "./components/login/Login"
import PrivateRoute from "./components/home/PrivateRoute"
import ForgotPassword from "./components/account/ForgotPassword"
import UpdateProfile from "./components/account/UpdateProfile"
import Home from "./components/home/Home"
import Datee from "./components/date-dnf/Datee"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "flex" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/home" component={Home} />
              <Route path="/date" component={Datee} />

            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
