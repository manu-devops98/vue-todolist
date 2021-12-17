const app = new Vue({
    el: '#app',
    data: {
        note: '',
        lists: [
            {
                title: 'Spesa',
                check: 'fas fa-check green',
            },
            {
                title: 'Progetto',
                check: 'fas fa-times red',  
            },
            {
                title: 'Regali',
                check: 'fas fa-check green',
            },
            {
                title: 'Pulire',
                check: 'fas fa-times red',     
            },
            {
                title: 'Lavare Auto',
                check: 'fas fa-check green',
            }
        ]
    },
    methods: {
        deleteBox: function(index) {
            this.lists.splice(index,1);
        },
        newBox: function() {
            this.check = 'fas fa-times red';
            if (this.note != '') {
                this.title = {
                    title: this.firstLetterUpper(this.note),
                    check: this.check
                };
                this.lists.unshift(this.title);
                this.note = '';
            }
        },
        firstLetterUpper: function(word) {
            let string = word;
            let stringTwo = string.charAt(0).toUpperCase() + string.slice(1);
            return stringTwo;
        }
    }
  });

