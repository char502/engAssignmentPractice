

// window.onload = function () {
//   document.getElementById("donation--button").addEventListener("click", displayValue);
// };



// alert(amountValue)

// let donationButton = document.getElementById("donation--button")
// donationButton.addEventListener("click", displayValue);


// function displayValue(e) {
//     e.preventDefault()
//     console.log(amountValue)
//     alert(amountValue)
// }

let amountValue = 0;




let getInputValue = () => {

    amountValue = document.getElementById("donation--amount").value

    let splitType = document.getElementById("donation--type")
    let selectedSplitType = splitType.value

    alert(`You selected: ${amountValue} and ${selectedSplitType}`)

    let newArr = []

            if (selectedSplitType === 'equal') {
                // let newArr = [];
                let i = 10;
        
                if (amountValue % 10 === 0) {
                while (amountValue > 0 && i > 0) { 
                let a = Math.floor(amountValue / i / 10 ) * 10 ; 
                amountValue -= a; 
                // console.log(amountValue)
                i--; 
                newArr.push(a);
            } 
        } else {
            console.log('not divisible by 10')
        }

        // newArr.push(amount)
        // console.log(newArr)
        

        diaplayResults(newArr)
        
        // return newArr

    } else if (selectedSplitType === 'more-odd') {

    }

}


const diaplayResults = (newArr) => {
    console.log(newArr)
    let inputAmount = document.getElementById("donation--amount").value
    console.log(inputAmount)

    let splitType = document.getElementById("donation--type")
    let selectedSplitType = splitType.value
    console.log(selectedSplitType)

    let firstRow = document.getElementById("donation")
    let secondRow = document.getElementById("split-type")

    firstRow.innerHTML = `<tr><td>${inputAmount}</td>`
    secondRow.innerHTML = `<td>${selectedSplitType}</td>`


    let tableRows = document.getElementById("dataGoesHere")


    for (let i = 0; i < newArr.length; i++) {
        let row = `<tr>
                        <td>${newArr[i]}</td>
                   <tr>`
        tableRows.innerHTML += row

    }
}



let reset = () => {
    alert('reset button clicked')
}