export const API_1 = {
    URL:"https://rickandmortyapi.com/api",

    DATOS: function (){
        return `${this.URL}/character`
    },

    ID: function (id){
        return `${this.URL}/character/${id}`
    },
};