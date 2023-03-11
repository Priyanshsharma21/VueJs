const app = Vue.createApp({
    data() {
      return {
        formData: {
          name: '',
          email: '',
          password: '',
          textarea: '',
          selectedOption: '',
          selectedRadio: ''
        },
        options: [
          { text: 'Option 1', value: 'opt1' },
          { text: 'Option 2', value: 'opt2' },
          { text: 'Option 3', value: 'opt3' },
        ],
        radioOptions: [
          { text: 'Option 1', value: 'opt1' },
          { text: 'Option 2', value: 'opt2' },
          { text: 'Option 3', value: 'opt3' },
        ],
      }
    },
    methods: {
      submitForm() {
        console.log(this.formData)
      }
    }
  })
  app.mount("#vapp")