let amountValue = 0;


let getInputValues = () => {

    amountValue = document.getElementById("donation--amount").value

    let splitType = document.getElementById("donation--type")
    let selectedSplitType = splitType.value

    let newArr = []

        if (selectedSplitType === 'equal') {
            
                for (let i = 0; i < 10; i++) {
                let num = parseFloat((amountValue / 10).toString().match(/^-?\d+(?:\.\d{0,2})?/))
                newArr.push(num)
            }

        let total = (newArr.reduce((a, b) => a + b))
        let rounded = Math.round(total * 10) / 10
        let difference = parseFloat((amountValue - rounded).toFixed(2))

        let lastElem = newArr[newArr.length -1]
        let lastElemPlusRemainder = parseFloat((lastElem + difference).toFixed(2))
        newArr.splice(newArr.length -1, 1, lastElemPlusRemainder)

        displayResults(newArr)

        } else if (selectedSplitType === 'more-odd') {

            let newArr = [];

                for (let i = 0; i < 15; i++) {

                    let num = parseFloat((amountValue / 15).toString().match(/^-?\d+(?:\.\d{0,2})?/))
                    // console.log(num)
                     newArr.push(num)
                }

                newArr.splice(10)

                for (let i = 0; i < 10; i += 2) {
                    let double = newArr[i] * 2
                    newArr.splice(i, 1, double)
                }

            let total = (newArr.reduce((a, b) => a + b))
            let rounded = Math.round(total * 10) / 10
            let difference = parseFloat((amountValue - rounded).toFixed(2))

            let lastElem = newArr[newArr.length -1]
            let lastElemPlusRemainder = parseFloat((lastElem + difference).toFixed(2))
            newArr.splice(newArr.length -1, 1, lastElemPlusRemainder)

            displayResults(newArr)

        }
    }

const displayResults = (newArr) => {
    // console.log(newArr)
    let inputAmount = document.getElementById("donation--amount").value
    // console.log(inputAmount)

    let splitType = document.getElementById("donation--type")
    let selectedSplitType = splitType.value
    // console.log(selectedSplitType)

    let tableRows = document.getElementById("dataGoesHere")
    let row = tableRows.insertRow(0);

    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)

    cell1.innerHTML = `${inputAmount}`
    cell2.innerHTML = `${selectedSplitType}`

    for (let i = 0; i < newArr.length; i++) {
        let counter = 3
        let cell = `cell${counter + i}`
        cell = row.insertCell(`${counter -1 + i}`)
        cell.innerHTML = `${newArr[i]}`
    }
}


let reset = () => {
    alert('reset button clicked')
    amountValue = 0
    selectedSplitType = ""
    newArr = []
}