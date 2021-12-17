const app = new Vue({
    el: '#app',
    data: {
        lists: [
            {
                title: 'Spesa',
                check: 'fas fa-times red'
            },
            {
                title: 'Progetto',
                check: 'fas fa-check green'
            },
            {
                title: 'Regali',
                check: 'fas fa-check green'
            },
            {
                title: 'Chiamare Agenzia',
                check: 'fas fa-times red'
            },
            {
                title: 'Lavare Auto',
                check: 'fas fa-check green'
            }
        ]
    }
  })