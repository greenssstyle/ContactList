const New = {
  data: function () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    }
  },

  //添加联系人
  methods: {
    addContact: function () {
      db.collection('contacts').add({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        address: this.address
      }).then(doc => router.push({ path: '/note/' + doc.id }))
    }
  },
  template: `
  <section class="row">
    <div class="col-12">
      <h1 class="display-4">New Note</h1>
    </div>
    <div class="col-12">
      <form @submit.prevent="addContact">
        <input type="text" class="form-control my-3" placeholder="firstName" v-model="firstName">
        <input type="text" class="form-control my-3" placeholder="lastName" v-model="lastName">
        <input type="text" class="form-control my-3" placeholder="email" v-model="email">
        <input type="text" class="form-control my-3" placeholder="phone" v-model="phone">
        <textarea class="form-control my-3" placeholder="address" v-model="address"></textarea>
        <button class="btn btn-primary mr-3">Add Contact</button>
        <router-link to="/">Cancel</router-link>
      </form> 
    </div>
  </section>
  `
}
