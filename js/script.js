Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        mailList: [],
        mailRandom: "",
        pendingMail: 0
    },
    methods: {

        generaMail() {


            for (i = 0; i < 10; i++) {

                this.pendingMail++;

                axios.get(this.url).then((myResponse) => {
                    mailRandom = myResponse.data.response;
                    this.mailList.push(mailRandom);
                    this.pendingMail--;
                });
            }
        },
    }
});