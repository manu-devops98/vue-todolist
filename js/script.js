const app = new Vue({
    el: '#app',
    data: {
        note: '',
        class: null,
        lists: [
            {
                title: 'Spesa',
                check: 'fas fa-check',
                done: true
            },
            {
                title: 'Progetto',
                check: 'fas fa-times',
                done: false  
            },
            {
                title: 'Regali',
                check: 'fas fa-check',
                done: true
            },
            {
                title: 'Pulire',
                check: 'fas fa-times',
                done: false      
            },
            {
                title: 'Lavare Auto',
                check: 'fas fa-check',
                done: true
            }
        ]
    },
    methods: {
        deleteBox: function(index) {
            this.lists.splice(index,1);
        },
        newBox: function() {
            this.check = 'fas fa-times';
            this.done = false;
            if (this.note != '') {
                this.title = {
                    title: this.firstLetterUpper(this.note),
                    check: this.check,
                    done: this.done
                };
                this.lists.unshift(this.title);
                this.note = '';
            }
        },
        firstLetterUpper: function(word) {
            let string = word;
            let stringTwo = string.charAt(0).toUpperCase() + string.slice(1);
            return stringTwo;
        },
        changeDone: function(index) {
            this.lists[index].done = !this.lists[index].done;
            return
        }
        
    }
  });

