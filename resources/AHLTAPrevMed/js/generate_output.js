var generate_output = function() {
    var screening_titles = document.getElementsByClassName("required");

    var monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    var now = new Date();
    var hours = ("0" + now.getHours()).slice(-2);
    var mins = ("0" + now.getMinutes()).slice(-2);
    var time = hours + ':' + mins;
    var month = monthNames[now.getMonth()];
    var day = ("0" + now.getDate()).slice(-2);
    var year = now.getFullYear();

    var today_date = "Last updated: " + [day, month, year].join(" ") + "\n";

    var info = get_info();

    var relevant_infos = ["Age: " + info["age"]];
    if (info["gender"] != null) {
        relevant_infos.push("Birth Gender: " + info["gender"][0].toUpperCase() + info["gender"].substring(1));
    }
    if (info["height"] != null) {
        relevant_infos.push("Height: " + info["height"] + "cm");
    }
    if (info["weight"] != null) {
        relevant_infos.push("Weight: " + info["weight"] + "kg");
    }
    if (info["bmi"] != -1) {
        relevant_infos.push("BMI: " + (Math.ceil(info["bmi"] * 10) / 10));
    }
    if (info["postmenopausal"] != null && document.getElementById("postmenopausal_section").style.display != "none") {
        relevant_infos.push("Postmenopausal: " + info["postmenopausal"]);
    }
    if (info["sexually_active"] != null) {
        relevant_infos.push("Sexually Active: " + info["sexually_active"]);
    }
    if (info["using_contraceptive"] != null && document.getElementById("contraceptive_section").style.display != "none") {
        relevant_infos.push("Using Contraceptive: " + info["using_contraceptive"]);
    }
    if (info["tobacco_ever"] != null && document.getElementById("tobacco_use_ever_section").style.display != "none") {
        relevant_infos.push("Tobacco Ever: " + info["tobacco_ever"]);
    }
    if (info["pack_years"] != null && document.getElementById("tobacco_pack_years_section").style.display != "none") {
        relevant_infos.push("Tobacco Pack Years: " + info["pack_years"]);
    }
    if (info["tobacco_last_use"] != null && document.getElementById("tobacco_last_use_section").style.display != "none") {
        relevant_infos.push("Years Since Last Tobacco Use: " + info["tobacco_last_use"]);
    }
    
    var output = [today_date, relevant_infos.join("\n") + "\n"];

    for (var i = 0; i < screening_titles.length; i++) {
        var title = screening_titles[i].innerHTML;
        var text = screening_titles[i].parentElement.getElementsByTagName("input")[0].value;
        if (text == "") {
            text = "[DUE]"
        }
        output.push(title.replace(/&amp;/, "&") + ": " + text);
    }
    
    document.getElementById("reciever").value = output.join("\n");
};
