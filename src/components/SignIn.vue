<template>
  <div class="mt-4">
    <h3>Sign In</h3>
    <form @submit.prevent="signIn">
      <div class="mb-3">
        <label for="signInEmail" class="form-label">Email address</label>
        <input type="email" class="form-control" id="signInEmail" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="signInPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="signInPassword" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
    <a href="#" @click.prevent="navigateToForgotPassword">Forgot Password?</a>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async signIn() {
      try {
        const response = await axios.post('https://familyapp.ocholi.com/user', {
          email: this.email,
          password: this.password
        });

        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data));
          this.router.push({ name: 'HomeView' });
        } else {
          alert('Sign In failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Sign In failed', error);
        alert('An error occurred during sign in. Please try again.');
      }
    },
    navigateToForgotPassword() {
      this.router.push({ name: 'ForgotPassword' });
    }
  }
};
</script>
