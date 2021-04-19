import Cat from './cat'
import { Storage } from './enums'
import { DeserializedState } from '../common'
import { Views } from '../common/enums/views';

export default class State {
  public view: Views
  private _cats: Cat[];
  constructor() {
    this.view = Views.HOME
    this._cats = []
  }
  public setView(view: Views): void {
    this.view = view
  }
  public addCat(cat: Cat): void {
    this._cats.push(cat)
  }
  public async save(): Promise<void> {
    console.log(this)
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
    if (!data[Storage.STATE]) return new this()
    return new this().initializeFromSerialized(data[Storage.STATE])
  }
  public initializeFromSerialized(state: DeserializedState): State {
    const { _cats, view } = state
    const cats = _cats.map(c => Cat.InitializeFromSerialized(c))
    this._cats = cats
    this.view = view
    return this
  }
}
