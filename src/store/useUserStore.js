import { defineStore } from "pinia";
import UsuarioServices from "../services/UsuarioServices";
import { router } from "../router/index";
//import Swal from "sweetalert2/dist/sweetalert2.js";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  getters: {},
  actions: {
    async login(username, password) {
      try {
        const seguro = await UsuarioServices.login(username, password);

        if (seguro.data) {
          this.user = seguro.data;
          localStorage.setItem("user", JSON.stringify(seguro.data));
          //router.push("/")
          router.push(this.returnUrl || "/");
        } else {
          //Swal.fire({ color: "black", title: "Usuario o clave inválida", confirmButtonColor: "rgb(75 85 99)"  });
        }
      } catch (e) {}
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/login");
    },
  },
});