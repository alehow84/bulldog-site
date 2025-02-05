export default function Burger() {
  return (
    <button aria-label="burger menu button" className="relative p-6">
      <div className="absolute space-y-2 z-50 -translate-y-1/2 -translate-x-1/2">
        <div className="w-8 h-1 bg-white animate-bounce rounded-lg"></div>
        <div className="w-8 h-1 bg-white animate-bounce rounded-lg"></div>
        <div className="w-8 h-1 bg-white animate-bounce rounded-lg"></div>
      </div>
    </button>
  );
}
