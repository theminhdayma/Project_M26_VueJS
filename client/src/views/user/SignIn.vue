<template>
  <section class="vh-100" style="margin-top: -64px;">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <div style="text-align: center; font-size: 45px;">ĐĂNG NHẬP</div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form id="loginForm">
            <div class="form-outline mb-4">
              <label class="form-label" for="email">Email</label>
              <input
                type="email"
                id="email"
                class="form-control form-control-lg"
                placeholder="Nhập email"
              />
              <div style="color: red;">Email không được để trống</div>
            </div>

            <div class="form-outline mb-3">
              <label class="form-label" for="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                class="form-control form-control-lg"
                placeholder="Nhập mật khẩu"
              />
              <div style="color: red;">Mật khẩu không được để trống</div>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <div class="form-check mb-0">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  id="form2Example3"
                />
                <label class="form-check-label" for="form2Example3">Lưu mật khẩu</label>
              </div>
              <a href="#!" class="text-body">Quên mật khẩu?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem;"
              >
                Đăng nhập
              </button>
              <p class="small fw-bold mt-2 pt-1 mb-0">
                Bạn chưa có tài khoản? 
                <router-link to="/pages/user/sign-up" class="link-danger">Đăng kí</router-link> tại đây
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

  
  <script setup lang="ts">

  </script>
  
  <style scoped>
  /* Thêm CSS của bạn tại đây nếu cần */
  </style>
  