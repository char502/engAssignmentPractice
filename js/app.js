let amountValue = 0;
let selectedSplitType = "";
let newArr = [];
let button = "";

const person={
    person:name}

const calculateResults = () => {

    button = document.getElementById("donation--button")

    amountValue = document.getElementById("donation--amount").value
    selectedSplitType = document.getElementById("donation--type").value

        calculationDonation(amountValue, selectedSplitType)

        button.disabled = true
            document.getElementById("donation--amount").disabled = true
            document.getElementById("donation--type").disabled = true
            //Reset the inputs
            newArr = [];
            amountValue.value = 0
            selectedSplitType.value = ""
    }

    const calculationDonation = (amountValue, selectedSplitType) => {

        if (selectedSplitType === "equal") {
            
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

        } else if (selectedSplitType === "more-odd") {

            button.disabled = false

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

        amountValue = document.getElementById("donation--amount").value
        selectedSplitType = document.getElementById("donation--type").value

        let tableRows = document.getElementById("dataGoesHere")
        let row = tableRows.insertRow(0);

        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)

        cell1.innerHTML = `${amountValue}`
        cell2.innerHTML = `${selectedSplitType}`

        for (let i = 0; i < newArr.length; i++) {
            let counter = 3
            let cell = `cell${counter + i}`
            cell = row.insertCell(`${counter -1 + i}`)
            cell.innerHTML = `${newArr[i]}`
        }

        //Reset the inputs
        newArr = [];
        amountValue.value = 0
        selectedSplitType.value = ""
    }

const resetCalculator = () => {

    button = document.getElementById("donation--button")

    document.getElementById("dataFromForm").reset()
    
    newArr = []

    let tableData = document.getElementById("dataGoesHere")
    
        for(let i = tableData.rows.length - 1; i >= 0; i--) {
        tableData.deleteRow(i);

        button.disabled = false
        document.getElementById("donation--amount").disabled = false
        document.getElementById("donation--type").disabled = false
        }
}
