import React, { useState } from "react";
import { Link } from "react-router-dom";

const DetailsInfo = ({ userInfo, setUserInfo }) => {
  const [organizationName, setOrganizationName] = useState("");
  const [subDomain, setSubDomain] = useState("");
  const [selectSports, setSelectSports] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleSportsCategoryChange = (e) => {
    setSelectSports(e.target.value);
  };
  const handleLocationCategoryChange = (e) => {
    setLocation(e.target.value);
  };

  const handleUserAllDataToRegister = () => {
    setUserInfo({
      ...userInfo,
      organizationName,
      subDomain,
      phone,
      selectSports,
      location,
    });
  };

  console.log("Updated userInfo:",userInfo );

  return (
    <>
      <div class="col-lg-6 ">
        <div class="m-4">
          <div>
            <h5 class="text-primary">Enter your necessary information</h5>
            <p class="text-danger text-bold">All Fields Are Required</p>
          </div>

          <div class="mt-3">
            <form class="needs-validation">
              <div class="mb-3">
                <label for="username" class="form-label">
                  Organisation name <span class="text-danger">*</span>
                </label>
                <input
                  onChange={(e) => setOrganizationName(e.target.value)}
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter organisation name"
                  required
                />
                <div class="invalid-feedback">
                  Organisation name is required
                </div>
              </div>
              <div class="mb-3">
                <label for="subdomain" class="form-label">
                  Subdomain name (part of URL, cannot be changed){" "}
                  <span class="text-danger">*</span>
                </label>
                <input
                  onChange={(e) => setSubDomain(e.target.value)}
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter subdomain"
                  required
                />
                <div class="invalid-feedback">Sub domain is required</div>
              </div>

              <div class="mb-3">
                <label htmlFor="category" class="form-label">
                  Select Sports <span class="text-danger">*</span>
                </label>
                <select
                  name="category"
                  id="category"
                  class="form-select"
                  required
                  onChange={handleSportsCategoryChange}
                >
                  <option defaultValue>Basketball</option>
                  <option>Cricket</option>
                  <option>Football</option>
                  <option>Rugby</option>
                  <option>Boxing</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">
                  Work Phone <span class="text-danger">*</span>
                </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Enter work phone"
                  required
                />
                <div class="invalid-feedback">Please enter work phone</div>
              </div>

              <div class="mb-3">
                <label for="location" class="form-label">
                  Location <span class="text-danger">*</span>
                </label>
                <select
                  name="location"
                  id="location"
                  class="form-select"
                  required
                  onChange={handleLocationCategoryChange}
                >
                  <option defaultValue>Australia</option>
                  <option>Bangladesh</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div class="mt-4">
                <Link
                  onClick={handleUserAllDataToRegister}
                  to="/dashboard"
                  class="btn btn-success w-100"
                >
                  Submit
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsInfo;
