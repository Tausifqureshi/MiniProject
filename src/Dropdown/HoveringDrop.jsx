// hovering dropdown
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">My App</h1>

        <nav className="flex space-x-4 items-center relative">
          <a to="/" className="hover:underline">
            Home
          </a>

          <a to="/about" className="hover:underline">
            About
          </a>

          <a to="/contact" className="hover:underline">
            Contact
          </a>

          {/* Dropdown for Dashboard */}
          <div className="relative group">
            <button className="hover:underline focus:outline-none px-2 py-1">
              Dashboard
            </button>

            {/* Dropdown menu */}
            <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded hidden group-hover:block z-50 min-w-[150px]">
              <a
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Dashboard Home
              </a>
              <a
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                to="/settings"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </a>
            </div>
          </div>

                <a
                to="/profile"
                 className="hover:underline"
              >
                Profile
              </a>

          <a to="/login" className="hover:underline">
            Login
          </a>
        </nav>
      </div>
    </header>




  {/* <main className="flex-1 mx-auto p-4">
      <Outlet />
     </main> */}

     {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 border-t mt-4">
        <p className="text-sm text-gray-600">© 2025 My App</p>
      </footer>
      </div>
  );

}
