import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFillter from "./TodoFillter";

const TodoContainer = () => {
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
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
