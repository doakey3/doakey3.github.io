var get_bmi = function() {
    var size = -1;
    var weight = -1;
        
    if (document.getElementById("height_inches").value != "") {
        var inches = parseFloat(document.getElementById("height_inches").value);
        size = (inches * 2.54) / 100;
    }
    
    if (document.getElementById("height_centimeters").value != "") {
        size = parseFloat(document.getElementById("height_centimeters").value) / 100;
    }
    
    if (document.getElementById("weight_pounds").value != "") {
        weight = parseFloat(document.getElementById("weight_pounds").value) / 2.2;
    }
    
    if (document.getElementById("weight_kilograms").value != "") {
        weight = parseFloat(document.getElementById("weight_kilograms").value);
    }
    
    if (size > 0 && weight > 0) {
        return weight / Math.pow(size, 2);
    }
    return -1;
};
var get_info = function() {
    var age = parseFloat(document.getElementById("age").value);
    var bmi = get_bmi();
    var height = null;
    if (document.getElementById("height_inches").value != "") {
        var inches = parseFloat(document.getElementById("height_inches").value);
        height = Math.ceil((inches * 2.54) * 10) / 10;
    }
    if (document.getElementById("height_centimeters").value != "") {
        height = parseFloat(document.getElementById("height_centimeters").value);
    }
    var weight = null;
    if (document.getElementById("weight_pounds").value != "") {
        weight = Math.ceil((parseFloat(document.getElementById("weight_pounds").value) / 2.2) * 10) / 10;
    }
    
    if (document.getElementById("weight_kilograms").value != "") {
        weight = parseFloat(document.getElementById("weight_kilograms").value);
    }

    var gender = null;
    if (document.getElementById("male_btn").classList.contains("clicked")) {
        gender = "male";
    }
    else if (document.getElementById("female_btn").classList.contains("clicked")) {
        gender = "female";
    }
    
    var tobacco_ever = null;
    if (document.getElementById("used_tobacco_btn").classList.contains("clicked")) {
        tobacco_ever = true;
    }
    else if (document.getElementById("never_used_tobacco_btn").classList.contains("clicked")) {
        tobacco_ever = false;
    }
    
    var pack_years = null;
    if (document.getElementById("tobacco_years").value != "") {
        pack_years = parseFloat(document.getElementById("tobacco_years").value);
    }
    var tobacco_last_use = null;
    if (document.getElementById("tobacco_last_use").value != "") {
        tobacco_last_use = parseFloat(document.getElementById("tobacco_last_use").value);
    }

    var sexually_active = null;
    if (document.getElementById("sexually_active_btn").classList.contains("clicked")) {
        sexually_active = true;
    }
    else if (document.getElementById("sexually_inactive_btn").classList.contains("clicked")) {
        sexually_active = false;
    }
    
    var using_contraceptive = null;
    if (document.getElementById("using_contraceptive_btn").classList.contains("clicked")) {
        using_contraceptive = true;
    }
    else if (document.getElementById("not_using_contraceptive_btn").classList.contains("clicked")) {
        using_contraceptive = false;
    }
    
    var postmenopausal = null;
    if (document.getElementById("postmenopausal_btn").classList.contains("clicked")) {
        postmenopausal = true;
    }
    else if (document.getElementById("premenopausal_btn").classList.contains("clicked")) {
        postmenopausal = false;
    }
    
    return {
        "age": age,
        "height": height,
        "weight": weight,
        "bmi": bmi,
        "gender": gender,
        "tobacco_ever": tobacco_ever,
        "pack_years": pack_years,
        "tobacco_last_use": tobacco_last_use,
        "sexually_active": sexually_active,
        "using_contraceptive": using_contraceptive,
        "postmenopausal": postmenopausal
    }
};
