import type { Component } from 'solid-js';
import  { lazy } from 'solid-js';
import { Routes, Route, A} from '@solidjs/router'
import styles from './App.modules.css'

// import Home from './pages/Home'
// import Users from './pages/Users'

// lazy load components
const Home = lazy(() => import('./pages/Home'))
const Users = lazy(() => import('./pages/Users'))

const App: Component = () => {
  return <> 
  <nav>
    <A href='/'>Home</A>
    <A href='/sign-up'>Sign up</A>
    <A href='/users'>Users</A>
  </nav>
  <Routes>
    <Route path="/" component={Home} />
    <Route path="/users" component={Users} />
    <Route path={['login', 'sign-up']} element={<h1>This is the sign up/ login screen.</h1>} />
  </Routes>
  </>;
};

export default App;
