const Button = ({ label, onClick, style, size, type, children }: any) => {
  const sizeBtn =
    size === "sm"
      ? "max-w-[40px] h-[20px] text-xs"
      : "px-2 py-1 text-sm min-w-[100px] m-1";
  const typeBtn =
    type === "success"
      ? "border-green-800 hover:border-green-600 bg-green-100 text-green-800 hover:text-green-600"
      : type === "error"
      ? "border-red-800 hover:border-red-600 bg-red-100 text-red-800 hover:text-red-600"
      : "border-gray-800 hover:border-gray-700";

  return (
    <button
      style={style}
      className={`flex justify-center items-center rounded border hover:text-blue-300 ${sizeBtn} ${typeBtn}`}
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
