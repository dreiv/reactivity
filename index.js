let price = 5
let quantity = 2
let total = 0
let target = null;

target = () => {
  total = price * quantity
}

record()
target()
replay()

console.log(`total is ${total}`)

price = 20

console.log(`total is ${total}`)
