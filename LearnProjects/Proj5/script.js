Vue.createApp({
    data(){
        return{
            heroSelect : "",
            avengerSelect : [],
            myDynamic : "",
            myBond : [
                {text : "RDJ", value : 7, id : 1},
                {text : "Captain America", value : 10, id : 2},
                {text : "Thor", value : 100, id : 3},
            ]
        }
    }
}).mount("#vapp")