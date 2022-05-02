const services = []
const prices = []
const washCar = document.getElementById('wash-car')
const mowLawn = document.getElementById('mow-lawn')
const pullWeeds = document.getElementById('pull-weeds')
const send = document.getElementById('send')
const totalContainer = document.getElementById('total')
const taskContainer = document.getElementById("task-list")
const removeBtn = document.getElementById('remove')
const totalAmountEl = document.getElementById("total-calc")
const addnotes = document.getElementById('notes')
const wash = document.getElementById("wash")
const mow = document.getElementById('mow')
const pull = document.getElementById('pull')

let isWashCarClicked = true
let isMowLawnClicked = true
let isPullWeedsClicked = true

// calculate total amounts and displays total amount and notes.
function calcTotalAmount() {
    totalAmountEl.innerHTML = ""
    addnotes.innerHTML = ""
      let sum = 0
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i]
    totalAmountEl.innerHTML = `$${sum}`
    addnotes.innerHTML = `We accept cash, credit card, or PayPal`
}} 
// items to be added on event
washCar.addEventListener('click', function() {
    if (isWashCarClicked) {
    isWashCarClicked = false
    pushToArr('Wash Car', 10)
    calcTotalAmount()
        wash.innerHTML = 
                `<p>  Wash Car 
                <button id="remove" onclick="removeWash()">Remove</button> 
                <span>$</span>10</p>` 
    } else {
        alert("you already have this on your list")
    }
})

mowLawn.addEventListener('click', function() {
    if (isMowLawnClicked) {
    isMowLawnClicked = false
   pushToArr('Mow Lawn', 20)
   calcTotalAmount()
        mow.innerHTML = 
            `<p>  Mow Lawn 
            <button id="remove" onclick="removeMow()">Remove</button> 
            <span>$</span>20</p>` 
            addnotes.innerHTML = `We accept cash, credit card, or PayPal`
    } else {
        alert("you already have this on your list")
    }
})

pullWeeds.addEventListener('click', function() {
    if (isPullWeedsClicked) {
        isPullWeedsClicked = false
    pushToArr('Pull Weeds', 30)
    calcTotalAmount()
        pull.innerHTML = 
            `<p>  Pull Weeds 
            <button id="remove" onclick="removePull()">Remove</button> 
            <span>$</span>30</p>` 
    } else {
        alert("you already have this on your list")
    }
})

// push items to arrays services and prices
function pushToArr(item, price) {
    services.push(item)
    prices.push(price)
}

// remove item by id
function removeWash() {
    wash.innerHTML = ""
    let index1 = prices.indexOf(10);
    prices.splice(index1, 1);
    let index2 = services.indexOf('Wash Car');
    services.splice(index2, 1);
    calcTotalAmount()
    isWashCarClicked = true
}

function removeMow() {
    mow.innerHTML = ""
    let index1 = prices.indexOf(20);
    prices.splice(index1, 1);
    let index2 = services.indexOf('Mow Lawn');
    services.splice(index2, 1);
    calcTotalAmount()
   isMowLawnClicked = true
}

function removePull() {
    pull.innerHTML = ""
    let index1 = prices.indexOf(30);
    prices.splice(index1, 1);
    let index2 = services.indexOf('Pull Weeds');
    services.splice(index2, 1);
    calcTotalAmount()
    isPullWeedsClicked = true
}

// send invoice/ reset btn
send.addEventListener('click', function (){
    alert('Thank you for your order, the invoice is being proccessed!')
    services.splice(0, 3)
    prices.splice(0, 3)
    wash.innerHTML = ""
    mow.innerHTML = ""
    pull.innerHTML = ""
    totalAmount = 0
    totalAmountEl.innerHTML = totalAmount
    isWashCarClicked = true
    isMowLawnClicked = true
    isPullWeedsClicked = true
    if (totalAmount === 0) {
        totalAmountEl.innerHTML = " "
        addnotes.innerHTML = " "
    }

})
