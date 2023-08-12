import AddTodo from "@/components/todos/AddTodo";
import TodoList from "@/components/todos/TodoList";

export default function home() {
  return (
    <main className="h-screen">
      <AddTodo/>  
      <TodoList />

    </main>
  );
}
