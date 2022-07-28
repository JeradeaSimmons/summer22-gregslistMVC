import { ProxyState } from "../AppState.js";
import { Home } from "../Models/Home.js";


class HomeService {

    createHome(newHomes) {

        ProxyState.homes = [...ProxyState.homes, new Home(newHomes)]

    }


    deleteHome(id) {

        ProxyState.homes = ProxyState.homes.filter(h => h.id != id)
    }
}




export const homeService = new HomeService()