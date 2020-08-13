const Note = {
  props: ['id'],
  data: function () {
    return {
      note: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        id: ''
      }
    }
  },

  //点击联系人打开详细信息
  mounted: function () {
    db.collection('contacts').doc(this.id).get()
      .then(doc => {
        if (doc.exists) {
          this.note.email = doc.data().email
          this.note.firstName = doc.data().firstName
          this.note.lastName = doc.data().lastName
          this.note.phone = doc.data().phone
          this.note.address = doc.data().address
        } else {
          console.error('No contact found')
        }
      })
  },

  template: `
  <section class="row">
    <div class="col-6">
      <router-link class="text-secondary text-decoration-none" to="/">&lt; Contact List</router-link>
    </div>
    <div class="col-6 d-flex justify-content-end">
      <router-link class="btn btn-outline-secondary" :to="'/edit/' + id">Edit</router-link>
    </div>
    <div class="col-12">
      <p class="text-secondary text-left display-2">{{note.firstName }}\n{{ note.lastName }}</p>
      <hr>
      <h4>email</h4>
      <h2 class="display-5">{{ note.email }}</h2>
      <hr>
      <h4>Phone</h4>
      <h2 class="display-5">{{ note.phone }}</h2>
      <hr>
      <h4>Address</h4>
      <h2 class="display-5">{{ note.address }}</h2>
    </div>
  </section>
  `
}
