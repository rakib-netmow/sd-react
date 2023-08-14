import React, { useState } from "react";

const EmailOtp = ({ step, setStep, userEmail }) => {
  const [code, setCode] = useState("");
  // const moveToNext = (e, t) => {
  //   t = t.which || t.keyCode;

  //   if (1 === getInputElement(e).value.length) {
  //     if (4 !== e) {
  //       getInputElement(e + 1).focus();
  //     } else {
  //       getInputElement(e).blur();
  //       console.log("submit code");
  //     }
  //   }

  //   if (8 === t && 1 !== e) {
  //     getInputElement(e - 1).focus();
  //   }
  // };

  return (
    <>
      <div class="col-lg-6">
        <div class="p-lg-5 p-4">
          <div class="mb-4">
            <div class="avatar-lg mx-auto">
              <div class="avatar-title bg-light text-primary display-5 rounded-circle">
                <i class="ri-mail-line"></i>
              </div>
            </div>
          </div>
          <div class="text-muted text-center mx-lg-3">
            <h4 class="">Verify Your Email</h4>
            <p>
              Please enter the 4 digit code sent to{" "}
              <span class="fw-semibold">example@abc.com</span>
            </p>
          </div>

          <div class="mt-4 ">
            <form autocomplete="off">
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col-2">
                  <div class="mb-3">
                    <label for="digit1-input" class="visually-hidden">
                      Digit 1
                    </label>
                    <input
                      onChange={(e) => setCode(code + e.target.value)}
                      type="text"
                      // class="form-control form-control-lg bg-light border-light text-center"
                      // onKeyUp="moveToNext(1, event)"
                      maxLength="1"
                      id="digit1-input"
                    />
                  </div>
                </div>

                <div class="col-2">
                  <div class="mb-3">
                    <label for="digit2-input" class="visually-hidden">
                      Digit 2
                    </label>
                    <input
                      onChange={(e) => setCode(code + e.target.value)}
                      type="text"
                      // class="form-control form-control-lg bg-light border-light text-center"
                      // onkeyup="moveToNext(2, event)"
                      maxLength="1"
                      id="digit2-input"
                    />
                  </div>
                </div>
                <div class="col-2">
                  <div class="mb-3">
                    <label for="digit3-input" class="visually-hidden">
                      Digit 3
                    </label>
                    <input
                      onChange={(e) => setCode(code + e.target.value)}
                      type="text"
                      // class="form-control form-control-lg bg-light border-light text-center"
                      // onkeyup={moveToNext(3,event)}
                      maxLength="1"
                      id="digit3-input"
                    />
                  </div>
                </div>

                <div class="col-2">
                  <div class="mb-3">
                    <label for="digit4-input" class="visually-hidden">
                      Digit 4
                    </label>
                    <input
                      onChange={(e) => setCode(code + e.target.value)}
                      type="text"
                      // class="form-control form-control-lg bg-light border-light text-center"
                      // onkeyup="moveToNext(4, event)"
                      maxLength="1"
                      id="digit4-input"
                    />
                  </div>
                </div>
                {/* <div class="col-2">
                  <div class="mb-3">
                    <label for="digit5-input" class="visually-hidden">
                      Digit 4
                    </label>
                    <input
                      onChange={(e) => setCode(code + e.target.value)}
                      type="text"
                      class="form-control form-control-lg bg-light border-light text-center"
                      onkeyup="moveToNext(4, event)"
                      maxLength="1"
                      id="digit5-input"
                    />
                  </div>
                </div>
                <div class="col-2">
                  <div class="mb-3">
                    <label for="digit6-input" class="visually-hidden">
                      Digit 4
                    </label>
                    <input
                      onChange={(e) => setCode(code + e.target.value)}
                      type="text"
                      class="form-control form-control-lg bg-light border-light text-center"
                      onkeyup="moveToNext(4, event)"
                      maxLength="1"
                      id="digit6-input"
                    />
                  </div>
                </div> */}
              </div>

              <div class="mt-4">
                <button
                  onClick={() => setStep(step + 1)}
                  class="btn btn-success w-100"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>

          <div class="mt-4 text-center">
            <p class="mb-0">
              Didn't receive a code ?{" "}
              <a
                href="auth-pass-reset-cover.html"
                class="fw-semibold text-primary text-decoration-underline"
              >
                Resend
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailOtp;
