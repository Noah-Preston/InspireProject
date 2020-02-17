import ImageService from "../services/image-service.js";
import store from "../store.js"

function drawBg() {
  let background = store.State.background;
  document.querySelector("body").style.backgroundImage = `url(${background.url})`
}

export default class ImageController {
  constructor() {
    store.subscribe("background", drawBg)
    this.getImage()
  }

  getImage() {
    ImageService.getImage()
  }






}
