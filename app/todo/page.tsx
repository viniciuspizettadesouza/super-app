import React from "react";
import TodoApp from '@components/Todo/TodoApp';

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <TodoApp />
    </div>
  );
};

export default Home;
