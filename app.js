
let currentTool = 'teeth'
let amountEarned = 0
const tools = ['teeth', 'Rusty Scissors', 'Push Lawnmower', 'Fancy Lawnmower', 'Starving Students'];
let startDay = new Date().getDate()
const checkDay = () => {
    if (currentTool == tools[1] || currentTool == tools[0]) {
        const currentDay = new Date().getDate() + 1
        if (currentDay - startDay > 0) {
            let newAmountEarned = 0
            if (currentTool == tools[4]) {
                newAmountEarned = 500
            } else if (currentTool == tools[3]) {
                newAmountEarned = 250
            } else if (currentTool == tools[2]) {
                newAmountEarned = 25
            } else if (currentTool == tools[1]) { //if I add a new tool, add another IF statement
                newAmountEarned = 5
            } else {
                newAmountEarned = 1
            }
            amountEarned += newAmountEarned
            startDay = currentDay
            alert(`You earned $${newAmountEarned}. You now have $${amountEarned}!`)
            if (amountEarned >= 5) {
                const yes = prompt(`You have earned $${amountEarned} you can now purchase Rusty Scissors! Would you like to purchase them?`)
                if (yes) {
                    buyRustyScissors()
                }
            }
        }
    }
}
setInterval(() => {
    checkDay()

}, 8.64e+7)

const checkGameOver = (moreMoney) => {
	amountEarned += moreMoney;

const buyRustyScissors = () => {

    if (amountEarned >= 5 && !tools.find((tool) => { return tool == 'Rusty Scissors' })) {
        tools.push('Rusty Scissors')
        const yes = prompt("You've purchased Rusty Scissors! Would you like to use them?")
        if (yes === 'yes') {
            currentTool = tools[1]
        }
        alert("You can now work towards purchasing a push lawnmower for $25! Type 'buyLawnmower()' at anytime to purchase lawnmower.")
    } else if (
        amountEarned < 5
    ) {
        alert("You don't have enough money for Rusty Scissors!")

    } else {
        alert("You already own Rusty Scissors!")
    }

}
const buyPushLawnmower = () => {

    if (amountEarned >= 25 && !tools.find((tool) => { return tool == 'Push Lawnmower' })) {
        tools.push('Push Lawnmower')
        const yes = prompt("You've purchased Push Lawnmower! Would you like to use it?")
        if (yes === 'yes') {
            currentTool = tools[2]
        }
    } else if (
        amountEarned < 25
    ) {
        alert("You don't have enough money for a Push Lawnmower!")

    } else {
        alert("You already own a Push Lawnmower!")
    }
}
const buyFancyLawnmower = () => {

    if (amountEarned >= 250 && !tools.find((tool) => { return tool == 'Fancy Lawnmower' })) {
        tools.push('Fancy Lawnmower')
        const yes = prompt("You've purchased a Fancy Lawnmower! Would you like to use it?")
        if (yes === 'yes') {
            currentTool = tools[3]
        }

    } else if (
        amountEarned < 250
    ) {
        alert("You don't have enough money for a Fancy Lawnmower!")

    } else {
        alert("You already own a Fancy Lawnmower!")
    }

}
const hireStarvingStudents = () => {

    if (amountEarned >= 500 && !tools.find((tool) => { return tool == 'Starving Students' })) {
        tools.push('Starving Students')
        const yes = prompt("You've purchased a team of Starving Students! Would you like to put them to work?")
        if (yes === 'yes') {
            currentTool = tools[4]
        }

    } else if (
        amountEarned < 500
    ) {
        alert("You don't have enough money to hire a team!")

    } else {
        alert("You've already hired a team!")
    }

}

if(amountEarned >= 1000 && tools.indexOf('Starving Students') > 0) {
    alert("You won! Game Over!")
}
}


alert("You are starting a landscaping business, but all you have are your teeth. Each day you will work to earn money to be able to purchase more tools to cut grass.")

// need a weay to keep track of how much is made a day?
// need a way to show when the game is over.