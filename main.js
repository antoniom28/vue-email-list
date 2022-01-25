var app = new Vue(
    {
        el: "#root",
        data: {
            numeroMail : 10,
            mails : [],
            widthBar : 0,
        },
        methods: {
            move: function () {
                let elem = document.getElementById("myBar");
                console.log('sto caricando');
                if (this.widthBar >= 100) {
                    console.log('fermo');
                    return;
                } else {
                    this.widthBar += 100 / this.numeroMail;
                    elem.style.width = this.widthBar + "%";
                }
            },
        },
        created : function() {
            for(let i=0; i<this.numeroMail; i++){
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
                    //è come se ci fosse un settimeout di n ms a seconda degli ms della risposta
                    //e volevo testarla su qualcosa, e mi è venuta in mente la barra di caricamento
                    //es. 100 / this.numeroMail con 10 mail, carica 10% ogni mail caricata
                    this.move(); 
                    this.mails.push(risposta.data.response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
);