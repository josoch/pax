<template>
    <div class="container mt-5">
      <h3>Reset Password</h3>
      <form @submit.prevent="resetPassword">
        <div class="mb-3">
          <label for="resetEmail" class="form-label">Email address</label>
          <input type="email" class="form-control" id="resetEmail" v-model="resetEmail" required>
        </div>
        <button type="submit" class="btn btn-primary">Reset Password</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ForgotPassword',
    data() {
      return {
        resetEmail: ''
      };
    },
    methods: {
      async resetPassword() {
        try {
          const response = await axios.post('https://familyapp.ocholi.com/users/reset-password', {
            email: this.resetEmail
          });
  
          if (response.status === 200) {
            alert('A password reset link has been sent to your email.');
            this.$router.push({ name: 'SignIn' });
          } else {
            alert('Failed to send password reset link. Please check your email.');
          }
        } catch (error) {
          console.error('Reset Password failed', error);
          alert('An error occurred while resetting the password. Please try again.');
        }
      }
    }
  };
  </script>
  