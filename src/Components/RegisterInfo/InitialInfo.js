import React, { useState } from "react";

const InitialInfo = ({ setStep, step, setUserInfo, userInfo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // console.log(email, password, confirmPassword);

  // const data = { email, password, confirmPassword };

  const handleStepsAndData = () => {
    setUserInfo({
      ...userInfo,
      email,
      password,
      confirm_password: confirmPassword,
    });
    setStep(step + 1);
  };

  return (
    <>
      <div class="col-lg-6">
        <div class="p-lg-5 p-4">
          <div>
            <h5 class="text-primary">Register Account</h5>
            <p class="text-muted">Get your Free SquadDeck account now.</p>
          </div>

          <div class="mt-4">
            <form class="needs-validation" novalidate action="index.php">
              <div class="mb-3">
                <label for="useremail" class="form-label">
                  Email <span class="text-danger">*</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  class="form-control"
                  placeholder="Enter email address"
                  required
                />
                <div class="invalid-feedback">Please enter email</div>
              </div>

              <div class="mb-3">
                <label class="form-label" for="password-input">
                  Password
                </label>
                <div class="position-relative auth-pass-inputgroup">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    class="form-control pe-5 password-input"
                    onpaste="return false"
                    placeholder="Enter password"
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
                  <div class="invalid-feedback">Please enter password</div>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="password-input">
                  Confirm Password
                </label>
                <div class="position-relative auth-pass-inputgroup">
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                <button
                  onClick={handleStepsAndData}
                  class="btn btn-success w-100"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialInfo;
