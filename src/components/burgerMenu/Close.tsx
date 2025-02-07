export default function Close() {
  return (
    <button className="relative z-50 p-6 bg-black hover:bg-blue-400 rounded-md">
      <div className="w-8 h-1 -rotate-45 -translate-x-1/2 absolute bg-white rounded-full"></div>
      <div className="w-8 h-1 rotate-45 -translate-x-1/2 absolute bg-white rounded-full"></div>
    </button>
  );
}
