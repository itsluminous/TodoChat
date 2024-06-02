import { createSignal } from 'solid-js';

export default (props) => {
  const [todo] = createSignal(props.todo);

  const toggleDone = () => {
    props.onToggleDone(todo());
  };

  const removeTodo = () => {
    props.onRemoveTodo(todo());
  };

  return (
    <li class={`p-3 rounded-md flex justify-between gen-textarea ${todo().done ? 'line-through' : ''}`}>
      <div>
        <input type="checkbox" checked={todo().done} onChange={toggleDone} class="mr-3" />
        {todo().value}
      </div>
      <button onClick={removeTodo} class="p-1 text-red-500 hover:text-red-600">
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  );
};
