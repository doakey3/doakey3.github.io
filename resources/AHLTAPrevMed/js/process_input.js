var process_input = function() {
    var info = get_info();
    
    if (info["age"] >= 65 && info["age"] < 76 && info["gender"] == "male" && info["tobacco_ever"] == true) {
        document.getElementById("AAA").style.display = "block";
        document.getElementById("AAA").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("AAA").style.display = "none";
        document.getElementById("AAA").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 50 && info["age"] < 75 && info["gender"] == "female") {
        document.getElementById("BreastCancer").style.display = "block";
        document.getElementById("BreastCancer").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("BreastCancer").style.display = "none";
        document.getElementById("BreastCancer").getElementsByTagName("a")[0].classList.remove("required");
    }
    /*
    if (info["age"] >= 35 && info["gender"] == "female") {
        document.getElementById("BreastCancerRiskAssessment").style.display = "block";
        document.getElementById("BreastCancerRiskAssessment").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("BreastCancerRiskAssessment").style.display = "none";
        document.getElementById("BreastCancerRiskAssessment").getElementsByTagName("a")[0].classList.remove("required");
    }
    */
    
    if (info["age"] >= 18 && info["gender"] == "female") {
        document.getElementById("BRCARiskAssessment").style.display = "block";
        document.getElementById("BRCARiskAssessment").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("BRCARiskAssessment").style.display = "none";
        document.getElementById("BRCARiskAssessment").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 21 && info["age"] < 66 && info["gender"] == "female") {
        document.getElementById("CervicalCancer").style.display = "block";
        document.getElementById("CervicalCancer").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("CervicalCancer").style.display = "none";
        document.getElementById("CervicalCancer").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 45 && info["age"] < 76) {
        document.getElementById("ColonCancer").style.display = "block";
        document.getElementById("ColonCancer").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("ColonCancer").style.display = "none";
        document.getElementById("ColonCancer").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 35 && info["age"] < 71 && info["bmi"] >= 25) {
        document.getElementById("Diabetes").style.display = "block";
        document.getElementById("Diabetes").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("Diabetes").style.display = "none";
        document.getElementById("Diabetes").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["gender"] == "female" && info["sexually_active"] && info["postmenopausal"] == false && info["using_contraceptive"] == false) {
        document.getElementById("Folate").style.display = "block";
        document.getElementById("Folate").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("Folate").style.display = "none";
        document.getElementById("Folate").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["gender"] == "female" && info["age"] >= 40 && info["age"] < 65 && info["postmenopausal"]) {
        document.getElementById("OsteoporosisRiskAssessment").style.display = "block";
        document.getElementById("OsteoporosisRiskAssessment").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("OsteoporosisRiskAssessment").style.display = "none";
        document.getElementById("OsteoporosisRiskAssessment").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] <= 24 && info["sexually_active"] && info["gender"] == "female") {
        document.getElementById("GonorrheaChlamydia").style.display = "block";
        document.getElementById("GonorrheaChlamydia").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("GonorrheaChlamydia").style.display = "none";
        document.getElementById("GonorrheaChlamydia").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 18 && info["age"] < 80) {
        document.getElementById("HepC").style.display = "block";
        document.getElementById("HepC").getElementsByTagName("a")[0].classList.add("required");
    } 
    else {
        document.getElementById("HepC").style.display = "none";
        document.getElementById("HepC").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 15 && info["age"] < 66) {
        document.getElementById("HIV").style.display = "block";
        document.getElementById("HIV").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("HIV").style.display = "none";
        document.getElementById("HIV").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 15 && info["age"] < 66 && info["sexually_active"]) {
        document.getElementById("HIVRiskAssessment").style.display = "block";
        document.getElementById("HIVRiskAssessment").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("HIVRiskAssessment").style.display = "none";
        document.getElementById("HIVRiskAssessment").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 50 && info["age"] < 81 && info["tobacco_ever"] && info["pack_years"] >= 20 && info["tobacco_last_use"] <= 15) {
        document.getElementById("LungCancer").style.display = "block";
        document.getElementById("LungCancer").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("LungCancer").style.display = "none";
        document.getElementById("LungCancer").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 18 && info["bmi"] >= 30) {
        document.getElementById("ObesityIntervention").style.display = "block";
        document.getElementById("ObesityIntervention").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("ObesityIntervention").style.display = "none";
        document.getElementById("ObesityIntervention").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["gender"] == "female" && info["age"] >= 18 && info["age"] <= 50) {
        document.getElementById("PartnerViolence").style.display = "block";
        document.getElementById("PartnerViolence").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("PartnerViolence").style.display = "none";
        document.getElementById("PartnerViolence").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 65 && info["gender"] == "female") {
        document.getElementById("Osteoporosis").style.display = "block";
        document.getElementById("Osteoporosis").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("Osteoporosis").style.display = "none";
        document.getElementById("Osteoporosis").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 40 && info["age"] <= 75) {
        document.getElementById("StatinUse").style.display = "block";
        document.getElementById("StatinUse").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("StatinUse").style.display = "none";
        document.getElementById("StatinUse").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 18) {
        document.getElementById("TetanusVaccine").style.display = "block";
        document.getElementById("TetanusVaccine").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("TetanusVaccine").style.display = "none";
        document.getElementById("TetanusVaccine").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 50) {
        document.getElementById("ShinglesVaccine").style.display = "block";
        document.getElementById("ShinglesVaccine").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("ShinglesVaccine").style.display = "none";
        document.getElementById("ShinglesVaccine").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 65) {
        document.getElementById("PneumoniaVaccine").style.display = "block";
        document.getElementById("PneumoniaVaccine").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("PneumoniaVaccine").style.display = "none";
        document.getElementById("PneumoniaVaccine").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 19 && info["age"] <= 59) {
        document.getElementById("HepBVaccine").style.display = "block";
        document.getElementById("HepBVaccine").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("HepBVaccine").style.display = "none";
        document.getElementById("HepBVaccine").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    if (info["age"] >= 15 && info["age"] < 26) {
        document.getElementById("HPVVaccine").style.display = "block";
        document.getElementById("HPVVaccine").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("HPVVaccine").style.display = "none";
        document.getElementById("HPVVaccine").getElementsByTagName("a")[0].classList.remove("required");
    }
    
    var now = new Date();
    var month = now.getMonth()
    
    if (month >= 9 || month < 2) {
        document.getElementById("InfluenzaVaccine").style.display = "block";
        document.getElementById("InfluenzaVaccine").getElementsByTagName("a")[0].classList.add("required");
    }
    else {
        document.getElementById("InfluenzaVaccine").style.display = "none";
        document.getElementById("InfluenzaVaccine").getElementsByTagName("a")[0].classList.remove("required");
    }
};
