import "./index.css";
import Logo from "../../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchProfileUser } from "../../services/fetch/profileUser";

function Header() {
  const dispatch = useDispatch()
  const loggedProfile = useSelector((state) => state.profile);
  const [hasToken, setHasToken] = useState(false);
  console.log("Log du header", loggedProfile);
  
  const handleSignOut = () => {
      localStorage.removeItem("loginToken");
      setHasToken(false);
    }

  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      setHasToken(true); 
      dispatch(fetchProfileUser())
    }
    console.log(token)
  }, [dispatch])


  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div id="bar-link">
          {hasToken ? (
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {loggedProfile.userName}
            </Link>
          ) : null}
          <Link
            className="main-nav-item"
            to={hasToken ? "/" : "/login"}
            onClick={handleSignOut}
          >
            {hasToken ? (
              <>
                <i className="fa-solid fa-right-from-bracket"></i>
                Sign-Out
              </>
            ) : (
              <>
                <i className="fa-solid fa-right-to-bracket"></i>
                Sign-In
              </>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
