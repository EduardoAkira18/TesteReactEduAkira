function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white bg-slate-400 hover:opacity-90 rounded-md px-4 py-2 w-fit transition"
    >
      {children}
    </button>
  );
}
export default Button;
