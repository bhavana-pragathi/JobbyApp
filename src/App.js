import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Jobs from './component/Jobs'
import AboutJob from './component/AboutJob'
import NotFound from './component/NotFound'
import ProtectedRoute from './component/ProtectedRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJob} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
