<template>
  <section
    v-if="!signupOk"
    data-bs-version="5.1"
    class="form01 flexm5 cid-ulucTA4WgA"
    id="form01-e"
  >
    <div
      class="mbr-overlay"
      style="opacity: 0.6; background-color: rgb(242, 242, 242)"
    ></div>

    <div class="container-fluid">
      <div class="row items-wrapper">
        <div class="col-12 col-lg-5">
          <div class="content-wrapper">
            <h2 class="mbr-section-title mbr-fonts-style display-2">
              <strong>My Life...</strong>
            </h2>
            <h3 class="mbr-section-subtitle mbr-fonts-style display-7">
              Thoughts, stories, ideas, experiences, all about your life
              journey.
            </h3>
          </div>
          <div class="mbr-form form-wrapper" data-form-type="formoid">
            <form
              method="POST"
              class="mbr-form form-with-styler"
              data-form-title="Form Name"
            >
              <input
                type="hidden"
                name="email"
                data-form-email="true"
                value="7qYCtDBruOmrJbRbNrxSeo1p7cifXdVDxwGAOEXd+mL1gUDtF6iSGVqSvCZgcKvCHnsPces7oFIjCxNZypOvA0Ki3g6r9eIvw87ckh5W6LPlzgR1r01sZ9dZC29hB3Ow.LzGkGqwUJY2FAfNc1ShPLL5qhe3rfVIy4RlRM6B8sYLqUFawR3BApj0lsnEmh2qsUTu0kyUeKkslsINj9z3unEW0VyNjoGuoajzuTosPzhOkAJwoyWq+LNf6rH1yEIiZ"
              />
              <div class="dragArea row">
                <div
                  class="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3 mb-3 mb-3 mb-3"
                  data-for="email"
                >
                  <label
                    for="email-form01-e"
                    class="form-control-label mbr-fonts-style display-4"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    name="email"
                    placeholder="enter your email address"
                    data-form-field="email"
                    class="form-control display-4"
                    v-model="email"
                    id="email-form01-e"
                    required
                  />
                  <div v-if="errorMsg.length > 0" class="py-2 m-1">
                    <span class="text-rose-400">{{ errorMsg }}</span>
                  </div>
                </div>
                <div class="col mbr-section-btn">
                  <button
                    type="button"
                    class="btn btn-warning display-4"
                    @click="handleSignup"
                  >
                    <i
                      v-if="loading"
                      class="ml-3 fa fa-spinner"
                      :class="{ 'fa-spin': loading }"
                      style="font-size: 24px"
                    ></i>
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    v-if="signupOk"
    data-bs-version="5.1"
    class="header1 factm5 cid-usN1EYsKDg mbr-parallax-background"
    id="aheader2-1i"
  >
    <div
      class="mbr-overlay"
      style="opacity: 0.6; background-color: rgb(255, 255, 255)"
    ></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-9">
          <h2 class="mbr-title mbr-fonts-style align-center display-2">
            <strong>
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </strong>
          </h2>
          <h4
            class="mbr-subtitle mbr-fonts-style align-center mb-0 display-5 text-green-600"
          >
            &nbsp; <strong>Now check your email!</strong>
          </h4>

          <div class="mbr-section-btn align-center">
            <a class="btn btn-white display-7" href="#"
              >&nbsp; To complete signup, click the confirmation link in your
              inbox. If it <br />
              doesn't arrive within 3 minutes, check your spam folder!</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { environment } from "@/common/environment";
import { setupGhostApi } from "@/api/signup/signupapi";
import { isValidEmail } from "@/api/signup/validator";

const email = ref("");

const errorMsg = ref("");

const signupOk = ref(false);

const loading = ref(false);

