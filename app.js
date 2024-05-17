const dropdowns = document.querySelectorAll("select");
const btn = document.querySelector("form button");
const result = document.querySelector('.ansTag');

let remain = 3;
let c = 0;

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (remain > 0) {
        let amnt = document.querySelector("form input");
        let amntValue = Number(amnt.value);
        if (amntValue > 0 && typeof amntValue === 'number') {
            c = 1;
            if (c === 1) {
                const apiKey = "cur_live_ch3MZ1UvhlfZstFqJS766O57Mcqa6vVsosYCZKWK";

                fetch("https://api.currencyapi.com/v3/latest", {
                    headers: {
                        "apikey": apiKey
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        const currencyData = data;
                        const from = document.querySelector('.fromDrop').value;
                        const to = document.querySelector('.toDrop').value;
                        const fromValue = currencyData.data[from].value;
                        const toValue = currencyData.data[to].value;
                        console.log(from + ":" + fromValue + "  " + to + ":" + toValue);
                        const ans = (toValue * amntValue) / (fromValue);
                        console.log(ans);
                        result.innerText = `${amntValue} ${from} = ${ans} ${to}`;
                        remain--;
                        alert("Remaining Requests " + remain + "!");
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        }
        else {
            console.log("Please Enter Valid Number");
            amntValue = 0;
            amnt.value = 0;
        }
        c = 0;
    }
    else {
        alert("Oops! You are out of requests");
    }

})