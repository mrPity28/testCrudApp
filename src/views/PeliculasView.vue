<template>
    <div class="flex px-8 flex-col w-full py-3 h-[90vh]">
      <div
        class="pt-5 mb-4 px-5 flex rounded-lg flex-col justify-start items-center bg-gray-900 h-auto w-full text-white"
      >
        <div class="w-full text-xl mb-8 flex justify-center font-bold">
          <h1>Peliculas</h1>
        </div>
        <div
          class="flex flex-row justify-between flex-wrap items-center pb-9 h-full w-full"
        >
          <div class="flex flex-row">
            <div class="flex flex-col pr-7 h-auto w-auto justify-start">
              <h1 class="text-xl pb-2">Pelicula</h1>
              <select
                v-model="query.cod_pelicula"
                @change="buscarPelicula"
                class="bg-gray-50 h-10 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 h-auto w-[21rem]"
              >
              <!-- disabled selected hidden -->
                <option value="0" >Seleccione pelicula</option>
                <option
                  class="text-black"
                  v-for="(p, i) in peliculas"
                  :key="i"
                  :value="p.codPelicula"
                >
                  {{ p.txtDesc }}
                </option>
              </select>
            </div>
         
            
          </div>
          <div class="h-full flex justify-end items-end w-auto">
            <button
              @click="newPelicula"
              class="inline-flex mr-4 h-10 justify-center items-center rounded-md border border-transparent py-2 px-4 text-xl font-medium text-black shadow-sm bg-white hover:text-white hover:bg-black hover:border-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
                />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
  
      <!-- form de afuera -->
      <form class="w-full h-full flex justify-center">
        <div
          class="bg-gray-900 flex flex-col justify-center h-auto w-full px-20 py-10 rounded-md"
        >
          <div class="w-full mt-4 h-10 flex flex-row justify-end">
            <input
              disabled
              v-model="pelicula.codPelicula"
              class="bg-gray-600 rounded-md boder text-end border-x-transparent border-t-transparent border-b-white text-white text-sm w-[10rem]"
              type="text"
            />
          </div>
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-4 pb-5">
              <label class="block text-xl font-medium text-white"
                >Nombre</label
              >
              <input
                type="text"
                v-model="pelicula.txtDesc"
                class="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div
              class="col-span-6 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 pb-5"
            >
              <label class="block text-xl font-medium text-white">Stock Venta</label>
              <input
                type="text"
                v-model="pelicula.cantDisponiblesVenta"
                class="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div
              class="col-span-6 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 pb-5"
            >
              <label class="block text-xl font-medium text-white">Stock Alquiler</label>
              <input
                type="text"
                v-model="pelicula.cantDisponiblesAlquiler"
                class="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div
              class="col-span-6 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 pb-5"
            >
              <label class="block text-xl font-medium text-white">Precio Venta</label>
              <input
                type="text"
                v-model="pelicula.precioVenta"
                class="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div
              class="col-span-6 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 pb-5"
            >
              <label class="block text-xl font-medium text-white">Precio Alquiler</label>
              <input
                type="text"
                v-model="pelicula.precioAlquiler"
                class="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

          </div>
          <div class="w-full flex flex-row justify-end pt-6">
            <button
                v-if="pelicula.codPelicula != null"
                @click.prevent="guardarModificarPelicula"
                class="transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 inline-flex h-10 justify-center items-center rounded-md border border-transparent py-2 px-5 text-xl font-medium text-black shadow-sm bg-white hover:text-white hover:bg-black hover:border-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted, reactive } from "vue";
    import {
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
    } from "@headlessui/vue";
        
    import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
    import PeliculaServices from "../services/PeliculaServices";
  
    const query = reactive({
        cod_pelicula: 0,
    });
    
    const peliculas = ref([]);
    const pelicula = ref({});

    const getPeliculas = async () =>{
        var data =  await PeliculaServices.getPeliculas();
        peliculas.value = data.data
    }

    const getPelicula = async () =>{
        console.log(query)
        var data =  await PeliculaServices.getPelicula(query);
        pelicula.value = data.data
    }

    onMounted(async () => {
        await getPeliculas();
    });


    const buscarPelicula = async () =>
    {
        await getPelicula();
    }

    const newPelicula = () => {
        query.cod_pelicula =  0
        
        pelicula.value = {
            cantDisponiblesAlquiler:0,
            cantDisponiblesVenta:0,
            codPelicula:0,
            precioAlquiler:0,
            precioVenta:0,
            txtDesc:"Nombre Pelicula"
        }
    }

    const guardarModificarPelicula = async () => {

        console.log(pelicula._rawValue);
        
        const data = (pelicula._rawValue.codPelicula == 0 ) ? 
                await PeliculaServices.guardarPelicula(pelicula._rawValue) : await PeliculaServices.modificarPelicula(pelicula._rawValue);
        
        console.log(data);
        location.reload();

    }
 
  </script>
  