import Breed from "./breed";
import Cat from "./cat";
import { Breeds } from './enums'

export default class Shelter {
  private _breeds: Breed[]
  constructor(breeds: Breed[]) {
    this._breeds = breeds
  }
  public static async Initialize(): Promise<Shelter> {
    const breeds: Breed[] = []
    const { width, height }: HTMLImageElement = await new Promise((resolve, reject) => {
      const img = new Image()
      img.src = chrome.runtime.getURL('../assets/images/cats.png')
      img.onload = () => resolve(img)
      img.onerror = reject
    })
    const kWidth = width / 8
    const kHeight = height / 27
    // 27 sprites tall, but skip the first one
      const breedList = Object.values(Breeds)
      for (let y = kHeight, i = 0; y < height; y += kHeight, i++) {
        const coords = []
        for (let x = 0; x <= width; x += kWidth) {
          coords.push([-x, -y])
        }
        breeds.push(new Breed(breedList[i], coords))
      }
    return new this(breeds)
  }
  public getRandomBreed(): Breed {
    const breeds = [...this._breeds]
    for(let i = 0; i < breeds.length; i++) {
      const r = Math.floor(Math.random() * breeds.length)
      const t = breeds[i]
      breeds[i] = breeds[r]
      breeds[r] = t
    }
    return breeds.pop()
  }
  public adopt(breed: Breed): Cat {
    return new Cat(breed)
  }
}
