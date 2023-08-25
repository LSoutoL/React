import { API_1 } from "../constants/API";

class Servicio {

    async traerGatos (){
        const response = await fetch(API_1.DATOS());
        return response.json();
    }

    async traerPorId (id){
        const response = await fetch(API_1.ID(id));
        return response.json();
    }

}

export default new Servicio();