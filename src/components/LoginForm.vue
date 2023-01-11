<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  emits: ['formSubmitted'],
  methods: {
    onSubmit() {
      if (this.name.length) {
        this.$emit('formSubmitted', { name: this.name })
      } else {
        throw new Error('Empty value')
      }
    }
  }
}
</script>
