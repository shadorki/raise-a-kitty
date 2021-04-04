import { UserProfile } from '../background/user'

export class Api {
  private static BaseUrl = process.env.API_URL
  private static Url(path: string): string {
    return `${this.BaseUrl}${path}`
  }
  static async Authenticate(profile: UserProfile) {
    const response = await fetch(this.Url('/auth'), {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
  }
}
