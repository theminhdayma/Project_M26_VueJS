<template>
  <section class="h-80 bg-dark">
    <form id="signup">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div class="col-xl-6" style="margin-top: -70px; max-height: 650px">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">Đăng kí</h3>

                    <!-- Input for name -->
                    <div class="form-outline mb-4">
                      <label class="form-label" for="name">Tên đăng kí</label>
                      <input
                        type="text"
                        id="name"
                        class="form-control form-control-lg"
                        placeholder="Nhập tên"
                      />
                      <div style="color: red">Tên không được để trống</div>
                    </div>

                    <!-- Input for email -->
                    <div class="form-outline mb-4">
                      <label class="form-label" for="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        class="form-control form-control-lg"
                        placeholder="Nhập email"
                      />
                      <div style="color: red">Email không được để trống</div>
                    </div>

                    <!-- Input for password -->
                    <div class="form-outline mb-4">
                      <label class="form-label" for="password">Mật khẩu</label>
                      <input
                        type="password"
                        id="password"
                        class="form-control form-control-lg"
                        placeholder="Nhập mật khẩu"
                      />
                      <div style="color: red">Mật khẩu không được để trống</div>
                    </div>

                    <!-- Input for password confirmation -->
                    <div class="form-outline mb-4">
                      <label class="form-label" for="rePassword">Xác nhận mật khẩu</label>
                      <input
                        type="password"
                        id="rePassword"
                        class="form-control form-control-lg"
                        placeholder="Nhập lại mật khẩu"
                      />
                      <div style="color: red">Mật khẩu không khớp</div>
                    </div>

                    <!-- Link to sign-in -->
                    <div class="text-center">
                      <p class="mb-0">Bạn đã có tài khoản? <router-link to="/pages/user/sign-in">Đăng nhập</router-link></p>
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg"
                        style="background-color: #3949ab"
                      >
                        Đăng kí
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

  
  <script setup lang="ts">

  </script>
  
  <style scoped>
  /* You can import your CSS file here */
  /* @import '@/app/styles/sign-up.css'; */
  </style>
  