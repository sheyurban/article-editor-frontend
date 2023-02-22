import type { Component } from 'solid-js';
import { Routes, Route, A} from '@solidjs/router'

const App: Component = () => {
  return <> 
  <Routes>
    <Route path="/" component={Home} />
    <Route path="/users" component={Users} />
    <Route path={['login', 'sign-up']} element={<h1>This is the sign up/ login screen.</h1>} />
  </Routes>
  </>;
};

export default App;
