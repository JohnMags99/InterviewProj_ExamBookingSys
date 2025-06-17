<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="dark:bg-slate-950 bg-slate-700">
      <nav class="container mx-auto flex items-center justify-between p-4">
        <div class="flex space-x-2">
          <RouterLink class="text-slate-200" to="/">Log In</RouterLink>
          <RouterLink class="text-slate-200" to="/register">Register</RouterLink>
          <RouterLink class="text-slate-200" to="/userDashboard">User Dashboard</RouterLink>
          <RouterLink class="text-slate-200" to="/adminDashboard">Admin Dashboard</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <main class="max-w-6xl mx-auto bg-slate-100 dark:bg-slate-900 min-h-screen">
    <div class="mb-6">
      <RouterView/>
    </div>
  </main>
</template>
