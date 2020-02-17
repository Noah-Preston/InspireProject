import store from "../store.js"
import Background from "../models/background.js"


// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  getImage() {
    imgApi
      .get("")
      .then(res => {
        let bgData = new Background(res.data);
        store.commit("background", bgData)
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }





}

const imageService = new ImageService();
export default imageService;
