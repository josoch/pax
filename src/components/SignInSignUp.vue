<template>
  <div class="container mt-5">
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
</template>

<script>
import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue';

export default {
  name: 'SignInSignUp',
  components: {
    SignIn,
    SignUp
  }
};
</script>
