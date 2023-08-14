import React, { useState } from "react";
import mainLogo from "../../assets/img/main_logo.png";
import { Link } from "react-router-dom";
import "../../assets/css/app.css";
import DetailsInfo from "../../Components/RegisterInfo/DetailsInfo";
import InitialInfo from "../../Components/RegisterInfo/InitialInfo";
import EmailOtp from "./../../Components/RegisterInfo/EmailOtp";
import EmailDone from "../../Components/RegisterInfo/EmailDone";

const Register = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  const [userEmail, setUserEmail] = useState("");
  console.log(userInfo);
  return (
    <>
      {/* <!-- auth-page wrapper --> */}
      <div class="auth-page-wrapper auth-bg-cover d-flex justify-content-center align-items-center min-vh-100 ">
        <div class="bg-overlay"></div>
        {/* <!-- auth-page content --> */}
        <div class="auth-page-content overflow-hidden ">
          <div class="container">
            <div class="row mx-5">
              <div class="col-lg-12">
                <div class="card overflow-hidden m-5">
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
                              id="quotesCarouselIndicators"
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
                    {step === 1 && (
                      <InitialInfo
                        setUserInfo={setUserInfo}
                        userInfo={userInfo}
                        step={step}
                        setStep={setStep}
                        setUserEmail={setUserEmail}
                      />
                    )}
                    {step === 2 && (
                      <EmailOtp
                        userEmail={userEmail}
                        step={step}
                        setStep={setStep}
                      />
                    )}
                    {step === 3 && <EmailDone step={step} setStep={setStep} />}
                    {step === 4 && (
                      <DetailsInfo
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        step={step}
                        setStep={setStep}
                      />
                    )}
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
    </>
  );
};

export default Register;
