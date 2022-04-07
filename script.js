function see_users(){

        document.getElementById("list").style.opacity = "0.5";
    
        }

        
function close_list(){

    document.getElementById("list").style.opacity = "0";

}



/********USERS****/

function link(){
//   let user =  document.querySelector('input').value
let user = document.getElementById("user").value;
let pass = document.getElementById("pass").value;
let userC = document.getElementById("user");
let passC = document.getElementById("pass");

if ((user == "Crys" || 
    user == "crys" ||
    user == "crys".toUpperCase()) &&
    pass == "1111"
) {
    window.location = "crys.html";
} else if ((user == "Marshall" || 
user == "marshall" ||
user == "marshall".toUpperCase()) &&
pass == "2222"
) {
window.location = "marshall.html";
} else if ((user == "Xavier" || 
user == "xavier" ||
user == "xavier".toUpperCase()) &&
pass == "3333"
) {
window.location = "xavier.html";
}else if ((user == "Diego" || 
user == "diego" ||
user == "diego".toUpperCase()) &&
pass == "4444"
) {
window.location = "diego.html";
} else{
 userC.style.backgroundColor = "#DD7373";
 passC.style.backgroundColor = "#DD7373";
 document.getElementById("wrong_message").style.opacity = "1";
}


}


function checkPass(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let counter = document.getElementById("counter").innerHTML;
    let intCounter = parseInt(counter);

    if (intCounter > 2){
        window.location = "blocked.html";
    }else{
        if (     ((
        user == "Crys" || 
        user == "crys" ||
        user == "crys".toUpperCase()) &&
        pass != "1111") ||
                 ((
        user == "Marshall" || 
        user == "marshall" ||
        user == "marshall".toUpperCase()) &&
        pass != "2222") ||
                 ((
        user == "Xavier" || 
        user == "xavier" ||
        user == "xavier".toUpperCase()) &&
        pass != "3333")  ||
                 ((
        user == "Diego" || 
        user == "diego" ||
        user == "diego".toUpperCase()) &&
        pass != "4444")
        ){
            document.getElementById("counter").innerHTML = intCounter + 1;
        }
    }

}



/*******CRYS******/
let money = document.getElementById("money");

function balance(){
    
    // money.innerHTML = "1000"
    document.getElementById("balance").style.top = "15px";
    document.getElementById("menu_list").style.top = "-500px";
}

function withdraw(){
    document.getElementById("withdraw").style.top = "-30px";
    document.getElementById("menu_list").style.top = "-500px";
}

function getMoney(){
    let input = document.getElementById("money_withdraw").value;
    if(input.length == 0){
        document.getElementById("money_withdraw").style.backgroundColor = "#DD7373";
    }else{
        
        let amount_withdrawed = document.getElementById("amount_withdrawed");
        let moneyInt = document.getElementById("money").innerHTML;
        let calc = parseInt(moneyInt) - parseInt(input);
        amount_withdrawed.innerHTML = input;
        money.innerHTML = calc;
        document.getElementById("money_after").innerHTML = calc;
        document.getElementById("text_after").style.top = "30px";
        document.getElementById("withdraw").style.top = "-500px";
     
    }

   
    
 
    
}

function deposit(){
    document.getElementById("deposit").style.top = "-30px";
    document.getElementById("menu_list").style.top = "-500px";
}

function depositMoney(){
    let input2 = document.getElementById("money_deposit").value;
    if(input2.length == 0){
        document.getElementById("money_deposit").style.backgroundColor = "#DD7373";
    }else{
        
        let amount_deposited = document.getElementById("amount_deposited");
        let moneyInt2 = document.getElementById("money").innerHTML;
        let calc2 = parseInt(moneyInt2) + parseInt(input2);
        amount_deposited.innerHTML = input2;
        money.innerHTML = calc2;
        document.getElementById("money_after_deposit").innerHTML = calc2;
        document.getElementById("text_after_deposit").style.top = "30px";
        document.getElementById("deposit").style.top = "-500px";
     
    }
    
}



function back(){
    document.getElementById("menu_list").style.top = "-5px";
    document.getElementById("balance").style.top = "-500px";
    document.getElementById("withdraw").style.top = "-500px";
    document.getElementById("deposit").style.top = "-500px";
}

function back_withdraw(){
    document.getElementById("withdraw").style.top = "-30px";
    document.getElementById("text_after").style.top = "-500px";
    document.getElementById("money_withdraw").style.backgroundColor = "khaki";
}

function back_deposit(){
    document.getElementById("deposit").style.top = "-30px";
    document.getElementById("text_after_deposit").style.top = "-500px";
    document.getElementById("money_deposit").style.backgroundColor = "khaki";
}


function quit(){
    window.location = "index.html";
}