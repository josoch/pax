<template>
  <div class="container mt-5">
    <div v-if="isLoggedIn">
      <router-view></router-view>
    </div>
    <div v-else>
      <p>Please sign in or sign up to use the app.</p>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="sign-in-tab" data-bs-toggle="tab" data-bs-target="#sign-in" type="button" role="tab" aria-controls="sign-in" aria-selected="true">Sign In</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="sign-up-tab" data-bs-toggle="tab" data-bs-target="#sign-up" type="button" role="tab" aria-controls="sign-up" aria-selected="false">Sign Up</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="sign-in" role="tabpanel" aria-labelledby="sign-in-tab">
          <SignIn />
        </div>
        <div class="tab-pane fade" id="sign-up" role="tabpanel" aria-labelledby="sign-up-tab">
          <SignUp />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SignIn from './components/SignIn.vue';
import SignUp from './components/SignUp.vue';

export default {
  name: 'App',
  components: {
    SignIn,
    SignUp
  },
  setup() {
    const router = useRouter();
    const isLoggedIn = ref(false);

    onMounted(() => {
      const user = localStorage.getItem('user');
      if (user) {
        isLoggedIn.value = true;
        router.push({ name: 'HomeView' });
      }
    });

    return { isLoggedIn };
  }
};
</script>
