import { createSignal, onCleanup, onMount, Show } from 'solid-js';
import TodoItem from './TodoItem';

const todoSecret = import.meta.env.TODO_SECRET || 'senior ji'

export default (props) => {
  const defaultTodos: TodoItem[] = [];
  const [todos, setTodos] = createSignal<TodoItem[]>(defaultTodos);
  const [inputValue, setInputValue] = createSignal('');
  const [showChat, setShowChat] = createSignal(false);

  const addTodo = (e) => {
    if (e.key && e.key !== 'Enter') return;

    const value = inputValue().trim();
    if (value === '') return;
    if (value === todoSecret) {
      setShowChat(true);
    } else {
      setTodos([...todos(), { value, done: false }]);
      localStorage.setItem('todos', JSON.stringify(todos()));
    }
    setInputValue('');
  };

  const toggleDone = (todoToToggle) => {
    setTodos(todos().map(todo => {
      if (todo === todoToToggle) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos()));
  };

  const removeTodo = (todoToRemove) => {
    setTodos(todos().filter(todo => todo !== todoToRemove));
    localStorage.setItem('todos', JSON.stringify(todos()));
  };

  onMount(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  });

  onCleanup(() => {
    localStorage.setItem('todos', JSON.stringify(todos()));
  });

  return (
    <div class="flex justify-center">
      <div class="p-6 w-full rounded-xl shadow-lg space-y-6">
        <Show when={!showChat()} fallback={props.children}>
          <div class="space-y-4">
            <div class="flex space-x-2">
              <input
                type="text"
                value={inputValue()}
                onInput={(e) => setInputValue(e.currentTarget.value)}
                onKeyDown={addTodo}
                placeholder="Add a new todo"
                class="flex-grow p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 gen-textarea"
              />
              <button onClick={addTodo} class="p-3 bg-blue-500 rounded-md hover:bg-blue-600">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
            <ul class="space-y-2">
              {todos().map((todo, index) => (
                <TodoItem
                  key={index}
                  todo={todo}
                  onToggleDone={toggleDone}
                  onRemoveTodo={removeTodo}
                />
              ))}
            </ul>
          </div>
        </Show>
      </div>
    </div>
  );
};

interface TodoItem {
  value: string;
  done: boolean;
}
