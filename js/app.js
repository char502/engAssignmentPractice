let amountValue = 0;


let getInputValue = () => {

    amountValue = document.getElementById("donation--amount").value

    let splitType = document.getElementById("donation--type")
    let selectedSplitType = splitType.value
    // alert(`You selected: ${amountValue} and ${selectedSplitType}`)

    let newArr = []

            if (selectedSplitType === 'equal') {
                
                let i = 10;
        
                if (amountValue > 100) {

                    let remainder = amountValue - 100;
                    amountValue = amountValue - remainder
                
                    while (amountValue > 0 && i > 0) { 

                        let a = Math.floor(amountValue / i / 10 ) * 10 ; 
                        amountValue -= a; 
                        i--; 
                        newArr.push(a);
                    } 

            let lastElem = newArr[newArr.length -1]
            let lastElemPlusRemainder = lastElem + remainder
            newArr.splice(newArr.length -1, 1, lastElemPlusRemainder)

        } else {
            console.log('not divisible by 10')
        }

        diaplayResults(newArr)

    } else if (selectedSplitType === 'more-odd') {

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