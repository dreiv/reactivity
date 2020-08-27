class Dep {
  constructor() {
    this.subscribers = []
  }

  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target)
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub())
  }
}
const dep = new Dep()

let price = 5
let quantity = 2
let total = 0
let target = null

function watcher(myFunc) {
  target = myFunc
  dep.depend()
  target()
  target = null
}

watcher(() => {
  total = price * quantity
})

console.log(`total is ${total}`)

price = 20
dep.notify()

console.log(`total is ${total}`)

let data = {
  price: 5,
  quantity: 2
}
let internalValue = data.price

Object.keys(data).forEach(key => {
  let internalValue = data[key]

  Object.defineProperty(data, key, {
    get() {
      console.log(`Getting ${key}: ${internalValue}`)

      return internalValue
    },
    set(newVal) {
      console.log(`Setting ${key}: ${newVal}`)
      internalValue = newVal
    }
  })
})

total = data.price * data.quantity
console.log(total)
data.price = 20
console.log(total)
