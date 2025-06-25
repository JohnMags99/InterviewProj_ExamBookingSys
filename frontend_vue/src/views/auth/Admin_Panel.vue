<script setup lang="ts">
import axiosInstance from "@/lib/axios";
import {ref} from "vue";
import {RouterLink} from "vue-router";

const pending_users = ref([]);
const approved_users = ref([]);
const locked_users = ref([]);
const denied_users = ref([]);

const approveUser = async (email) => {
  try {
    const response = await axiosInstance.post('api/approve', email)
    console.log(response.data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
};

const denyUser = async (email) => {
  try {
    const response = await axiosInstance.post('api/deny', email)
    console.log(response.data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
};

const lockUser = async (email) => {
  try {
    const response = await axiosInstance.post('api/lock', email)
    console.log(response.data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
};

const unlockUser = async (email) => {
  try {
    const response = await axiosInstance.post('api/unlock', email)
    console.log(response.data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (email) => {
  try {
    const response = await axiosInstance.post('api/delete', email)
    console.log(response.data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
};

const loadPendingUsers = async () => {
  try {
    const response = await axiosInstance.get('api/getPending');
    pending_users.value = response.data;
    console.log(response.data)
  } catch (error) {
    console.error('Failed to get pending users');
  }
};

const loadApprovedUsers = async () => {
  try {
    const response = await axiosInstance.get('api/getApproved');
    approved_users.value = response.data;
    console.log(response.data)
  } catch (error) {
    console.error('Failed to get approved users');
  }
};

const loadLockedUsers = async () => {
  try {
    const response = await axiosInstance.get('api/getLocked');
    locked_users.value = response.data;
    console.log(response.data)
  } catch (error) {
    console.error('Failed to get approved users');
  }
};

const loadDeniedUsers = async () => {
  try {
    const response = await axiosInstance.get('api/getDenied');
    denied_users.value = response.data;
    console.log(response.data)
  } catch (error) {
    console.error('Failed to get approved users');
  }
};

loadPendingUsers();
loadApprovedUsers();
loadLockedUsers();
loadDeniedUsers();
</script>
<template>
  <div class="relative overflow-x-auto">
    <h1 class="text-3xl font-bold text-center text-slate-200 p-4">Pending Users</h1>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Email
        </th>
        <th scope="col" class="px-6 py-3">
          Given Name
        </th>
        <th scope="col" class="px-6 py-3">
          Family Name
        </th>
        <th scope="col" class="px-6 py-3">
          Gender
        </th>
        <th scope="col" class="px-6 py-3">
          Date of Birth
        </th>
        <th scope="col" class="px-6 py-3">
          Country of Birth
        </th>
        <th scope="col" class="px-6 py-3">
          Eircode
        </th>
        <th scope="col" class="px-6 py-3">
          Phone Prefix
        </th>
        <th scope="col" class="px-6 py-3">
          Phone Number
        </th>
        <th scope="col" class="px-6 py-3">
          Passport
        </th>
        <th scope="col" class="px-6 py-3">
          Role
        </th>
        <th scope="col" class="px-6 py-3">
          Status
        </th>
        <th scope="col" class="px-6 py-3">
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in pending_users" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
            user.email
          }}
        </th>
        <td class="px-6 py-4">{{ user.givenName }}</td>
        <td class="px-6 py-4">{{ user.familyName }}</td>
        <td class="px-6 py-4">{{ user.gender }}</td>
        <td class="px-6 py-4">{{ user.dateOB }}</td>
        <td class="px-6 py-4">{{ user.countryOB }}</td>
        <td class="px-6 py-4">{{ user.eircode }}</td>
        <td class="px-6 py-4">{{ user.prefix }}</td>
        <td class="px-6 py-4">{{ user.phone }}</td>
        <td class="px-6 py-4">{{ user.passport }}</td>
        <td class="px-6 py-4">{{ user.role }}</td>
        <td class="px-6 py-4">Pending</td>
        <td class="px-6 py-4">
          <a href="#" @click.prevent="approveUser(user)"
             class="font-medium text-green-600 dark:text-green-500 hover:underline">Approve</a><br>
          <a href="#" @click.prevent="denyUser(user)"
             class="font-medium text-red-600 dark:text-red-500 hover:underline">Deny</a>
        </td>
      </tr>
      </tbody>
    </table>
    <br>
    <h1 class="text-3xl font-bold text-center text-slate-200 p-4">Registered Users</h1>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Email
        </th>
        <th scope="col" class="px-6 py-3">
          Given Name
        </th>
        <th scope="col" class="px-6 py-3">
          Family Name
        </th>
        <th scope="col" class="px-6 py-3">
          Gender
        </th>
        <th scope="col" class="px-6 py-3">
          Date of Birth
        </th>
        <th scope="col" class="px-6 py-3">
          Country of Birth
        </th>
        <th scope="col" class="px-6 py-3">
          Eircode
        </th>
        <th scope="col" class="px-6 py-3">
          Phone Prefix
        </th>
        <th scope="col" class="px-6 py-3">
          Phone Number
        </th>
        <th scope="col" class="px-6 py-3">
          Passport
        </th>
        <th scope="col" class="px-6 py-3">
          Role
        </th>
        <th scope="col" class="px-6 py-3">
          Status
        </th>
        <th scope="col" class="px-6 py-3">
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in approved_users"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{user.email}}</th>
        <td class="px-6 py-4">{{ user.givenName }}</td>
        <td class="px-6 py-4">{{ user.familyName }}</td>
        <td class="px-6 py-4">{{ user.gender }}</td>
        <td class="px-6 py-4">{{ user.dateOB }}</td>
        <td class="px-6 py-4">{{ user.countryOB }}</td>
        <td class="px-6 py-4">{{ user.eircode }}</td>
        <td class="px-6 py-4">{{ user.prefix }}</td>
        <td class="px-6 py-4">{{ user.phone }}</td>
        <td class="px-6 py-4">{{ user.passport }}</td>
        <td class="px-6 py-4">{{ user.role }}</td>
        <td class="px-6 py-4">Registered</td>
        <td class="px-6 py-4">
          <a v-if="user.role != 'admin'" href="#" @click.prevent="lockUser(user)"
             class="font-medium text-red-600 dark:text-red-500 hover:underline">Lock</a>
        </td>
      </tr>
      </tbody>
    </table>
    <br>
    <h1 class="text-3xl font-bold text-center text-slate-200 p-4">Locked Users</h1>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Email
        </th>
        <th scope="col" class="px-6 py-3">
          Given Name
        </th>
        <th scope="col" class="px-6 py-3">
          Family Name
        </th>
        <th scope="col" class="px-6 py-3">
          Gender
        </th>
        <th scope="col" class="px-6 py-3">
          Date of Birth
        </th>
        <th scope="col" class="px-6 py-3">
          Country of Birth
        </th>
        <th scope="col" class="px-6 py-3">
          Eircode
        </th>
        <th scope="col" class="px-6 py-3">
          Phone Prefix
        </th>
        <th scope="col" class="px-6 py-3">
          Phone Number
        </th>
        <th scope="col" class="px-6 py-3">
          Passport
        </th>
        <th scope="col" class="px-6 py-3">
          Role
        </th>
        <th scope="col" class="px-6 py-3">
          Status
        </th>
        <th scope="col" class="px-6 py-3">
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in locked_users"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
            user.email
          }}
        </th>
        <td class="px-6 py-4">{{ user.givenName }}</td>
        <td class="px-6 py-4">{{ user.familyName }}</td>
        <td class="px-6 py-4">{{ user.gender }}</td>
        <td class="px-6 py-4">{{ user.dateOB }}</td>
        <td class="px-6 py-4">{{ user.countryOB }}</td>
        <td class="px-6 py-4">{{ user.eircode }}</td>
        <td class="px-6 py-4">{{ user.prefix }}</td>
        <td class="px-6 py-4">{{ user.phone }}</td>
        <td class="px-6 py-4">{{ user.passport }}</td>
        <td class="px-6 py-4">{{ user.role }}</td>
        <td class="px-6 py-4">Locked</td>
        <td class="px-6 py-4">
          <a href="#" @click.prevent="unlockUser(user)"
             class="font-medium text-green-600 dark:text-green-500 hover:underline">Unlock</a>
        </td>
      </tr>
      </tbody>
    </table>
    <br>
    <h1 class="text-3xl font-bold text-center text-slate-200 p-4">Denied Users</h1>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Email
        </th>
        <th scope="col" class="px-6 py-3">
          Given Name
        </th>
        <th scope="col" class="px-6 py-3">
          Family Name
        </th>
        <th scope="col" class="px-6 py-3">
          Gender
        </th>
        <th scope="col" class="px-6 py-3">
          Date of Birth
        </th>
        <th scope="col" class="px-6 py-3">
          Country of Birth
        </th>
        <th scope="col" class="px-6 py-3">
          Eircode
        </th>
        <th scope="col" class="px-6 py-3">
          Phone Prefix
        </th>
        <th scope="col" class="px-6 py-3">
          Phone Number
        </th>
        <th scope="col" class="px-6 py-3">
          Passport
        </th>
        <th scope="col" class="px-6 py-3">
          Role
        </th>
        <th scope="col" class="px-6 py-3">
          Status
        </th>
        <th scope="col" class="px-6 py-3">
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in denied_users"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
            user.email
          }}
        </th>
        <td class="px-6 py-4">{{ user.givenName }}</td>
        <td class="px-6 py-4">{{ user.familyName }}</td>
        <td class="px-6 py-4">{{ user.gender }}</td>
        <td class="px-6 py-4">{{ user.dateOB }}</td>
        <td class="px-6 py-4">{{ user.countryOB }}</td>
        <td class="px-6 py-4">{{ user.eircode }}</td>
        <td class="px-6 py-4">{{ user.prefix }}</td>
        <td class="px-6 py-4">{{ user.phone }}</td>
        <td class="px-6 py-4">{{ user.passport }}</td>
        <td class="px-6 py-4">{{ user.role }}</td>
        <td class="px-6 py-4">Denied</td>
        <td class="px-6 py-4">
          <a href="#" @click.prevent="deleteUser(user)"
             class="font-bold text-red-600 dark:text-red-500 hover:underline">Delete</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>