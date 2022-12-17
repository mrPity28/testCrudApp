import axios from "axios";
const url = process.env.VUE_APP_RUTA_API;

const UsuarioServices = {
login : async (Username,Password) => {
    try {
        const body ={
            User:Username,
            Password:Password,
        }
      const res = await axios.post(url + "Usuario/login",body);
      return res.data;
    } catch (e) {
      return e;
    }
  },
}
export default UsuarioServices;