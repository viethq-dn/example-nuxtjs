export default {
  data() {
    return {
      items: [
        {
          text: "Dashboard",
          to: { name: "index" }
        },
        {
          text: "Alert",
          active: true
        }
      ],
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
