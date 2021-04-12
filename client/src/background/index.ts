import State from './state'
import Shelter from './shelter'
import { Messages, Views } from '../common/enums'
import { Message } from '/common'

class Background {
  private state: State
  private shelter: Shelter
  constructor(state: State, shelter: Shelter) {
    this.state = state
    this.shelter = shelter
  }
  public addListeners(): void {
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this))
  }
  public async handleMessage({ action, payload }: Message, _: chrome.runtime.MessageSender, sendResponse: (response?: any) => void): Promise<void> {
    const actions: {
      [key: string]: () => Promise<void>
    } = {
      [Messages.SET_VIEW]: async () => {
        const { view } = payload
        this.state.view = view as Views
        await this.state.save()
        sendResponse(this.state)
      }
      [Messages.GET_STATE]: async () => {
        sendResponse(this.state)
      },
      [Messages.ADOPT_CAT]: async () => {
        const breed = this.shelter.getRandomBreed()
        const cat = this.shelter.adopt(breed)
        this.state.addCat(cat)
        sendResponse(cat)
        await this.state.save()
      }
    }
    await actions[action]()
  }
  public static async Initialize(): Promise<void> {
    const state = await State.Initialize()
    const shelter = await Shelter.Initialize()

    const background = new this(state, shelter)
    background.addListeners()


    // @ts-ignore
    window.background = background
  }
}

Background.Initialize()
