import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { Home } from "../Models/Home.js";



export function saveState() {
  console.log('saving');
  let carData = JSON.stringify(ProxyState.cars)
  localStorage.setItem('cars', carData)
}

export function loadState() {
  console.log('loading')
  let rawCars = localStorage.getItem('cars')
  if (rawCars) {
    let carData = JSON.parse(rawCars)
    console.log(carData);
    ProxyState.cars = carData.map(c => new Car(c))
  }
}

export function saveState2() {

  let homeData = JSON.stringify(ProxyState.homes)
  localStorage.setItem('homes', homeData)
}

export function loadState2() {

  let rawHomes = localStorage.getItem('homes')
  if (rawHomes) {
    let homeData = JSON.parse(rawHomes)

    ProxyState.homes = homeData.map(h => new Home(h))
  }
}