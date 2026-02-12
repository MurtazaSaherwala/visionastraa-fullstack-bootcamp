import { Link } from "react-router-dom";

function Layout({children}) {
  return (
    <div>
      <header>
        <h2>Vehicle App</h2>
      </header>
      <main>
        <a href="/profile">Profile</a>
        <Link to="profile">Profile</Link>
        {children}
      </main>
    </div>
  );
}

export default Layout;