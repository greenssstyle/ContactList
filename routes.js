const routes = [
  { path: '/', name: 'notes', component: Notes },
  { path: '/note/:id', name: 'note', component: Note, props: true },
  { path: '/new', name: 'new', component: New },
  { path: '/edit/:id', name: 'edit', component: Edit, props: true }
]

const router = new VueRouter({
  routes: routes
})
