const { createApp } = Vue

  createApp({
    data() {
      return {
        magica: 'Daje Roma!',
        immagine: "https://clipground.com/images/as-roma-logo-14.jpg"
      }
    }
  }).mount('#app')