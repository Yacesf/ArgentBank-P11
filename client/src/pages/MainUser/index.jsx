import "./index.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileUser } from "../../services/fetch/profileUser";
import { fetchChangeUsername } from "../../services/fetch/changeUsername";
import { receiveUserName } from "../../services/reducers/profileReducer";

function MainUser() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(profile.userName);

  useEffect(() => {
    const fetchDataProfile = async () => {
      try {
        dispatch(fetchProfileUser());
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    fetchDataProfile();
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    dispatch(receiveUserName(newUsername));
    try {
      dispatch(fetchChangeUsername(newUsername));
    } catch (error) {
      console.error(error);
    }

    setIsEditing(false);
  };

  const handleCancelEditClick = () => {
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
          <div id="form-edit">
            <div className="div-input">
              User name: 
              <input
                className="input-form"
                type="text"
                value={newUsername}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="div-input">
              First name: 
              <input
                className="input-form"
                type="text"
                readOnly
                value={profile.firstName}
              />
            </div>
            <div className="div-input">
              Last name: 
              <input
                className="input-form"
                type="text"
                readOnly
                value={profile.lastName}
              />
            </div>
            <div id="form-buttons">
              <button className="form-button" onClick={handleSaveClick}>
                Save
              </button>
              <button className="form-button" onClick={handleCancelEditClick}>
                Cancel
              </button>
            </div>
          </div>
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
