// import { ChevronRightIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// /* eslint-disable react/jsx-no-comment-textnodes */
// function ListUsers({ filteredUsers }) {
//   const navigate = useNavigate();

//   function onSeeDetailsClick(user) {
//     const query = new URLSearchParams();
//     query.set("name", user.name);
//     query.set("email", user.email);
//     query.set("phone", user.phone);
//     navigate(`/details_users?${query.toString()}`);
//   }

//   return (
//     <div>
//       <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
//         {filteredUsers.map((user) => (
//           <li key={user.id} className="flex gap-2">
//             <span className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
//               {user.name}
//             </span>
//             <span className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
//               {" "}
//               //! como juntar os background
//               {user.email}
//             </span>
//             <button
//               onClick={() => {
//                 onSeeDetailsClick(user);
//               }}
//               className="bg-slate-400 p-2 rounded-md text-white"
//             >
//               <ChevronRightIcon />
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListUsers;
