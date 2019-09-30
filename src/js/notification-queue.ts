import { Notification } from './notification'

export class NotificationQueue {
  static notifications: Notification[] = []

  public static add(title: string, message: string) {
    let notification = new Notification(title, message)
    this.notifications.push(notification)
    let index = this.notifications.indexOf(notification)
    let heigth = this.notifications.slice(0, index).reduce((sum, current) => {
      return sum + current.height
    }, 0)
    notification.setStyle(heigth + index * 5)

    setTimeout(() => {
      this.notifications.shift()
      this.notifications.forEach(notification => {
        let index = this.notifications.indexOf(notification)
        let heigth = this.notifications.slice(0, index).reduce((sum, current) => {
          return sum + current.height
        }, 0)
        notification.setStyle(heigth + index * 5)
      })
      notification.hideBox()
    }, 5000)
  }
}
