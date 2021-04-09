import Cat from './cat'
import { Storage } from './enums'

export default class State {
  private _cats: Cat[];
  constructor() {
    this._cats = []
  }
  public static async Initialize(): Promise<State> {
    console.log(chrome)
    const data = await new Promise(resolve => chrome.storage.sync.get(Storage.STATE, resolve))
    console.log(data)
    if(!data) return new this()
    return new this()
  }
}
