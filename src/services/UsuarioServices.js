import axios from "axios";
const url = process.env.VUE_APP_RUTA_API;

const UsuarioServices = {

  usuarios : async () => {
    try 
    {
      const res = await axios.get(url + "Usuario");
      return res.data;
    } 
    catch (e) 
    {
      return e;
    }
  },
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
  CrearUsuario: async ({usuario,password,nombre,apellido,nro_doc}) => {
    try {
      const body = {
        usuario : usuario,
        password: password,
        nombre:nombre,
        apellido:apellido,
        nro_doc:nro_doc
      }
      const res = await axios.post(url + "Usuario",body);
      return res.data;
  } catch (e) {
    return e;
  }

  }
}
export default UsuarioServices;