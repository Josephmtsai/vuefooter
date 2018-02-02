<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2><h1>{{ 'test1' | translate }}</h1></h2>
    <select v-model="SelectedLanguage">
        <option value="en">EN</option>
        <option value="id">ID</option>
    </select>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'vuefooter',
  data() {
    return {
      msg: 'This is the contents',
    };
  },
  async created () {
    this.SelectedLanguage = 'en';
  },
  computed: {
    SelectedLanguage: {
      get () {
        return this.$store.state.selectedLanguage
      },
      set (value) {
        this.changeSelectedLanguage(value)
      }
    }
  },
  methods: {
    ...mapActions([
      'changeSelectedLanguage'
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  font-size: 12px;
  background: #363636;
  color: #818181;
  }
</style>
