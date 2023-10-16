import "./index.css";
import Logo from "../../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../services/reducers/actions/logoutAction";

function Header() {
  const isLogged = useSelector((state) => state.login);
  const loggedProfile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const hasToken = !!localStorage.getItem("loginToken");
  console.log("Log du header", loggedProfile);
  const signInOrSignOut = hasToken ? "Sign-Out" : "Sign-In";

  const handleSignOut = () => {
    if (hasToken) {
      dispatch(logout());
    }
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to={"/"}>
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div id="bar-link">
          {hasToken ? (
            <Link to={"/profile"} className="main-nav-item">
            <i className="fa fa-user-circle"></i>
              {loggedProfile.userName}
            </Link>
          ) : null}
          <Link
            className="main-nav-item"
            to={hasToken ? "/" : "/login"}
            onClick={handleSignOut}
          >
            <i className="fa fa-user-circle"></i>
            {signInOrSignOut}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
