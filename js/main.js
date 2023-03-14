const { createApp } = Vue

  createApp({
    data() {
      return {
        magica: 'Daje',
        titolo : "Roma!",
        immagine: "https://clipground.com/images/as-roma-logo-14.jpg",
        giallo: "yellow",
        rosso: "red",
        testo:"big_text"
      }
    }
  }).mount('#app')