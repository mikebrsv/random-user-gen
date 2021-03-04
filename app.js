const app = Vue.createApp({
  template: `
    <img :class='gender' :src='picture' :alt='firstName + " " + lastName'>
    <h1>{{firstName}} {{lastName}}</h1>
    <h3>Email: {{email}}</h3>
    <button v-on:click='getUser()' :class='gender'>Get Random User</button>
  `,

  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },

  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const data = await res.json()
      const results = data.results[0]

      this.firstName = results.name.first
      this.lastName = results.name.last
      this.email = results.email
      this.gender = results.gender
      this.picture = results.picture.large
    }
  },
})

app.mount('#app')