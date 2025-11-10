import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b bg-background">
      <div className="flex">
        {/* <Logo /> */}
        <p>StudyFlow</p>
      </div>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center gap-3">
        {/* <ThemeToggle /> */}
        <p>ThemeToggler</p>
        {/* <NotificationButton /> */}
        <p>Notif</p>
        {/* <UserMenu /> */}
        <p>UserMenu</p>
      </div>
    </header>
  );
}

export default Header;
