// const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'


const dropdown = document.querySelectorAll('.dropdown select');
const fromcurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const btn = document.querySelector('form button');
const msg = document.querySelector('.msg');

// const fromvalue = document.querySelector('#from option value')
// console.log(fromvalue , "hey")
// let fromName = "";
// let toname = "";
for(let select of dropdown){
    for(currCode in countryList){
        let newoptionTag = document.createElement('option');
        newoptionTag.innerText = currCode;
        newoptionTag.value = currCode;
        // select.append(newoptionTag);
        if (select.name === "from" && currCode === "USD") {
            newoptionTag.selected = "selected";
            // fromName = currCode;
          } else if (select.name === "to" && currCode === "INR") {
            newoptionTag.selected = "selected";
            // toname = currCode
          }
          select.append(newoptionTag);
        }
    
    select.addEventListener('change' , (event)=>{
        updateFlag(event.target)
    })
}
// console.log(`${fromName}` , "and " , toname);
// const imgSrc = document.querySelectorAll('.dropdown img');
const updateFlag =(element)=>{
    let currCode = element.value;
    let flag = countryList[currCode];
    let newSrc = `https://flagsapi.com/${flag}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};



// -------------------------------- APi -----------------------------//

const url = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_S8i6lFEWMXlg8Z3yaXM0QW54vY0dBkjWhRJZXTeP'


// getUrl()
const currencodes = (element)=>{
  fromtext = document.querySelector('.dropdown select option value')
  console.log(fromtext)
}

btn.addEventListener('click' , async(event)=>{
  event.preventDefault();
  let inputAmount = document.querySelector('.amount input');
  let valueAmount = inputAmount.value;
  if(valueAmount == "" || valueAmount < 1){
    valueAmount = 1;
    inputAmount.value = 1;
  }
  // console.log(fromcurr.value , " " , toCurr.value)
    let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    let rate = data.data[toCurr.value].value;
    let finalCurrency = (inputAmount.value*rate).toFixed(2);
    console.log(finalCurrency)
    msg.innerText = `${valueAmount} ${fromcurr.value} = ${finalCurrency} ${toCurr.value}`
    // console.log(rate)
    // console.log(data);
    // console.log(data.data.ADA.value)


    // const frname = fromName;
    // const toName = toname;
    // const rate = data.data[toname].value;
    // console.log(rate)


    // for(const code of Object.keys(data.data)){
    //   // console.log(code)
      

    //   // if(fromName == code){
    //   //   console.log(fromName)
    //   // }
    //   // if(toname == code){
    //   //   console.log(code.ADA.value);
    //   // }
    // }
})

