import axios from "axios";
const url = process.env.VUE_APP_RUTA_API;

const UsuarioServices = {
login : async (Username,Password) => {
    try {
        const body ={
            Username:Username,
            Password:Password,
        }
      const res = await axios.post(url + "Usuario/loginadmin",body);
      return res.data;
    } catch (e) {
      return e;
    }
  },
}
export default UsuarioServices;