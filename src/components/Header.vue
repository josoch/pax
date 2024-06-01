<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
          FamilyApp
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/signin">Sign In</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">Sign Up</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.header {
  margin-bottom: 20px;
}
</style>
