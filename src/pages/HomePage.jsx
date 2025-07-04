import { useEffect, useState } from "react";
import usuariosJson from "../data/users.json";
import { ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InputFilter from "../components/InputFilter";
import Button from "../components/Button";

//! explicação
//! READ.ME
//! PASTA DE ROUTES PRO JOAOZINHO

function HomePage() {
  const navigate = useNavigate();

  const [users, setUsuarios] = useState([]);

  // Carrega os dados mockados
  useEffect(() => {
    setUsuarios(usuariosJson);
  }, []);

  // Guarda o que o usuário está digitando
  const [userTyping, setUserTyping] = useState({ name: "", email: "" });

  // Guarda o dado que realmente vai ser aplicado pelo filtro quando clicar no botão de busca
  const [filterApplied, setFilterApllied] = useState({ name: "", email: "" });

  // Pega o nome dos inputs (name e email) e troca para o valor digitado nos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserTyping((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filtro para que seja passado no botão, uso toLowerCase no primeio para transformar os dados do json e no segundo para transformar no input do usuário
  // Operadores logicos para que permita a busca apenas por nome ou email, e caso vazio, mostra a lista completa
  const userFilter = users.filter((user) => {
    const nameFilter = user.name
      .toLowerCase()
      .includes(filterApplied.name.toLowerCase());
    const emailFilter = user.email
      .toLowerCase()
      .includes(filterApplied.email.toLowerCase());
    return (
      (filterApplied.name === "" || nameFilter) &&
      (filterApplied.email === "" || emailFilter)
    );
  });

  // Botão do Buscar
  const handleSearch = () => {
    setFilterApllied(userTyping);
  };

  // Botão do Limpar
  const handleClear = () => {
    setUserTyping({ name: "", email: "" });
    setFilterApllied({ name: "", email: "" });
  };

  // Função para levar o usuário para a tela de detalhes (icone)
  function onSeeDetailsClick(user) {
    const query = new URLSearchParams();
    query.set("name", user.name);
    query.set("email", user.email);
    query.set("phone", user.phone);
    navigate(`/details_users?${query.toString()}`);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="space-y-6 p-6 bg-slate-200 rounded-md flex flex-col max-w-md w-full shadow-md"
    >
      <InputFilter
        label="Nome:"
        name="name"
        placeholder="Filtrar por nome"
        value={userTyping.name}
        onChange={handleInputChange}
      />
      <InputFilter
        label="Email:"
        name="email"
        placeholder="Filtrar por email"
        value={userTyping.email}
        onChange={handleInputChange}
      />
      <div className="flex justify-center gap-4">
        <Button onClick={handleSearch} children="Buscar" />
        <Button onClick={handleClear} children="Limpar" />
      </div>
      <ul className="space-y-4 p-4 bg-white rounded-md shadow">
        {userFilter.length === 0 ? (
          <li className="flex gap-2">Nenhum usuário encontrado</li>
        ) : (
          userFilter.map((user) => (
            <li className="flex justify-between items-center bg-slate-500 text-white px-4 py-2 rounded-md shadow-sm ">
              {user.name} - {user.email}
              <button
                onClick={() => {
                  onSeeDetailsClick(user);
                }}
                className="text-white bg-slate-400 hover:opacity-90 rounded-md w-fit transition"
              >
                <ChevronRightIcon />
              </button>
            </li>
          ))
        )}
      </ul>
    </form>
  );
}

export default HomePage;
