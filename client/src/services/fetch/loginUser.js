export const loginUser = (userData) => async (dispatch) => {
  try {
    console.log('Données userData envoyées :', userData);
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    } else {
      throw new Error("Erreur lors de la connexion.");
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: "LOGIN_FAILURE", payload: error.message });
  }
};
