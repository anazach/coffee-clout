import { Route, Switch } from 'react-router-dom'
import Landing from './views/Landing'
import Menu from './views/Menu'
import './style/main.css'
// import About from './views/About'
// import Menu from './views/Menu'
// import Profile from './views/Profile'
import OrderStatus from './views/OrderStatus'
// import './style/main.scss'

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing} />
      <Route path='/status' exact component={OrderStatus} />
      <Route path='/menu' exact component={Menu} />
      {/* <Route path='/about' exact component={About} />
      <Route path='/menu' exact component={Menu} />
      <Route path='/Profile' exact component={Profile} />
      <Route path='/Status' exact component={Status} /> */}
    </Switch>
  )
}

export default App
