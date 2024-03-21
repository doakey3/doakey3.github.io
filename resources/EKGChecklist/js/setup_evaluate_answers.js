(function() {
var parseBool = function(text) {
    var trues = ["TRUE", "True", "true", "Yes", "yes"];
    if (trues.indexOf(text) > -1) {
        return true;
    }
    return false;
}

var is_normal_sinus_rhythm = function() {
    var rate = parseInt(document.getElementById("heart_rate").value);
    var regularity = document.getElementById("regularity").value;
    var p_waves_present = parseBool(document.getElementById("p_waves_present").value);
    var consistent_p_waves = parseBool(document.getElementById("consistent_p_waves").value);
    var p_wave_lead_i_upright = parseBool(document.getElementById("p_wave_lead_i_upright").value);
    var p_wave_lead_avf_upright = parseBool(document.getElementById("p_wave_lead_avf_upright").value);
    
    if (rate > 59 && rate < 100 && regularity == "Regular" && p_waves_present && consistent_p_waves && p_wave_lead_i_upright && p_wave_lead_avf_upright) {
        return true;
    }
    return false;
}

var evaluate_answers = function() {
    console.log(is_normal_sinus_rhythm());
}

document.getElementById("main_form").addEventListener("input", evaluate_answers);
}());
