import { useDispatch } from "react-redux";

async function fetchUserLogin()  {
  try {
  const r = await fetch('http://locahost:3001/user/login')
  if (!r.ok) {
    throw new Error("Erreur lors de la connexion.")
  }
  } catch (error) {
    console.error(error);
  }
}