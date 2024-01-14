import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFillter from "./TodoFillter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  //   const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
  //   console.log(isLoading, "isLoading");
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }
  return (
    <div>
      <div className="flex justify-between mb-5">
        {/* <Button className="bg-primary-gradient text-xl font-semibold">
          Add todo
        </Button> */}
        <AddTodoModal />
        {/* <Button>fillter</Button> */}
        <TodoFillter />
      </div>
      <div className="bg-primary-gradient w-full rounded-xl h-full p-[5px] ">
        <div className="bg-white p-5 w-full rounded-lg space-y-3">
          {todos.map((todo, index) => (
            <TodoCard
              key={index}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              isCompleted={todo.isCompleted}
            />
          ))}
          {/* <TodoCard /> */}
        </div>
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
