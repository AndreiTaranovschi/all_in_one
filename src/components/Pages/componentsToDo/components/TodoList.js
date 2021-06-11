import React from 'react';
import ToDo from "./Todo";

const TodoList = ({todos,setTodos,filteredTodos}) => {
     
    return (
        <div className="todo-container">
        <ul className="todo-list">
           {filteredTodos.map((todo) => (
               <ToDo
               setTodos={setTodos}
               todos={todos}
               key={todo.id} 
               todo={todo}
               text={todo.text}
               />
           ))}
        </ul>
      </div>
    );
    };
    export default TodoList;