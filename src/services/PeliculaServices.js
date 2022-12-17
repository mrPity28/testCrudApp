import axios from "axios";
const url = process.env.VUE_APP_RUTA_API;

const PeliculaServices = {
    
    getPeliculas : async() => {
        try 
        {
            const res = await axios.get(url + "pelicula");
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },
    getPelicula : async({cod_pelicula}) => {
        try 
        {
            const res = await axios.get(url + "pelicula/" + cod_pelicula);
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },

    guardarPelicula : async ({txtDesc,cantDisponiblesAlquiler,cantDisponiblesVenta,precioAlquiler,precioVenta}) =>{
        try 
        {
            const body = {
                txtDesc: txtDesc,
                cantDisponiblesAlquiler: cantDisponiblesAlquiler,
                cantDisponiblesVenta: cantDisponiblesVenta,
                precioAlquiler: precioAlquiler,
                precioVenta: precioVenta
            }

            const res = await axios.post(url + "pelicula",body);
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },

    modificarPelicula : async ({codPelicula,txtDesc,cantDisponiblesAlquiler,cantDisponiblesVenta,precioAlquiler,precioVenta}) =>{
        try 
        {
            const body = {
                codPelicula: codPelicula,
                txtDesc: txtDesc,
                cantDisponiblesAlquiler: cantDisponiblesAlquiler,
                cantDisponiblesVenta: cantDisponiblesVenta,
                precioAlquiler: precioAlquiler,
                precioVenta: precioVenta
            }

            const res = await axios.put(url + "pelicula",body);
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },
    borrarPelicula : async ({cod_pelicula}) =>{
        try 
        {
            const querys = {
                cod_pelicula: cod_pelicula,
              }

            const res = await axios.delete(url + "pelicula", { params : {...querys}} );
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },

    alquilarPelicula : async ({cod_pelicula,cod_usuario,precio}) =>{
        try 
        {
            const body = {
                cod_pelicula: cod_pelicula,
                cod_usuario: cod_usuario,
                precio: precio
              }

            const res = await axios.post(url + "pelicula/alquilar",body);
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },
    
    venderPelicula : async ({cod_pelicula,cod_usuario,precio}) =>{
        try 
        {
            const body = {
                cod_pelicula: cod_pelicula,
                cod_usuario: cod_usuario,
                precio: precio
              }

            const res = await axios.post(url + "pelicula/vender",body);
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },
    
    devolverPelicula : async ({CodAlquilerPelicula}) =>{
        try 
        {
            const body = {
                CodAlquilerPelicula: CodAlquilerPelicula
            }

            const res = await axios.post(url + "pelicula/alquilar/devolver",body);
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },

    
    asignarGeneroPelicula : async ({codPelicula,codGenero}) =>{
        try 
        {
            const body = {
                codPelicula: codPelicula,
                codGenero: codGenero
            }

            const res = await axios.post(url + "pelicula/genero/asignar",body);
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },
    
    getPeliculasStockVenta : async () => {
        try 
        {
            const res = await axios.get(url + "pelicula/stock/venta");
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },
    
    getPeliculasStockAlquiler : async () => {
        try 
        {
            const res = await axios.get(url + "pelicula/stock/alquiler");
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },
    
    getPeliculasRecaudado : async () => {
        try 
        {
            const res = await axios.get(url + "pelicula/recaudado");
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },
    getPeliculasAlquiladaPorDevolver : async () => {
        try 
        {
            const res = await axios.get(url + "pelicula/alquilada/devolver");
            return res.data;
        } 
        catch (e) 
        {
            return e;
        }
    },


}
export default PeliculaServices;