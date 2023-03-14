import { useState } from "react";
import { Form, Input, Button } from "antd";
import { Todo } from "../types/todo";

interface Props {
  onSubmitTodo: (todo: Todo) => void;
}

const TodoForm = ({ onSubmitTodo }: Props) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const todo: Todo = {
      id: Date.now(),
      description,
      date: new Date().toLocaleString(),
    };

    onSubmitTodo(todo);
    setDescription("");
  };

  return (
    <Form layout="inline">
      <Form.Item>
        <Input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
