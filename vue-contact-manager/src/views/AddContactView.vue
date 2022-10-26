<template>
  <div className="container">
    <div
      className="card bg-light mb-3 me-auto ms-auto "
      :style="{ maxWidth: '1140px' }"
    >
      <div className="card-header">
        <b>Add Contact</b>
      </div>
      <div className="card-body">
        <form @submit="onSubmit">
          <div className="form-group mt-2">
            <label htmlFor="name" className="form-label"> Name </label>
            <input
              className="form-control form-control-lg mt-1"
              type="text"
              id="name"
              v-model="name"
              placeholder="Enter your name..."
              required
            />
            onChange={(e) => setName(e.target.value)}
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email">Email</label>
            <input
              className="form-control form-control-lg mt-1"
              type="email"
              placeholder="Enter your email..."
              required
              name="email"
              v-model="email"
              id="email"
            />
            onChange={(e) => setEmail(e.target.value)}
          </div>
          <div className="form-group mt-2">
            <label htmlFor="phone">Phone</label>
            <input
              className="form-control form-control-lg mt-1"
              type="text"
              placeholder="Enter your phone..."
              required
              name="phone"
              v-model="phone"
            />
            onChange={(e) => setPhone(e.target.value)}
          </div>
          <input type="submit" className="btn btn-block btn-dark w-100 mt-3" />
          onClick={(e) => handleSubmit(e)}
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddContactView",
  data() {
    return {
      id: "",
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.name) {
        alert("Please add a contact");
        return;
      }

      const newContact = {
        id: Math.floor(Math.random() * 100000),
        name: this.name,
        email: this.email,
        phone: this.phone,
      };

      this.$emit(("add-contact", newContact));

      this.id = "";
      this.name = "";
      this.email = "";
      this.phone = "";
    },
  },
  //   props: {
  //     contactIDs: Array,
  //   },
};
</script>

<style></style>
