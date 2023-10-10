import "./index.css";
import Logo from "../../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../services/reducers/actions/logoutAction";

function Header() {
  const isLogged = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const hasToken = !!localStorage.getItem("loginToken");

  const signInOrSignOut = hasToken ? "Sign-Out" : "Sign-In";

  const handleSignOut = () => {
    if (hasToken) {
      dispatch(logout());
    }
  };

  console.log(isLogged);

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
        <div>
          <Link
            className="main-nav-item"
            to={hasToken ? "/" : "/sign-in"}
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
