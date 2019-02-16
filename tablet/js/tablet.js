var navButtons = $(".nav-btn");
var panels = $(".page");
var wantedPage = true;

//NAVIGATION

$(".nav-btn").click(function () {
    var clickedButton = $(this);
    var i = navButtons.index(clickedButton);
    $(".nav-btn").removeClass("nav-btn-active");
    $(clickedButton).addClass("nav-btn-active");
    $(panels).addClass("hide");
    $(panels[i]).removeClass("hide");
});

//MANDATE PAGE

//wystaw mandat
$("#mandate_accept").click(function () {
    var price = $("#mandate_amount");
    var reason = $("#mandate_reason");
    var playerId = $("#mandate_id");
    var signature = $("#mandate_signature");
    var points = $("#mandate_penalty_points");
    if (!validForm(reason, "Musisz podać powód wystawienia mandatu!")) {
        return false;
    }
    if (!validForm(playerId, "Musisz podać pesel obywatela!")) {
        return false;
    }
    if (!validForm(price, "Musisz podać kwotę mandatu!")) {
        return false;
    }
    if (!validForm(points, "Musisz podać ilość punktów karnych!")) {
        return false;
    }

    if (!validForm(signature, "Musisz się podpisać!")) {
        return false;
    }

    // $.post('http://dekpolicetablet/giveMandate', JSON.stringify({
    //     reason: reason.val(),
    //     id: playerId.val(),
    //     price: price.val(),
    //     points: points.val(),
    //     signature: signature.val(),
    //
    // }));
});

//resetuj pola mandatu
$("#mandate_reset").click(function(){
    $("#mandate_reason").val("");
    $("#mandate_id").val("");
    $("#mandate_amount").val("");
    $("#mandate_penalty_points").val("");
    $("#mandate_signature").val(""); 
})

//JAIL PAGE

//wyslij do wiezinia
$("#jail_accept").click(function () {
    var price = $("#jail_money");
    var reason = $("#jail_reason");
    var playerId = $("#jail_id");
    var signature = $("#jail_signature");
    var time = $("#jail_judgment");
    if (!validForm(reason, "Musisz podać zarzuty!")) {
        return false;
    }
    if (!validForm(playerId, "Musisz podać pesel obywatela!")) {
        return false;
    }
    if (!validForm(price, "Musisz podać wysokość grzywny!")) {
        return false;
    }
    if (!validForm(time, "Musisz podać czas odsiadki!")) {
        return false;
    }

    if (!validForm(signature, "Musisz się podpisać!")) {
        return false;
    }

    // $.post('http://dekpolicetablet/sendToJail', JSON.stringify({
    //     reason: reason.val(),
    //     id: playerId.val(),
    //     price: price.val(),
    //     time: time.val(),
    //     signature: signature.val(),
    //
    // }));
});

//resetuj pola wiezienia
$("#jail_reset").click(function(){
    
    $("#jail_id").val("");
    $("#jail_reason").val("");
    $("#jail_money").val("");
    $("#jail_judgment").val("");
    $("#jail_signature").val(""); 
})

//FILE PAGE

//przeszukaj kartotekę
$("#file_search").click(function () {
    var playerId = $("#file_id");
    var name = $("#file_first_name");
    var surname = $("#file_second_name");
    //    console.log(playerId.val());
    //    console.log(name.val());
    //    console.log(surname.val());
    // $.post('http://dekpolicetablet/fileSearch', JSON.stringify({
    //     id: playerId.val(),
    //     name: name.val(),
    //     surname: surname.val(),
    //
    // }));
});

//WANTED LIST PAGE

