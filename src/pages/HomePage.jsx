import { useEffect, useState } from "react";
import usuariosJson from "../data/users.json";
import { ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PreviousMap_ from "postcss/lib/previous-map";

function HomePage() {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(usuariosJson); // carrega os dados mockados
  }, []);

  const [filtroDigitado, setFiltroDigitado] = useState({ name: "", email: "" });
  const [filtroAplicado, setFiltroAplicado] = useState({ name: "", email: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("Campo:", name, "Valor:", value);
    setFiltroDigitado((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBuscar = () => {
    setFiltroAplicado(filtroDigitado);
  };

  const userFilter = usuarios.filter((user) => {
    const nameFilter = user.name
      .toLowerCase()
      .includes(filtroAplicado.name.toLowerCase());
    const emailFilter = user.email
      .toLowerCase()
      .includes(filtroAplicado.email.toLowerCase());
    return (
      (filtroAplicado.name === "" || nameFilter) &&
      (filtroAplicado.email === "" || emailFilter)
    );
  });

  function onSeeDetailsClick(user) {
    const query = new URLSearchParams();
    query.set("name", user.name);
    query.set("email", user.email);
    query.set("phone", user.phone);
    navigate(`/details_users?${query.toString()}`);
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md flex flex-col">
      {" "}
      <div className="">
        <label htmlFor="name-filter" className="">
          Nome:
        </label>
        <input
          name="name"
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
          type="text"
          id="name-filter"
          placeholder="Filtrar por nome"
          value={filtroDigitado.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="">
        <label htmlFor="email-filter" className="label">
          Email:
        </label>
        <input
          name="email"
          type="text"
          id="email-filter"
          placeholder="Filtrar por email"
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
          value={filtroDigitado.email}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleBuscar} className="button">
        Buscar
      </button>
      {/* <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {userFilter.map((user) => (
          <li key={user.id} className="flex gap-2">
            <span className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
              {user.name}
            </span>
            <span className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
              {" "}
              {user.email}
            </span>
            <button
              onClick={() => {
                onSeeDetailsClick(user);
              }}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <ChevronRightIcon />
            </button>
          </li>
        ))}
      </ul> */}
      <ul className="space-y-4 p-6 items-center bg-slate-200 rounded-md shadow">
        {userFilter.length === 0 ? (
          <li className="flex gap-2">Nenhum usuário encontrado</li>
        ) : (
          userFilter.map((user) => (
            <li className="flex justify-between items-center bg-slate-400 text-left w-full text-white p-2 rounded-md ">
              {user.name} - {user.email}
              <button
                onClick={() => {
                  onSeeDetailsClick(user);
                }}
                className=" text-white bg-slate-300 rounded-md"
              >
                <ChevronRightIcon />
              </button>
            </li>
          ))
        )}
      </ul>
      {/* <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {userFilter.map((user) => (
          <li key={user.id} className="flex gap-2">
            <span className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
              {user.name}
            </span>
            <span className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
              {" "}
              {user.email}
            </span>
            <button
              onClick={() => {
                onSeeDetailsClick(user);
              }}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <ChevronRightIcon />
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default HomePage;
