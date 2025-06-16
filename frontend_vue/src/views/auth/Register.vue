<script setup lang="ts">
import axios from "axios";

const register = async () => {
  console.log("Registering...")

  try {
    const response = await axios.post('http://localhost:3000/api/register',
        {
          name: "John Doe",
          email: "test@test.ie",
          password: "password",
          password_confirmation: "password",
        }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

register();
</script>

<template>
  <h1>Register</h1>
</template>