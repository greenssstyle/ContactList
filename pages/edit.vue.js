const Edit = {
  props: ['id'],
  data: function () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    }
  },

  //修改联系人的实时信息
  mounted: function () {
    db.collection('contacts').doc(this.id).get()
      .then(doc => {
        if (doc.exists) {
          this.firstName = doc.data().firstName
          this.lastName = doc.data().lastName
          this.email = doc.data().email
          this.phone = doc.data().phone
          this.address = doc.data().address
        } else {
          console.error('No Contact found')
        }
      })
  },

  methods: {
    //修改联系人信息
    updateContact: function () {
      db.collection('contacts').doc(this.id).update({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        address: this.address
      }).then(() => router.push({ path: '/note/' + this.id }))
    },

    //删除联系人
    deleteContact: function () {
      db.collection('contacts').doc(this.id).delete()
        .then(() => router.push({ path: '/' }))
    }
  },
  template: `
  <section class="row">
    <div class="col-12 d-flex justify-content-end">
      <button class="btn btn-danger" @click="deleteContact">&times;</button>
    </div>
    <div class="col-12">
      <h1 class="display-4">Edit Contact</h1>
    </div>
    <div class="col-12">
      <form @submit.prevent="updateContact">
        <input type="text" class="form-control my-3" placeholder="firstName" v-model="firstName">
        <input type="text" class="form-control my-3" placeholder="lastName" v-model="lastName">
        <input type="text" class="form-control my-3" placeholder="email" v-model="email">
        <input type="text" class="form-control my-3" placeholder="phone" v-model="phone">
        <textarea class="form-control my-3" placeholder="address" v-model="address"></textarea>
        <button class="btn btn-primary mr-3">Update Contact</button>
        <router-link to="/">Cancel</router-link>
      </form> 
    </div>
  </section>
  `
}
