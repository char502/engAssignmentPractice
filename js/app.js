let amountValue = 0;


let getInputValue = () => {

    amountValue = document.getElementById("donation--amount").value

    let splitType = document.getElementById("donation--type")
    let selectedSplitType = splitType.value
    // alert(`You selected: ${amountValue} and ${selectedSplitType}`)

    let newArr = []

        if (selectedSplitType === 'equal') {
            let newArr = [];
            let currentSum = 0;

                for (var i = 0; i < 10; i++) {

                let num = parseFloat((amountValue / 10).toString().match(/^-?\d+(?:\.\d{0,2})?/))

                newArr.push(num)
            }

        let total = (newArr.reduce((a, b) => a + b))
        let rounded = Math.round(total * 10) / 10
        let difference = parseFloat((amountValue - rounded).toFixed(2))

        let lastElem = newArr[newArr.length -1]
        let lastElemPlusRemainder = lastElem + difference
        newArr.splice(newArr.length -1, 1, lastElemPlusRemainder)


        diaplayResults(newArr)

        } else if (selectedSplitType === 'more-odd') {
        alert('more-odd not calculating yet')
        }

    }

const diaplayResults = (newArr) => {
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
}