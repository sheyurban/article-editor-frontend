import type { Component } from 'solid-js';
import { For, onMount } from 'solid-js';
import Store from '../store';

const Users: Component<Props> = (props) => {
  const [store, setStore] = Store;

  onMount(() => {
    if (store.users.length < 4) {
      setStore('users', [...store.users, 'user4']);
    }
  });

  return (
    <div>
      <h1>List of users:</h1>
      {props.id}
      <For each={store.users}>
        {(user, i) => (
          <p onClick={() => props.onClick(user)}>
            {i() + 1}: {user}
          </p>
        )}
      </For>
    </div>
  );
};

export default Users;

interface Props {
  id?: string;
  onClick: (user: string) => void
}