const handleSignup = async () => {
  loading.value = false;
  errorMsg.value = "";
  const ghost_site_url = environment().env.ghost_site_url;
  try {
    if (!email.value || !isValidEmail(email.value)) {
      errorMsg.value = "Invalid Email address";
      return;
    }
    loading.value = true;
    await new Promise(resolve => {
      setTimeout(async () => {
        const { sendMagicLink } = setupGhostApi({ siteUrl: ghost_site_url });
        const response = await sendMagicLink({
          email: email.value,
          labels: ["signup-form"],
        });
        if (response.status < 200 || response.status >= 300) {
          errorMsg.value = `Something is wrong, please try agagin after minutes: ${response.statusText}`;
        }else if (response.ok) {
          signupOk.value = true;
        }
        console.log("ghost signup result: ", response);
        resolve(signupOk.value);
      }, 500);
    });
  } catch (err) {
    errorMsg.value = `Something is wrong, please try agagin after minutes: ${
      (err as any).message
    }`;
  }
  loading.value = false;
  return signupOk.value;
};
</script>

<style scoped>
.cid-ulucTA4WgA {
  padding-top: 8rem;
  padding-bottom: 5rem;
  background-image: url("/assets/images/background3-1.jpg");
}

.cid-ulucTA4WgA .mbr-fallback-image.disabled {
  display: none;
}

.cid-ulucTA4WgA .mbr-fallback-image {
  display: block;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.cid-ulucTA4WgA .items-wrapper {
  justify-content: center;
}

.cid-ulucTA4WgA .content-wrapper .mbr-section-title {
  margin-bottom: 32px;
}

@media (max-width: 992px) {
  .cid-ulucTA4WgA .content-wrapper .mbr-section-title {
    margin-bottom: 24px;
  }
}

.cid-ulucTA4WgA .content-wrapper .mbr-section-subtitle {
  margin-bottom: 32px;
}

@media (max-width: 992px) {
  .cid-ulucTA4WgA .content-wrapper .mbr-section-subtitle {
    margin-bottom: 24px;
  }
}

.cid-ulucTA4WgA .form-wrapper {
  padding: 32px 40px;
  background-color: #f4f4f4;
}

@media (max-width: 1200px) {
  .cid-ulucTA4WgA .form-wrapper {
    padding: 20px 16px;
  }
}

.cid-ulucTA4WgA .form-wrapper .dragArea.row {
  position: relative;
  z-index: 1;
}

.cid-ulucTA4WgA .form-wrapper .dragArea.row .form-group {
  margin-bottom: 24px !important;
}

.cid-ulucTA4WgA .form-wrapper .dragArea.row .form-group .form-control-label {
  width: 100%;
  margin-bottom: 8px;
}

.cid-ulucTA4WgA .form-wrapper .dragArea.row .form-group .form-control {
  position: relative;
  z-index: 1;
  padding: 6px 12px;
  border: 2px solid #b9b9b9 !important;
  box-shadow: none;
  background-color: transparent;
  line-height: 1 !important;
  height: 34px;
}

@media (max-width: 992px) {
  .cid-ulucTA4WgA .form-wrapper .dragArea.row .form-group .form-control {
    padding: 22px;
  }
}

.cid-ulucTA4WgA .form-wrapper .dragArea.row .form-group .form-control:hover,
.cid-ulucTA4WgA .form-wrapper .dragArea.row .form-group .form-control:focus {
  border: 2px solid #f96e47 !important;
}

.cid-ulucTA4WgA
  .form-wrapper
  .dragArea.row
  .form-group
  .form-control::placeholder {
  color: #b9b9b9;
}

.cid-ulucTA4WgA .form-wrapper .dragArea.row .form-group textarea {
  min-height: 100px;
}

.cid-ulucTA4WgA .form-wrapper .dragArea.row .form-group .form-check {
  padding-left: 2.3em;
  margin-bottom: 16px;
}

.cid-ulucTA4WgA
  .form-wrapper
  .dragArea.row
  .form-group
  .form-check
  .form-check-input {
  background-color: #b9b9b9;
  border-color: #b9b9b9;
}

.cid-ulucTA4WgA .form-wrapper .dragArea.row .mbr-section-btn {
  width: 100%;
}

.cid-ulucTA4WgA .form-wrapper .dragArea.row .mbr-section-btn .btn {
  width: 100%;
  margin-top: 0;
  padding: 14px;
  border-radius: 0.5rem !important;
}

.cid-ulucTA4WgA .mbr-section-title {
  color: #272b2e;
  text-align: center;
}

.cid-ulucTA4WgA .mbr-section-subtitle {
  color: #272b2e;
  text-align: center;
}
</style>
