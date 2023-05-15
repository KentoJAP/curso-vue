new Vue({
    el:'#desafio',
    data: {
        nome: 'Juliana',
        idade: 25,
        imagem: "https://sm.ign.com/ign_br/screenshot/default/29-1_97wq.jpg"
    },
    methods: {
        triploIdade(){
            return this.idade * 3
        }
    }
})