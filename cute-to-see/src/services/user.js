import axios from "axios";
import { baseUrl } from "../constants/urls";
import { goToFeed } from "../routes/condinator";

export const login = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${baseUrl}/user/login`, body)
    .then((response) => {
      setLoading(false);
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("username", response.data.user.name);
      goToFeed(history);
    })
    .catch((error) => {
      setLoading(false);
      alert("Email ou senha incorretos!");
      console.log(error);
    });
};