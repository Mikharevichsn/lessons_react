import { Error } from './Error';
import { Login } from './Login';
import { AddTask } from './ToDo/AddTask';
import { TasksList } from './ToDo/TasksList';
import { User } from './User';

function App() {
  return (
    <div className='App'>
      <Error />
      <User />
      <TasksList />
      <AddTask />
      <hr />
      <Login />
    </div>
  );
}

export default App;
