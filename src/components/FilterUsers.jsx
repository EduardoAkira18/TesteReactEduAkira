// import { useState } from "react";
// import usersData from "./data/users.json";

// function FilterUsers({ user }) {
//   const user = usersData;

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const [searchName, setSearchName] = useState("");
//   const [searchEmail, setSearchEmail] = useState("");

//   const userFilter = user.filter((user) => user.name.startsWith(searchName));

//   return (
//     <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
//       <div className="">
//         <label htmlFor="name-filter" className="label">
//           Nome:
//         </label>
//         <input
//           className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
//           type="text"
//           id="name-filter"
//           placeholder="Filtrar por nome"
//           value={searchName}
//           onChange={(event) => {
//             setSearchName(event.target.value);
//           }}
//         />
//       </div>
//       <div className="">
//         <label htmlFor="email-filter" className="label">
//           Email:
//         </label>
//         <input
//           type="text"
//           id="email-filter"
//           placeholder="Filtrar por email"
//           className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
//         />
//       </div>
//       <button
//         onClick={() => {
//           // if (!name.trim() || !email.trim()) {
//           //   return alert("Preencha o título e a descrição da tarefa.");
//           // }
//           setName("");
//           setEmail("");
//         }}
//         className="button"
//       >
//         Buscar
//       </button>
//     </div>
//   );
// }

// export default FilterUsers;
