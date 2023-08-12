import React from "react";
import mainLogo from "../../assets/img/main_logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      {/* <!-- auth-page wrapper --> */}
      <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
        {/* <!-- auth-page content --> */}
        <div class="auth-page-content overflow-hidden pt-lg-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="card overflow-hidden m-0">
                  <div class="row justify-content-center g-0">
                    <div class="col-lg-6">
                      <div class="p-lg-5 p-4 auth-one-bg h-100">
                        <div class="bg-overlay"></div>
                        <div class="position-relative h-100 d-flex flex-column">
                          <div class="mb-4">
                            <Link to="/" class="d-block">
                              <img src={mainLogo} alt="" height="30" />
                            </Link>
                          </div>
                          <div class="mt-auto">
                            <div class="mb-3">
                              <i class="ri-double-quotes-l display-4 quote-color"></i>
                            </div>

                            <div
                              id="qoutescarouselIndicators"
                              class="carousel slide"
                              data-bs-ride="carousel"
                            >
                              <div class="carousel-indicators">
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="0"
                                  class="active"
                                  aria-current="true"
                                  aria-label="Slide 1"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="1"
                                  aria-label="Slide 2"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="2"
                                  aria-label="Slide 3"
                                ></button>
                              </div>
                              <div class="carousel-inner text-center text-white-50 pb-5">
                                <div class="carousel-item active">
                                  <p class="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                                <div class="carousel-item">
                                  <p class="fs-15 fst-italic">
                                    " The theme is really great with an amazing
                                    customer support."
                                  </p>
                                </div>
                                <div class="carousel-item">
                                  <p class="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* <!-- end carousel --> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="p-lg-5 p-4">
                        <div>
                          <h5 class="text-primary">Register Account</h5>
                          <p class="text-muted">
                            Get your Free SquadDeck account now.
                          </p>
                        </div>

                        <div class="mt-4">
                          <form
                            class="needs-validation"
                            novalidate
                            action="index.php"
                          >
                            <div class="mb-3">
                              <label for="useremail" class="form-label">
                                Email <span class="text-danger">*</span>
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="useremail"
                                placeholder="Enter email address"
                                required
                              />
                              <div class="invalid-feedback">
                                Please enter email
                              </div>
                            </div>

                            <div class="mb-3">
                              <label class="form-label" for="password-input">
                                Password
                              </label>
                              <div class="position-relative auth-pass-inputgroup">
                                <input
                                  type="password"
                                  class="form-control pe-5 password-input"
                                  onpaste="return false"
                                  placeholder="Enter password"
                                  id="password-input"
                                  aria-describedby="passwordInput"
                                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                  required
                                />
                                <button
                                  class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                  type="button"
                                  id="password-addon"
                                >
                                  <i class="ri-eye-fill align-middle"></i>
                                </button>
                                <div class="invalid-feedback">
                                  Please enter password
                                </div>
                              </div>
                            </div>
                            <div class="mb-3">
                              <label class="form-label" for="password-input">
                                Confirm Password
                              </label>
                              <div class="position-relative auth-pass-inputgroup">
                                <input
                                  type="password"
                                  class="form-control pe-5 password-input"
                                  onpaste="return false"
                                  placeholder="Enter password"
                                  id="password-input"
                                  aria-describedby="passwordInput"
                                  required
                                />
                                <button
                                  class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                  type="button"
                                  id="password-addon"
                                >
                                  <i class="ri-eye-fill align-middle"></i>
                                </button>
                                <div class="invalid-feedback">
                                  Please confirm your password
                                </div>
                              </div>
                            </div>

                            <div class="mt-4">
                              <Link
                                to="email-verification.php"
                                class="btn btn-success w-100"
                              >
                                Register
                              </Link>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end card --> */}
              </div>
              {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end auth page content --> */}

        {/* <!-- footer --> */}
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="text-center">
                  <p class="mb-0">
                    &copy;
                    <script>
                      document.write(new Date().getFullYear())
                    </script>{" "}
                    SquadDeck. Crafted with{" "}
                    <i class="mdi mdi-heart text-danger"></i> by Netmow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- end Footer --> */}
      </div>
      {/* <!-- end auth-page-wrapper --> */}
    </div>
  );
};

export default Register;
