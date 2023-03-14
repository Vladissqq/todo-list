import { Layout, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { addTodo, deleteTodo } from "./redux/todoSlice";
import { Todo } from "./types/todo";

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo: Todo) => {
    dispatch(addTodo(todo));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Layout>
      <Header>
        <Title level={3} className="text-white">
          My Todo App
        </Title>
      </Header>
      <Content className="p-4">
        <TodoForm onSubmitTodo={handleAddTodo} />
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      </Content>
    </Layout>
  );
};

export default App;
