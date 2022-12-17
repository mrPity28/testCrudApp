<template>
    <div class="flex px-8 flex-row w-full py-3 h-[90vh]">
      <div class="flex w-full flex-col">
        
        <!-- tables -->
        <div
          class="flex flex-col overflow-auto scroller w-full text-white text-center shadow-md sm:rounded-lg">
                <div class="flex pr-10 h-auto w-auto justify-end">
                  <h1 class="text-xl pb-2 text-black">Recaudado alquiler/venta peliculas</h1>
                </div>

                <table class="w-full h-full text-sm text-center">
                    <thead
                    class="h-[6vh] sticky top-0 text-xs text-white uppercase bg-gray-800"
                    >
                    <tr>
                        <th scope="col" class="py-3 px-2">Pelicula</th>
                        <th scope="col" class="py-3 px-5">Veces Alquiladas</th>
                        <th scope="col" class="py-3 px-5">Veces Vendidas</th>
                        <th scope="col" class="py-3">Recaudado Alquiler</th>
                        <th scope="col" class="py-3">Recaudado Venta</th>
                    </tr>
                    </thead>
                    <tbody class="h-[58vh] w-full">
                        <tr
                          v-for="(p, i) in recaudado"
                          :key="i"
                          value="p.ref"
                          class="border-b h-8 text-white bg-gray-900 border-gray-700 hover:bg-gray-600"
                        >
                          <td scope="row" class="py-3 pl-5 font-medium whitespace-nowrap">
                            {{ p.pelicula }}
                          </td>
                          <td scope="row" class="py-3 px-6 font-medium whitespace-nowrap">
                            {{ p.cantAlquilada }}
                          </td>
                          <td scope="row" class="py-3 px-6 font-medium whitespace-nowrap">
                            {{ p.cantVendida }}
                          </td>
                          <td scope="row" class="py-3 px-6 font-medium whitespace-nowrap">
                            {{ p.precio_alquiler }}
                          </td>
                          <td scope="row" class="py-3 px-6 font-medium whitespace-nowrap">
                            {{ p.precio_venta }}
                          </td>
                        </tr> 
                    </tbody>
                </table>
        </div>
        
        <div
          class="flex flex-col overflow-auto scroller w-full text-white text-center shadow-md sm:rounded-lg">
                <div class="flex pr-10 h-auto w-auto justify-end">
                  <h1 class="text-xl pb-2 text-black">peliculas alquiladas por devolver</h1>
                </div>

                <table class="w-full h-full text-sm text-center">
                    <thead
                    class="h-[6vh] sticky top-0 text-xs text-white uppercase bg-gray-800"
                    >
                    <tr>
                        <th scope="col" class="py-3 px-2">Pelicula</th>
                        <th scope="col" class="py-3 px-5">Usuario</th>
                        <th scope="col" class="py-3 px-5">Fecha</th>
                        <th scope="col" class="py-3">Devolver</th>
                    </tr>
                    </thead>
                    <tbody class="h-[58vh] w-full">
                        <tr
                          v-for="(p, i) in peliculadPorDevolver"
                          :key="i"
                          value="p.ref"
                          class="border-b h-8 text-white bg-gray-900 border-gray-700 hover:bg-gray-600"
                        >
                          <td scope="row" class="py-3 pl-5 font-medium whitespace-nowrap">
                            {{ p.pelicula }}
                          </td>
                          <td scope="row" class="py-3 px-6 font-medium whitespace-nowrap">
                            {{ p.usuario }}
                          </td>
                          <td scope="row" class="py-3 px-6 font-medium whitespace-nowrap">
                            {{ p.fecha }}
                          </td>
                          <td class="pl-10">
                          <div class="bg-white mx-3 hover:bg-gray-900 rounded-xl h-10 w-10">
                            <button
                                @click="devolverPelicula(p.id)"
                                class="inline-flex mr-4 h-10 justify-center items-center rounded-md border border-transparent py-2 px-4 text-xl font-medium text-black shadow-sm bg-white hover:text-white hover:bg-black hover:border-white"
                              >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3" />
                              </svg>
                            </button>
                          </div>
                        </td>

                        </tr> 
                    </tbody>
                </table>
        </div>

      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, reactive } from "vue";
  
  import {
    HomeIcon,
    EyeIcon,
    PencilIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
  } from "@heroicons/vue/20/solid";
  import PeliculaServices from "../services/PeliculaServices";
  const recaudado = ref([])
  const peliculadPorDevolver = ref([])
  
  onMounted(async () => {
    await getRecaudado()
    await getPeliculasPorDevolver();
  });
 
  const getRecaudado = async() =>{
    const data = await PeliculaServices.getPeliculasRecaudado()
    recaudado.value = data.data
  }
  
  const getPeliculasPorDevolver = async() =>{
    const data = await PeliculaServices.getPeliculasAlquiladaPorDevolver()
    peliculadPorDevolver.value = data.data
  }

  const devolverPelicula = async (id) => {
    const data = {
      CodAlquilerPelicula: id
    }
    console.log(id)
    const res = await PeliculaServices.devolverPelicula(data)
    console.log(res)
    await getPeliculasPorDevolver();
  }
  
  //fin
  </script>