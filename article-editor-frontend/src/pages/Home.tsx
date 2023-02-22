import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';

const Home: Component = () => {
    //works for string and number, but also works with object and array
  const [var1, setVar1] = createSignal("0");
  // works for object and array, does not work with string or number
  const [var2, setVar2] = createStore({ el: 'hello' });

  return (
    <h1>
      {var1()} {var2.el}
    </h1>
  );
};

export default Home;
