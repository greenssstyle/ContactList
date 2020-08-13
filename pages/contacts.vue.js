const Notes = {
  data: function () {
    return {
      notes: [],
      searchNotes: [],
      search:'',
      includesID: []
    }
  },

  //打印联系人到主页
  mounted: function () {
    db.collection('contacts')
      .orderBy('lastName', 'asc')
      .onSnapshot(snapshot => {
        const data = []
        snapshot.forEach(doc => data.push({
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          email: doc.data().email,
          phone: doc.data().phone,
          address: doc.data().address,
          id: doc.id
        }))

        this.notes = data

      })
  },

  //搜索
  computed: {
      searchName(){
        var index = []
        var ifIncludes = false
        var indexID = []
        for(var i = 0; i < this.notes.length; i++){
          index[i] = this.notes[i].firstName.toLowerCase() + " " + this.notes[i].lastName.toLowerCase()
        }

        for(var i = 0; i < index.length; i++){
          if(index[i].includes(this.search.toLowerCase())){
            indexID[i] = i
            ifIncludes = true
          }
        }

        if(this.search == ""){
          ifIncludes = false
          indexID = []
        }

        this.includesID = indexID.filter(function (index) {
          return index != null;
        });

        db.collection('contacts')
          .orderBy('lastName', 'asc')
          .onSnapshot(snapshot => {
            const data = []
            snapshot.forEach(doc => data.push({
              firstName: doc.data().firstName,
              lastName: doc.data().lastName,
              email: doc.data().email,
              phone: doc.data().phone,
              address: doc.data().address,
              id: doc.id
            }))

            this.searchNotes = []
            for (let i = 0; i < this.includesID.length; i++) {
              this.searchNotes[i] = data[this.includesID[i]]
              //console.log(this.searchNotes)
            }

          })
        
        if(ifIncludes){
          return false;
        }else{
          return true;
        }
      },

  },

  template: `
  <section class="row">
    <div class="col-12 d-flex justify-content-end">
      <router-link class="btn btn-outline-secondary" to="/new">+</router-link>
    </div>
    <div class="col-12">
      <h1 class="display-4">Contact Book</h1>
    </div>
    <div class="col-12">
      <input type="text" class="form-control my-3" placeholder="Search name.." v-model="search"/>
      <hr>
    </div>
    <div class="col-12">
      <ul class="list-group">
        <div v-if="searchName">
          <li class="list-group-item" v-for="note in notes">
            <router-link class="text-secondary text-decoration-none"  :to="'/note/' + note.id">{{ note.firstName }} {{note.lastName}}</router-link>
          </li>
        </div>
        <div v-else>
          <li class="list-group-item" v-for="note in searchNotes">
            <router-link class="text-secondary text-decoration-none"  :to="'/note/' + note.id">{{ note.firstName }} {{note.lastName}}</router-link>
          </li>
        </div>
      </ul>
    </div>
  </section>
  `
}
