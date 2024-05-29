<template>
    <div class="mt-4">
      <h3>Sign Up</h3>
      <form @submit.prevent="signUp">
        <div class="mb-3">
          <label for="signUpEmail" class="form-label">Email address</label>
          <input type="email" class="form-control" id="signUpEmail" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="signUpPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="signUpPassword" v-model="password" required>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'SignUp',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
      async signUp() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
  
        try {
          const apiUrl = import.meta.env.VITE_API_BASE_URL + "/users";
          const response = await axios.post(apiUrl, {
            email: this.email,
            password: this.password
          });
  
          if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify({ email: this.email, id: response.data.id }));
            this.router.push({ name: 'HomeView' });
          }
        } catch (error) {
          console.error('Sign Up Failed', error);
          alert('An error occurred during sign up. Please try again.');
        }
      }
    }
  };
  </script>
  