<template>
  <div >
    <b-container class="bv-example-row">
      <b-row >
        <h1  class="hello" >{{ msg }}</h1>
        <p/>
        <h2><h1>{{ 'test1' | translate }}</h1></h2>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <select v-model="SelectedLanguage">
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm><b-btn v-b-popover.hover="'I am popover content!'" title="Popover Title">Hover Me</b-btn></b-col>
        <b-col sm>col-sm</b-col>
        <b-col sm>col-sm</b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'vuetest',
  data() {
    return {
      msg: 'This is the Main contents',
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
  font-size: 18px;
  background: #363636;
  color: #818181;
  }
</style>
