const app = new Vue ({
    el: '#root',
    data: {
        emails: [],
        API: 'https://flynn.boolean.careers/exercises/api/random/mail',
    },

    computed: {
        dataPrintOk() {
            return this.emails.length > 9 ? true : false;
        },
    },


    created() {
        this.getMails();
    },

    methods: {
        getMails() {
            for (let i = 0; i < 10; i++) {
                axios.get(this.API)
                .then ( response => {
                    response.data.response;
                    this.emails.push(response.data.response)
                })
            }
        },
    }
})


let randcolor = `rgb(${Math.floor(Math.random()) * 255}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;


document.querySelector("body").style.color = randcolor;
  