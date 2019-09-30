import { LoremIpsum } from 'lorem-ipsum'
import { NotificationQueue } from './notification-queue'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

function add() {
  NotificationQueue.add(lorem.generateWords(2), lorem.generateWords(10))
}

;(function loop() {
  var rand = Math.round(Math.random() * (6000 - 500)) + 500
  setTimeout(function() {
    add()
    loop()
  }, rand)
})()
