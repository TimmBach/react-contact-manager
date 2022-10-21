import React from "react";

const AddContact = () => {
  return (
    <>
      <div class="container">
        <div
          class="card bg-light mb-3 me-auto ms-auto "
          style={{ maxWidth: "1140px" }}
        >
          <div class="card-header">
            <b>Add Contact</b>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  class="form-control form-control-lg mt-1"
                  type="text"
                  placeholder="Enter your name..."
                  name="name"
                  value=""
                />
              </div>
              <div class="form-group mt-2">
                <label for="email">Email</label>
                <input
                  class="form-control form-control-lg mt-1"
                  type="email"
                  placeholder="Enter your email..."
                  name="email"
                  value=""
                />
              </div>
              <div class="form-group mt-2">
                <label for="phone">Phone</label>
                <input
                  class="form-control form-control-lg mt-1"
                  type="text"
                  placeholder="Enter your phone..."
                  name="phone"
                  value=""
                />
              </div>
              <input type="submit" class="btn btn-block btn-dark w-100 mt-3" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContact;
