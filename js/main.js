const vm = new Vue({
    el : "#app",

    data: {
        welcomeMessage : "Our first vue app!",

        anotherMessage : "yay! You can haz vue!",

        targetURL : "http://vuejs.org",

        anchorOff: true,

        hazVue: true,

        deliciousFruit : [
            { name: "apple", flavour: "tasty!"},
            {name: "orange", flavour: "sour!"},
            {name: "pineapple", flavour: "tangy!"}
        ]
    },

    methods : {
        logFruit(e) {
            console.log(e.currentTarget);
        },

        changeText() {
            this.anotherMessage = "changed this from a function call";
        }
    }
});