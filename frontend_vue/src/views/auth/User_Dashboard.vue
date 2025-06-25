<script setup lang="ts">
import {inject} from "vue";

const user_data = inject('user_data');
</script>
<template>
  <div v-if="user_data.approved === 'approved'" class="max-w-screen-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome {{user_data.givenName}}</h5>
    <h4 class="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Here is your personal information: </h4>
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <li class="py-3 sm:py-4 tracking-tight text-gray-900 dark:text-white"><b>Name: </b>{{user_data.givenName}} {{user_data.familyName}}</li>
      <li class="py-3 sm:py-4 tracking-tight text-gray-900 dark:text-white"><b>Email: </b>{{user_data.email}}</li>
      <li class="py-3 sm:py-4 tracking-tight text-gray-900 dark:text-white"><b>Phone: </b>(+{{user_data.prefix}}) {{user_data.phone}}</li>
      <li class="py-3 sm:py-4 tracking-tight text-gray-900 dark:text-white"><b>Postal Code: </b>{{user_data.eircode}}</li>
      <li class="py-3 sm:py-4 tracking-tight text-gray-900 dark:text-white"><b>Date of Birth: </b>{{user_data.dateOB}}</li>
      <li class="py-3 sm:py-4 tracking-tight text-gray-900 dark:text-white"><b>Nationality: </b>{{user_data.countryOB}}</li>
      <li class="py-3 sm:py-4 tracking-tight text-gray-900 dark:text-white"><b>Gender: </b>{{user_data.gender}}</li>
    </ul>
  </div>
  <div v-if="user_data.approved === 'pending'" class="max-w-screen-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome {{user_data.givenName}}</h5>
    <h4 class="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Your profile is currently being reviewed for approval.</h4>
  </div>
  <div v-if="user_data.approved === 'denied'" class="max-w-screen-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome {{user_data.givenName}}</h5>
    <h4 class="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Your request to create a profile has been denied.</h4>
  </div>
  <div v-if="user_data.approved === 'locked'" class="max-w-screen-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome {{user_data.givenName}}</h5>
    <h4 class="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Your profile has been locked until further notice by our admin team.</h4>
  </div>
</template>