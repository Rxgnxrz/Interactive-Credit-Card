const form = document.querySelector(".containers")

let inputName = document.getElementById("name");
let inputNumber = document.getElementById("number");
let inputMonth = document.getElementById("month");
let inputYear = document.getElementById("year");
let inputCode = document.getElementById("code");

const cardNum = document.getElementById("cnmber");
const cardName = document.getElementById("resultado");
const cardMonth = document.getElementById("mnth");
const cardYear = document.getElementById("yr");
const cardCode = document.getElementById("cde");

const submitBtn = document.querySelector(".primary-button");
const tab = document.querySelector(".complete-tab")
const conyBtn = document.getElementById("submit")

function getValue() {
    let text = document.getElementById("name");
    let textvalue = text.value;

    let holder = document.getElementById("resultado");
    holder.innerText = textvalue;
}

function getNumber() {
    let text = document.getElementById("number");
    let textvalue = text.value;

    let holder = document.getElementById("cnmber");
    holder.innerText = textvalue;
}

function getMonth() {
    let text = document.getElementById("month");
    let textvalue = text.value;

    let holder = document.getElementById("mnth");
    holder.innerText = textvalue;
}

function getYear() {
    let text = document.getElementById("year");
    let textvalue = text.value;

    let holder = document.getElementById("yr");
    holder.innerText = textvalue;
}

function getCode() {
    let text = document.getElementById("code");
    let textvalue = text.value;

    let holder = document.getElementById("cde");
    holder.innerText = textvalue;
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(!inputName.value == "")
        if (!inputName.value == "" && !inputNumber.value == "" && !inputMonth.value == "" && !inputYear.value == "" && 
            !inputCode.value == "") {
            document.querySelector(".containers").style.display="none";
            document.querySelector(".complete-tab").style.display="flex";
    } else {
        inputName.value === "" ? inputName.focus() : inputNumber.value == "" ? inputNumber.focus() : inputMonth.value == "" ? inputMonth.focus() : inputYear.value == "" ? inputYear.focus() : inputCode.focus()
    }
})
conyBtn.addEventListener("click", () => {
    form.reset()
    cardName.innerText = "Jane Appleseed"
    cardNum.innerText = "0000 0000 0000 0000"
    cardMonth.innerHTML = "<p>00</p>"
    cardYear.innerHTML = "<p>00</p>"
    cardCode.innerText = "000"
    document.querySelector(".containers").style.display="flex";
    document.querySelector(".complete-tab").style.display="none";
})

