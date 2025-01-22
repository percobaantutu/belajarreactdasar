import Button from "../Components/Elements/Button";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TutuPedia</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <p>{username}</p>
            </li>
            <li>
              <Button children="Logout" variant="bg-blue-600 text-white" onClick={handleLogout} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
