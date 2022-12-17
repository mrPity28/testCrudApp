<template>
    <div class="flex px-8 flex-row w-full py-3 h-[90vh]">
      <div class="flex w-full h-full flex-col">
        
        <!-- tables -->
        <div
          class="flex justify-between overflow-auto scroller w-full text-white text-center shadow-md sm:rounded-lg"
        >
            <div class="flex50">
                <div class="lex flex-col pr-10 h-auto w-auto justify-start">
                  <h1 class="text-xl pb-2 text-black">ventas</h1>
                </div>
                <table class="w-full h-full text-sm text-center">
                    <thead class="h-[6vh] sticky top-0 text-xs text-white uppercase bg-gray-800">
                      <tr>
                          <th scope="col" class="py-3 px-2">Pelicula</th>
                          <th scope="col" class="py-3 px-5">Stock</th>
                          <th scope="col" class="py-3 px-5">Precio</th>
                          <th scope="col" class="py-3 px-5">Vender</th>
                      </tr>
                    </thead>
                    <tbody class="h-[58vh] w-full">
                      <tr
                        v-for="(p, i) in peliculasVenta"
                        :key="i"
                        value="p.ref"
                        class="border-b h-8 text-white bg-gray-900 border-gray-700 hover:bg-gray-600"
                      >
                        <td scope="row" class="py-3 pl-5 font-medium whitespace-nowrap">
                          {{ p.txt_Desc }}
                        </td>
                        <td scope="row" class="py-3 px-6 font-medium whitespace-nowrap">
                          {{ p.cant_Disponibles_Venta }}
                        </td>
                        <td scope="row" class="py-3 px-6 font-medium whitespace-nowrap">
                          {{ p.precio_Venta }}
                        </td>
                      
                        <!-- butonicon -->
                        <td class="pl-10">
                          <div class="bg-white mx-3 hover:bg-gray-900 rounded-xl h-10 w-10">
                            <button
                                @click="alquilarVender(p)"
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
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
          
            <div class="flex50">
                <div class="lex flex-col pr-10 h-auto w-auto justify-start">
                  <h1 class="text-xl pb-2 text-black">Alquiler</h1>
                </div>
                
                <table class="w-full h-full text-sm text-center">
                    <thead class="h-[6vh] sticky top-0 text-xs text-white uppercase bg-gray-800">
                      <tr>
                          <th scope="col" class="py-3 px-2">Pelicula</th>
                          <th scope="col" class="py-3 px-5">Stock</th>
                          <th scope="col" class="py-3 px-5">Precio</th>
                          <th scope="col" class="py-3 px-5">Vender</th>
                      </tr>
                    </thead>
                    <tbody class="h-[58vh] w-full">
                      <tr
                        v-for="(p, i) in peliculasAlquiler"
                        :key="i"
                        value="p.ref"
                        class="border-b h-8 text-white bg-gray-900 border-gray-700 hover:bg-gray-600"
                      >
                        <td scope="row" class="py-3 pl-5 font-medium whitespace-nowrap">
                          {{ p.txt_Desc }}
                        </td>
                        <td scope="row" class="py-3 px-6 font-medium whitespace-nowrap">
                          {{ p.cant_Disponibles_Alquiler }}
                        </td>
                        <td scope="row" class="py-3 px-6 font-medium whitespace-nowrap">
                          {{ p.precio_Venta }}
                        </td>
                      
                        <!-- butonicon -->
                        <td class="pl-10">
                          <div class="bg-white mx-3 hover:bg-gray-900 rounded-xl h-10 w-10">
                            <button
                                @click="alquilarVender(p,false)"
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
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </div>

    <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-10">
              <TransitionChild as="template">
                <div
                  class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                />
              </TransitionChild>

              <div class="fixed inset-0 z-10 overflow-y-auto">
                <div
                  class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                >
                  <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <DialogPanel
                      class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[65%]"
                    >
                      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                          <div
                            class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-6 h-6 text-gray-600"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <div
                            class="mt-3 flex flex-col justify-center text-center w-full sm:text-left"
                          >
                            <DialogTitle
                              class="text-lg font-bold leading-6 pl-3 pb-5 text-gray-900"
                              > ------- </DialogTitle
                            >
                            <div class="mt-2">
                              <form class="w-full h-full flex justify-center">
                                <div
                                  class="bg-gray-900 flex flex-col justify-center h-auto w-full px-10 py-5 rounded-md"
                                >

                                  <div class="col-span-6 sm:col-span-4 pb-5">
                                      <label
                                        class="block text-xl font-medium text-white"
                                        >Pelicula</label
                                      >
                                      <input
                                        type="text"
                                        v-model="pelicula.txt_Desc"
                                        :readonly="true"
                                        class="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                      />
                                    </div>

                                  <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3 pb-5">
                                      <label
                                        class="block text-xl font-medium text-white"
                                        >Precio</label
                                      >
                                      <input
                                        type="text"
                                        :readonly="true"
                                        v-model="pelicula.precio"
                                        class="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                      />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 pb-5">
                                      <label
                                        class="block text-xl font-medium text-white"
                                        >Usuario</label
                                      >
                                      <select
                                        v-model="pelicula.cod_usuario"
                                        class="t-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                      >
                                      <!-- disabled selected hidden -->
                                        <option value="0" >Seleccione Usuario</option>
                                        <option
                                          class="text-black"
                                          v-for="(p, i) in usuarios"
                                          :key="i"
                                          :value="p.codUsuario"
                                        >
                                          {{ p.txtNombre + ' ' + p.txtApellido  }}
                                        </option>
                                      </select>
                                    
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                      >
                        <button
                          type="button"
                          @click="AlquilarVenderPelicula"
                          class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Guardar
                        </button>
                        <button
                          type="button"
                          class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          @click="open = false"
                          ref="cancelButtonRef"
                        >
                          Cerrar
                        </button>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </TransitionRoot>

  </template>
  
  <script setup>
  import { ref, onMounted, reactive } from "vue";
  import PeliculaServices from "../services/PeliculaServices"
  import UsuarioServices from "../services/UsuarioServices"
  import {
    HomeIcon,
    EyeIcon,
    PencilIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
  } from "@heroicons/vue/20/solid";
  import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
  
