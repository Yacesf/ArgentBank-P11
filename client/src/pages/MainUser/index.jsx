import "./index.css";
import {  useEffect, useState } from "react";
import { fetchProfileUser } from "../../services/fetch/profileUser";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../services/reducers/actions/usernameAction";

function MainUser() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [isEditing, setIsEditing] = useState(false)
  const [newUsername, setNewUsername] = useState(profile.userName)

  useEffect(() => {
    const dataProfile = async () => {
      try {
        const profileDispatch = fetchProfileUser();
        const response = await profileDispatch(dispatch)
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    dataProfile();
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(updateUsername(newUsername))
    setIsEditing(false);
  };

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {profile.firstName} {profile.lastName} !
        </h1>
        {isEditing ? (
          <>
            <input
              type="text"
              value={newUsername}
              onChange={handleUsernameChange}
            />
            <button className="save-button" onClick={handleSaveClick}>
              Save
            </button>
          </>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>
            Edit Username
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default MainUser;