//zmiana zakładki
$("#change_wanted_page").click(function () {
    if(wantedPage){
        $("#add_wanted_img").addClass("wanted_list_selected").removeClass("wanted_list_unselected");
        $("#search_wanted_img").addClass("wanted_list_unselected").removeClass("wanted_list_selected");
        $("#wanted_list_main_1").addClass("hide");
        $("#wanted_list_bottom_1").addClass("hide");
        $("#wanted_list_main_2").removeClass("hide");
        $("#wanted_list_bottom_2").removeClass("hide");
    }
    else{
        $("#search_wanted_img").addClass("wanted_list_selected").removeClass("wanted_list_unselected");
        $("#add_wanted_img").addClass("wanted_list_unselected").removeClass("wanted_list_selected");
        $("#wanted_list_main_2").addClass("hide");
        $("#wanted_list_bottom_2").addClass("hide");
        $("#wanted_list_main_1").removeClass("hide");
        $("#wanted_list_bottom_1").removeClass("hide");  
    }
    wantedPage=!wantedPage;
});

//dodaj nowego poszukiwanego
$("#add_wanted_person").click(function(){
    var name = $("#add_wanted_first_name");
    var surname = $("#add_wanted_second_name");
    var reason = $("#add_wanted_reason");
    var description = $("#add_wanted_description");
    if (!validForm(name, "Musisz podac imię poszukiwanego!")) {
        return false;
    }
    if (!validForm(surname, "Musisz podać nazwisko poszukiwanego!")) {
        return false;
    }
    if (!validForm(reason, "Musisz podać zarzuty!")) {
        return false;
    }
    if (!validForm(description, "Musisz opisać poszukiwanego!")) {
        return false;
    }
});

//zresetuj pola dodawania poszukiwanego
$("#reset_wanted_person").click(function(){
    $("#add_wanted_first_name").val("");
    $("#add_wanted_second_name").val("");
    $("#add_wanted_reason").val("");
    $("#add_wanted_description").val("");
});

//LICENSE PAGE

//wydaj licenjce
$("#license_accept").click(function () {
    var playerId = $("#license_id");
    var name = $("#license_first_name");
    var surname = $("#license_second_name");
    var reason = $("#license_reason");
    var signature = $("#license_signature");
    if (!validForm(playerId, "Musisz podać pesel obywatela!")) {
        return false;
    }
    if (!validForm(name, "Musisz podać imię!")) {
        return false;
    }

    if (!validForm(surname, "Musisz podac nazwisko!")) {
        return false;
    }
    if (!validForm(reason, "Musisz podać powód wydania licencji!")) {
        return false;
    }

    if (!validForm(signature, "Musisz się podpisać!")) {
        return false;
    }

    // $.post('http://dekpolicetablet/addLicense', JSON.stringify({
    //     id: playerId.val(),
    //     name: name.val(),
    //     surname: surname.val(),
    //     reason: reason.val(),
    //     signature: signature.val(),
    //
    // }));
});

//resetuj pola licencji
$("#license_reset").click(function(){
    $("#license_id").val("");
    $("#license_first_name").val("");
    $("#license_second_name").val("");
    $("#license_reason").val("");
    $("#license_signature").val("");
});

//SCHEDULE PAGE

//podstawowe wartości
var jailTimeMin = 0;
var jailTimeMax = 0;
var moneyMin = 0;
var moneyMax = 0;
var points = 0;
var description = [];


//klikniecie w checbboxa
$('.schedule-checkbox').change(function (){
    var item = $(this);
    if (this.checked) {
        jailTimeMin += item.data("jail-min");
        jailTimeMax += item.data("jail-max");
        moneyMin += item.data("money-min");
        moneyMax += item.data("money-max");
        points += item.data("points");
        description.push(item.data("description"));
    } else {
        jailTimeMin -= item.data("jail-min");
        jailTimeMax -= item.data("jail-max");
        moneyMin -= item.data("money-min");
        moneyMax -= item.data("money-max");
        points -= item.data("points");
        description.remove(item.data("description"));
    }

    //change
    var jailRange = $('#jailRange');
    jailRange.attr('min', jailTimeMin);
    jailRange.attr('max', jailTimeMax);

    var value = jailTimeMax === jailTimeMin ? jailTimeMax : (jailTimeMax - jailTimeMin / 2);

    jailRange.attr("value", value);
    $("#schedule_judgment").val(value);


    var moneyRange = $('#moneyRange');
    moneyRange.attr('min', moneyMin);
    moneyRange.attr('max', moneyMax);

    value = moneyMax === moneyMin ? moneyMax : (moneyMax - moneyMin / 2);

    moneyRange.attr("value", value);
    $("#schedule_money").val(value);

    $("#schedule_penalty_points").val(points);
    var text = "";
    var first = true;
    description.forEach(function (val) {
        if (first) {
            first = false;
        } else {
            text += " | ";
        }
        text += val;
    })
    $("#schedule_reason").val(text);
});