const open = ref(false);
  //variables
  const peliculasAlquiler  = ref([])
  const peliculasVenta = ref([])
  const pelicula = ref({})
  const venta = ref(true)
  const usuarios = ref(true)
  
  const getPeliculasVenta = async () => {
    var data = await PeliculaServices.getPeliculasStockVenta();
    peliculasVenta.value = []
    peliculasVenta.value = data.data
    //console.log(peloculasVenta)
  }
  const getPeliculasAlquiler = async () => {
    var data =  await PeliculaServices.getPeliculasStockAlquiler();
    peliculasAlquiler.value = []
    peliculasAlquiler.value = data.data
    //console.log(peliculasAlquiler)
  }

  const getUsuarios = async () => {
    var data =  await UsuarioServices.usuarios();
    usuarios.value = data.data
  }

  onMounted(async () => {
    await getPeliculasAlquiler();
    await getPeliculasVenta();
    await getUsuarios()
  });
  
  const alquilarVender = (peli , flagVender = true) => {
    const {cod_Pelicula,txt_Desc,precio_Alquiler,precio_Venta} = peli
    open.value = true
    venta.value = flagVender
    
    pelicula.value = {
      cod_pelicula: cod_Pelicula,
      precio: flagVender ? precio_Venta : precio_Alquiler,
      cod_usuario: 0,
      txt_Desc: txt_Desc,
    }
  }
  
  const AlquilarVenderPelicula = async () => {
    console.log()
    if(venta._rawValue)
      await Vender()
    else 
      await Alquilar()
  }

  const Alquilar = async () =>{
    const res = await PeliculaServices.alquilarPelicula(pelicula._rawValue);
    console.log(res)
    await getPeliculasAlquiler();
  }
  const Vender = async () =>{
    const res = await PeliculaServices.venderPelicula(pelicula._rawValue);
    console.log(res)
    await getPeliculasVenta();
  }
  //fin
  </script>