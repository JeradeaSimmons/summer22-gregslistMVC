import { ProxyState } from "../AppState.js";
import { homeService } from "../Services/HomeService.js";
import { loadState2, saveState2 } from "../Utils/LocalStorage.js";




function _drawHouses() {
  // GET THE HOUSE TEMPLATE
  let template = ''
  let homes = ProxyState.homes
  homes.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}



export class HousesController {



  viewHouses() {
    _drawHouses()

  }


  createHome() {


    window.event.preventDefault()
    let form = window.event.target


    let newHome = {
      sqfoot: form.sqfoot.value,
      year: form.year.value,
      price: form.price.value,
      img: form.img.value,
      description: form.description.value,
    }

    homeService.createHome(newHome)
    form.reset()
  }

  deleteHome(id) {

    homeService.deleteHome(id)
  }



}