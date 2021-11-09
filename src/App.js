
import { Board, TaskForm } from './components';
import { ContextProvider } from './contexts/context';

import "./global.css";

function App() {
  return (
    <ContextProvider>
      <section>
        <TaskForm />
        <Board />
      </section>
    </ContextProvider>
  );
}

export default App;
