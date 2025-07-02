function FilterUsers() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <div className="">
        <label htmlFor="name-filter" className="label">
          Nome:
        </label>
        <input
          type="text"
          id="name-filter"
          placeholder="Filtrar por nome"
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        />
      </div>
      <div className="">
        <label htmlFor="email-filter" className="label">
          Email:
        </label>
        <input
          type="text"
          id="email-filter"
          placeholder="Filtrar por email"
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        />
      </div>
      <button className="button">Buscar</button>
    </div>
  );
}

export default FilterUsers;
