const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

for (option in from){
     console.log(option);
}

for (let select of dropdowns){
    // for (currCode in countryList){
    //     let newOption = document.createElement("option");
    //     newOption.innertext =currCode;
    //     newOption.value = currCode;
        if(select.name==="from"&& currCode==="USD"){
          newOption.selected ="selected";
        }else if (select.name==="to" &&currcode==="INR"){
          newOption.selected="selected";
        }
        select.append(newOption);
    }



