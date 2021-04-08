import { Breeds } from "./enums";

export default class Breed {
  public breedType: Breeds
  public imageCoords: number[]
  constructor(breedType: Breeds, imageCoords: number[]) {
    this.breedType = breedType
    this.imageCoords = imageCoords
  }
}
