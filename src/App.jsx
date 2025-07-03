/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Lista de Usuários
        </h1>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
