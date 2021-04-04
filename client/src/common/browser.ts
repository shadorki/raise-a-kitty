export class Browser {
  static Identity = {
    /**
     * Retrieves email address and obfuscated gaia id of the user signed into a profile. This API is different from identity.getAccounts in two ways. The information returned is available offline, and it only applies to the primary account for the profile.
      @since — Chrome 37.
     */
    async GetProfileUserInfo(): Promise<chrome.identity.UserInfo> {
      return new Promise(resolve => {
        chrome.identity.getProfileUserInfo(data => {
          resolve(data)
        })
      })
    }
  }
}
