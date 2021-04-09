import Breed from "./breed";

export default class Shelter {
  private _breeds: Breed[]
  constructor(breeds: Breed[]) {
    this._breeds = breeds
  }
  public static async initialize() {
    const { width, height }: HTMLImageElement = await new Promise((resolve, reject) => {
      const img = new Image()
      img.src = chrome.runtime.getURL('../assets/cats.png')
      img.onload = () => resolve(img)
      img.onerror = reject
    })
    const kWidth = width / 8
    const kHeight = height / 27
    console.log(kWidth, kHeight)
    // 27 sprites tall, but skip the first one
    for (let y = kHeight; y < height; y += kHeight) {
      for (let x = 0; x <= width; x += kWidth) {
        console.log([x, y])
      }
    }
    return new this([])
  }
}
