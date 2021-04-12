import { Messages } from "./enums"

export class Message {
  public action: Messages
  public payload: any
  constructor(action: Messages, payload?: any) {
    this.action = action
    this.payload = payload || null
  }
  send(): Promise<any> {
    console.log(this)
    return new Promise(resolve => chrome.runtime.sendMessage(this, resolve))
  }
}
