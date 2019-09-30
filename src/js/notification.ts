export class Notification {
  private notificationMessage: string
  private notificationTitle: string
  private notification: HTMLDivElement

  constructor(notificationTitle: string, notificationMessage: string) {
    this.notificationMessage = notificationMessage
    this.notificationTitle = notificationTitle

    this.notification = document.createElement('div')
    this.notification.classList.add('notification-box')

    let wrapper = document.createElement('div')
    wrapper.classList.add('wrap-box')

    let title = document.createElement('div')
    title.classList.add('title')
    title.innerText = this.notificationTitle

    let message = document.createElement('div')
    message.classList.add('message')
    message.innerText = this.notificationMessage

    wrapper.appendChild(message)

    this.notification.appendChild(title)
    this.notification.appendChild(wrapper)

    this.addBox()
  }

  get height() {
    return this.notification.clientHeight
  }

  public hideBox() {
    this.notification.classList.remove('show-box')
    setTimeout(() => {
      if (this.notification && document.body.contains(this.notification)) {
        document.body.removeChild(this.notification)
      }
    }, 1000)
  }

  private addBox() {
    document.body.append(this.notification)
    this.notification.classList.add('show-box')
    setTimeout(() => {
      this.hideBox()
    }, 5000)
  }

  public setStyle(height: number) {
    this.notification.style.transform = 'translateY(calc(0px - ' + height + 'px))'
  }
}
