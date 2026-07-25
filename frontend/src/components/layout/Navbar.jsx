const Navbar = () => {
  return (
    <header className="h-20 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">

      <div>

        <h2 className="text-2xl font-semibold text-white">
          Dashboard
        </h2>

        <p className="text-slate-400 text-sm">
          Welcome back.
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="w-10 h-10 rounded-full bg-indigo-600"></div>

      </div>

    </header>
  );
};

export default Navbar;