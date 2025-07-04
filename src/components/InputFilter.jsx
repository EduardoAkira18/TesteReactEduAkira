function InputFilter({ label, name, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={`${name}-filter`}
        className="mb-1 font-medium text-slate-700"
      >
        {label}
      </label>
      <input
        id={`${name}-filter`}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
    </div>
  );
}
export default InputFilter;
