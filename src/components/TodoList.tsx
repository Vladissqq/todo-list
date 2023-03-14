import { List } from "antd";
import { Todo } from "../types/todo";

interface Props {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}

const TodoList = ({ todos, onDeleteTodo }: Props) => {
  return (
    <List
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          actions={[
            <p key="delete" onClick={() => onDeleteTodo(todo.id)}>
              Delete
            </p>,
          ]}
        >
          <List.Item.Meta title={todo.description} description={todo.date} />
        </List.Item>
      )}
    />
  );
};

export default TodoList;
