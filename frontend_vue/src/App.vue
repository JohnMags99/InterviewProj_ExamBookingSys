<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import axiosInstance from "@/lib/axios.ts";
import {provide, type Ref, ref} from "vue";

let authStat = ref("not auth");

let current_user: Ref<any>;
current_user = ref();
let user_data: Ref<any>;
user_data = ref();

const loadAuthStat = async () => {
  try {
    const response = await axiosInstance.get('api/authStat');
    authStat = response.data;
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const loadUser = async () => {
  await loadAuthStat();

  if (authStat === "auth") {
    try {
      const response = await axiosInstance.get("/api/user");
      current_user.value = response.data;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
};

const loadUserData = async () => {
  await loadUser();

  if (current_user.value) {
    try {
      const response = await axiosInstance.get("/api/getUserData", {
        params: {
          email: current_user.value.email
        }
      });
      user_data.value = response.data;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
};

const logout = async () => {
  try {
    const response = await axiosInstance.post("/api/logout");
    console.log(response.data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
};

loadUserData();
//share user data to dashboard
provide('user_data', user_data);

//share auth with login/register
provide('auth', authStat);
</script>
<template>
  <header>
    <div class="dark:bg-slate-950 bg-slate-700">
      <nav class="container mx-auto flex items-center justify-between p-4">
        <div class="flex space-x-2">
          <RouterLink v-if="authStat === 'not auth'" class="text-slate-200" to="/">Log In</RouterLink>
          <RouterLink v-if="authStat === 'not auth'" class="text-slate-200" to="/register">Register</RouterLink>
          <RouterLink v-if="authStat === 'auth'" class="text-slate-200" to="/" @click="logout">Log Out</RouterLink>
          <RouterLink v-if="authStat === 'auth'" class="text-slate-200" to="/dashboard">Dashboard</RouterLink>
          <RouterLink v-if="user_data && user_data.role === 'admin'" class="text-slate-200" to="/adminPanel">Admin
            Panel
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <main class="w-full mx-auto bg-slate-100 dark:bg-slate-900 min-h-screen">
    <div class="mb-">
      <RouterView/>
    </div>
  </main>
</template>
