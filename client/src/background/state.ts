import Cat from './cat'
import { Storage } from './enums'


interface DeserializedState {
  _cats: []
}

export default class State {
  private _cats: Cat[];
  constructor() {
    this._cats = []
  }
  public async save(): Promise<void> {
    return new Promise((resolve, reject) => chrome.storage.sync.set({
      [Storage.STATE]: this
    }, () => {
      if (chrome.runtime.lastError) reject(chrome.runtime.lastError)
      resolve()
    }))
  }
  public static async Initialize(): Promise<State> {
    const data: {
      [key: string]: DeserializedState
    } = await new Promise(resolve => chrome.storage.sync.get(Storage.STATE, resolve))
    console.log(data[Storage.STATE])
    if(!data[Storage.STATE]) return new this()
    return this.InitializeFromSerialized(data[Storage.STATE])
  }
  public static InitializeFromSerialized(state: DeserializedState): State {
    console.log(state)
    return new this()
  }
}
