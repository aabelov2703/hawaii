const Button = ({ label, onClick, style, size, type }: any) => {
  const sizeBtn =
    size === "sm" ? "w-[40px] h-[20px] text-xs" : "px-2 py-1 text-sm";
  const typeBtn =
    type === "success"
      ? "border-green-800 hover:border-green-600 bg-green-100 text-green-800 hover:text-green-600"
      : type === "error"
      ? "border-red-800 hover:border-red-600 bg-red-100 text-red-800 hover:text-red-600"
      : "border-gray-800 hover:border-gray-700";

  return (
    <button
      style={style}
      className={`rounded border hover:text-blue-300 ${sizeBtn} ${typeBtn}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
