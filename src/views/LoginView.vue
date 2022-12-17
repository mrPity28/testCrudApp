<template>
  <div class="bg-gray-900">
    <div class="flex justify-center h-screen">
      <div class="hidden bg-cover lg:block lg:w-2/3 fondo"></div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-white">
              Bienvenido
            </h2>
            <p class="mt-3 text-gray-300">Ingrese usuario y contraseña.</p>
          </div>
          <div class="mt-8">
            <form>
              <div>
                <label for="email" class="block mb-2 text-sm text-gray-200"
                  >Nombre de usuario</label
                >
                <input
                  v-model="comprobacion.Usernamne"
                  type="text"
                  name="text"
                  id="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-200"
                    >Contraseña</label
                  >
                </div>

                <input
                  v-model="comprobacion.Password"
                  type="password"
                  name="password"
                  id="password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-8 flex justify-center">
                <button
                  type="submit"
                  @click.stop.prevent="BtnLogin"
                  class="w-[20vw] py-2 tracking-wide text-gray-900 transition-colors duration-200 transform bg-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useUserStore } from "@/store/useUserStore";

const user = useUserStore();

const comprobacion = {
  Usernamne: "",
  Password: "",
};

const BtnLogin = async () => {
  user.login(comprobacion.Usernamne, comprobacion.Password);
  //console.log(user)
};


</script>

<style>
.fondo {
  background-image: url("../../public/imagelogin.jpeg");
  background-position: center;
  background-size: cover;
}
</style>
