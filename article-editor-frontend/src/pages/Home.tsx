import { Component, createResource, For } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';

const Home: Component = () => {
  //works for string and number, but also works with object and array
  // const [var1, setVar1] = createSignal('0');
  // works for object and array, does not work with string or number
  // const [var2, setVar2] = createStore({ el: 'hello' });

  // const [articles, setArticles] = createSignal<Article[]>();
  const [articles, { refetch }] = createResource<Article[]>(getArticles);

  async function getArticles() {
    return await fetch('/data.json').then((r) => r.json());
  }

  createEffect(() => refetch());

  return (
    <div>
      <h1>test</h1>
      <span>{articles.loading && 'lädt...'}</span>
      <For each={articles()}>
        {(article, index) => (
          <p class="bg-yellow-700">
            {index() + 1}: {article.artno}
          </p>
        )}
      </For>
      <div class="btn i-mdi-cheese-off"></div>
    </div>
  );
};

export default Home;

type Article = {
  artno: string;
};
