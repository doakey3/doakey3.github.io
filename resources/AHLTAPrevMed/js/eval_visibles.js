var eval_visibles = function() {
    var info = get_info();
    
    //----------------------------
    
    var tobacco_use_ever_section = document.getElementById("tobacco_use_ever_section");
    var tobacco_pack_years_section = document.getElementById("tobacco_pack_years_section");
    var tobacco_last_use_section = document.getElementById("tobacco_last_use_section");
    
    if (info["age"] >= 50 && info["age"] <= 80) {
        tobacco_use_ever_section.style.display = "block";
    }
    else {
        tobacco_use_ever_section.style.display = "none";
    }
    
    if (info["tobacco_ever"] && info["age"] >= 50 && info["age"] <= 80) {
        tobacco_pack_years_section.style.display = "block";
    }
    else {
        tobacco_pack_years_section.style.display = "none";
    }
    
    if (info["tobacco_ever"] && info["pack_years"] >= 20 && info["age"] >= 50 && info["age"] <= 80) {
        tobacco_last_use_section.style.display = "block";
    }
    else {
        tobacco_last_use_section.style.display = "none";
    }
    
    //----------------------------
    
    var sexually_active_section = document.getElementById("sexually_active_section");
    var contraceptive_section = document.getElementById("contraceptive_section");
    
    if (info["gender"] == "female" && info["sexually_active"] && info["age"] < 50 && !info["postmenopausal"]) {
        contraceptive_section.style.display = "block";
    }
    else {
        contraceptive_section.style.display = "none";
    }
    
    //----------------------------
    
    var postmenopausal_section = document.getElementById("postmenopausal_section");
    if (info["gender"] == "female" && info["age"] < 65) {
        postmenopausal_section.style.display = "block";
    }
    else {
        postmenopausal_section.style.display = "none";
    }
};
