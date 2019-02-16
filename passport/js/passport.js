//var datePattern = /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01]$/;
var datePattern = /^\d{4}-\d{2}-\d{2}$/;


$( "#get_passport" ).click(function() {
    var first_name = $("#first_name");
    var last_name = $("#last_name");
    var date = $("#date");
    var sex = $("#sex");
    var growth = $("#growth");
  
    
    if(isEmpty(first_name)){
        showPopover(first_name, "Musisz podać imię!");
        return false;
    }
    if(isEmpty(last_name)){
        showPopover(last_name, "Musisz podać nazwisko!");
        return false;
    }
    if(isEmpty(date)){
        showPopover(date, "Musisz podać datę urodzenia!");
        return false;
    }
    if(!isValidDate(date.val())){
        showPopover(date, "Podaj datę w formacie YYYY-MM-DD!");
        return false;
    }
    if(isEmpty(sex)){
        showPopover(sex, "Musisz podać płeć!");
        return false;
    }
    if(sex.val()!="m" && sex.val()!="M" && sex.val()!="k" && sex.val()!="K" ){
        showPopover(sex, "Podaj poprawną płeć m lub k!");
        return false;
    }
    if(isEmpty(growth)){
        showPopover(growth, "Musisz podać wzrost!");
        return false;
    }
    else{
        var growthNum = parseInt(growth.val());
        if(isNaN(growthNum)){
            showPopover(growth, "Niepoprawny wzrost!");
            return false;
        }
        else{
            if(growthNum<=119 || growthNum>=221){
                showPopover(growth, "Wzrost postaci musi mieścić się w przedziale 120-220 cm");
                return false;
            }
        }
    }
    
});


//walidacja formularzy

function isEmpty(element){
    if($(element).val()==="")
        return true;
    else
        return false;
}

function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;
    var d = new Date(dateString);
    if(Number.isNaN(d.getTime())) return false;
    return d.toISOString().slice(0,10) === dateString;
}

function showPopover(element, errorMsg){
    element.popover({
        "placement": "left",
        "content": errorMsg,
    });
    element.popover('show');
    setTimeout(function () {
        element.popover('dispose');
    }, 2000);
}
