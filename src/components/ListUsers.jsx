function ListUsers({ filteredUsers }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {filteredUsers.map((user) => (
        <li key={user.id} className="flex gap-2">
          <span className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
            {user.name}
          </span>
          <span className="bg-slate-400 text-left w-full text-white p-2 rounded-md">
            {user.email}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListUsers;
