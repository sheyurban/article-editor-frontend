import type { Component } from 'solid-js';
import { lazy, onMount } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';
import styles from './App.modules.css';
import Store from './store';
import 'uno.css'

// import Home from './pages/Home'
// import Users from './pages/Users'

// lazy load components
const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));

const { localStorage } = window;

const App: Component = () => {
  const [store, setStore] = Store;

  onMount(() => {
    if (store.users.length === 0) {
      const users = JSON.stringify(['user1', 'user2', 'user3']);
      localStorage.setItem('users', users);
    }
    const usersStringified = localStorage.getItem('users');
    if (usersStringified !== null) {
      setStore('users', JSON.parse(usersStringified));
    }
  });
  return (
    <>
      <nav>
        <A href="/">Home</A>
        <A href="/sign-up">Sign up</A>
        <A href="/users">Users</A>
      </nav>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/users" element={<Users onClick={(e) => console.log(e)}></Users>} />
        <Route
          path={['login', 'sign-up']}
          element={<h1>This is the sign up/ login screen.</h1>}
        />
      </Routes>
    </>
  );
};

export default App;
