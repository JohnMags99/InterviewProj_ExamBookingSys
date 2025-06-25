<script setup lang="ts">
import axiosInstance from "@/lib/axios";
import {reactive, ref} from "vue";

const noUser = ref(false);
const wrongPassword = ref(false);

interface LoginForm {
  email: string;
  password: string;
};

const form = reactive<LoginForm>({
  email: "",
  password: "",
});

const login = async (payload: LoginForm) => {
  try {
    const response = await axiosInstance.post("api/auth/spa/login", payload);
    console.log(response.data);
    location.reload();
  } catch (err) {
    console.error(err.response.data.message);
    if (err.response.data.message === "An account has not been found with provided email address.") {
      noUser.value = true;
    } else if (err.response.data.message === "Password is incorrect.") {
      wrongPassword.value = true;
    }
  }
};
</script>
<template>
  <h1 class="text-3xl text-center text-slate-200 p-4">Log In</h1>
  <form @submit.prevent="login(form)" class="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" id="email" v-model="form.email"
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="email@domain.ie" required/>
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="password" id="password" v-model="form.password"
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             required/>
    </div>
    <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Login
    </button>
  </form>
  <div v-show="noUser" class="max-w-sm mx-auto p-4 items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
    <p>An account has not been found with provided email address.</p>
    <br>
    <a href="/register"><b>Click here to register</b></a>
  </div>
  <div v-show="wrongPassword" class="max-w-sm mx-auto p-4 items-center bg-red-500 text-white text-sm font-bold px-4 py-3" role="alert">
    <p>Password is incorrect.</p>
  </div>
</template>