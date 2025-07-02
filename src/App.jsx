/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import usersData from "./data/users.json";
import ListUsers from "./components/ListUsers";
import FilterUsers from "./components/FilterUsers";

function App() {
  const filteredUsers = usersData;
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Lista de Usuários
        </h1>
        <FilterUsers />
        <ListUsers filteredUsers={filteredUsers} />
      </div>
    </div>
  );
}

export default App;
