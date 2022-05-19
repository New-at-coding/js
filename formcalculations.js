
 var cake_prices = new Array();
 cake_prices["Espresso"]=2000;
 cake_prices["Americano"]=4000;
 cake_prices["Cappuccino"]=5500;
 cake_prices["cafeLatte"]=10000;
 

 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["Hotcake"]=4000;
 filling_prices["FrenchToast"]=3000;
 filling_prices["ChocolateCake"]=1500;
 

function startTime() {
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = year + "년 " + month + "월 " + day + "일 " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
	 

function getCakeSizePrice()
{  
    var cakeSizePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake = theForm.elements["selectedcake"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedCake.length; i++)
    {
        //if the radio button is checked
        if(selectedCake[i].checked)
        {
            cakeSizePrice = cake_prices[selectedCake[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice;
}

//This function finds the filling price based on the 
//drop down selection
function getFillingPrice()
{
    var cakeFillingPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["filling"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    cakeFillingPrice = filling_prices[selectedFilling.value];

    //finally we return cakeFillingPrice
    return cakeFillingPrice;
}

function calculateTotal()
{

    var cakePrice = getCakeSizePrice() + getFillingPrice();
    
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "가격 총 합은 " + cakePrice +" 원입니다.";

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}