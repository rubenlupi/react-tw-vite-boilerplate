export const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      {children}
    </nav>
  );
};