//zmiana suwaka

jailRange.oninput = function() {
    $("#schedule_judgment").val(this.value);
}
moneyRange.oninput = function() {
    $("#schedule_money").val(this.value);
}


//przeniesienie do zakładki mandatu
$("#schedule_mandate").click(function () {
    $("#mandate_reason").val($("#schedule_reason").val());
    $("#mandate_amount").val($("#schedule_money").val());
    $("#mandate_penalty_points").val($("#schedule_penalty_points").val());
    $("#mandate").click();
});

//przeniesienie do zakładki więzienie
$("#schedule_jail").click(function () {
    $("#jail_reason").val($("#schedule_reason").val());
    $("#jail_money").val($("#schedule_money").val());
    $("#jail_judgment").val($("#schedule_judgment").val());
    $("#jail").click();
});

//OTHER

//prototyp dodawania do tablicy
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

//walidacja formularzy
function validForm(element, errorMsg) {
    if ($.trim(element.val()) === '') {
        element.popover({
            "placement": "top",
            "content": errorMsg,
        });
        element.popover('show');
        setTimeout(function () {
            element.popover('hide');
        }, 2000);
        return false;
    }
    return true;
}

//TEST

$("#test").click(function () {
    var data = {
        files: generateShitData()
    };
    $.get('template.html', function (templates) {
        var template = $(templates).filter('#tpl-files').html();
        $('#file_judgment_container').append(Mustache.render(template, data));
    });
});


$("#test2").click(function () {
    var data = {
        categories: generateShitData2(),
    };
    $.get('template.html', function (templates) {
        var template = $(templates).filter('#tpl-category').html();
        console.log(template);
        console.log(Mustache.render(template, data));
        $('#schedule_container').append(Mustache.render(template, data));
    });
});

function generateShitData() {
    files = [];
    for (i = 0; i < 50; i++) {
        var random = Math.random() >= 0.5;
        files.push({
            id: i + 1,
            icon: random ? "judgment_icon" : "judgment_icon",
            imgName: random ? "tablet_icon_więzienie" : "tablet_icon_mandat",
            date: (Math.floor(Math.random() * 30) + 1) + "/" + (Math.floor(Math.random() * 10) + 1) + "/2018",
            hour: Math.floor(Math.random() * 24) + ":" + Math.floor(Math.random() * 60),
            police_name: "dekros",
            police_surname: "dekrosik",
            time: (Math.floor(Math.random() * 300) + 10),
            money: (Math.floor(Math.random() * 1000000) + 10000),
            name: "forxen",
            surname: "forxenowski",
            reason: "No bo debil to jest XD"
        })
    }
    return files;
}

function generateShitData2() {
    categories = [];
    for (i = 0; i < 2; i++) {
        var random = Math.random() >= 0.5;
        var punishments = [];
        for (a = 0; a < 10; a++) {
            punishments.push({
                reason: "Jakis powod: " + a,
                jailMin: Math.floor(Math.random() * 10) + 1,
                jailMax: Math.floor(Math.random() * 10) + 1,
                moneyMin: Math.floor(Math.random() * 10000) + 1,
                moneyMax: Math.floor(Math.random() * 10000000) + 10001,
                points: Math.floor(Math.random() * 10) + 1,
            })
        }
        categories.push({
            id: i + 1,
            name: "Kategoria: " + i,
            punishments: punishments,
            "jail": function () {
                return (this.jailMin === this.jailMax) ? this.jailMin + " lat" : this.jailMin + " - " + this.jailMax + " lat";
            },
            "money": function () {
                return (this.moneyMin === this.moneyMax) ? this.moneyMin + " $" : this.moneyMin + " - " + this.moneyMax + " $";
            }
        })
    }
    return categories;
}