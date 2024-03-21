var parse_text = function() {
    var text = document.getElementById("reciever").value;
    var lines = split_lines(text);
    
    var matches = {};
    
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].match(/(^ *)(aaa|abdominal|aortic)(.*?)(-|:)/i)) {matches["AAA"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(mammogram|(breast cancer(?! risk))|(breast us)|(breast ultrasound))(.*?)(-|:)/i)) {matches["BreastCancer"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(breast cancer risk)(.*?)(-|:)/i)) {matches["BreastCancerRiskAssessment"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(brca)(.*?)(-|:)/i)) {matches["BRCARiskAssessment"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(cervical|pap)(.*?)(-|:)/i)) {matches["CervicalCancer"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(colorectal|colon)(.*?)(-|:)/i)) {matches["ColonCancer"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(diabetes|t2dm|dm|dmt2)(.*?)(-|:)/i)) {matches["Diabetes"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(folate|(folic acid)|(prenatal vitamin)|(pnv))(.*?)(-|:)/i)) {matches["Folate"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(gc|gonorrhea|chlamydia)(.*?)(-|:)/i)) {matches["GonorrheaChlamydia"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(hep(atitis) ?c)(.*?)(-|:)/i)) {matches["HepC"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(hiv(?! risk)|aids)(.*?)(-|:)/i)) {matches["HIV"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(hiv risk)(.*?)(-|:)/i)) {matches["HIVRiskAssessment"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)((lung cancer)|(ct chest)|(chest ct)|(low dose ct)|(low dose chest ct))(.*?)(-|:)/i)) {matches["LungCancer"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(obesity|bmi)(.*?)(-|:)/i)) {matches["ObesityIntervention"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(osteoporosis(?! risk)|bmd|(bone mineral density)|dexa)(.*?)(-|:)/i)) {matches["Osteoporosis"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(osteoporosis risk)(.*?)(-|:)/i)) {matches["OsteoporosisRiskAssessment"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(partner violence)(.*?)(-|:)/i)) {matches["PartnerViolence"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(statin|lipid|cholesterol|10-?yr (as)?cvd|(as)?cvd)(.*?)(-|:)/i)) {matches["StatinUse"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(tuberculosis|tb|quant(iferon)|ppd)(.*?)(-|:)/i)) {matches["Tuberculosis"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(tetanus|tdap|dtap|td)(.*?)(-|:)/i)) {matches["TetanusVaccine"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(zoster|shingles|rzv|shingrix)(.*?)(-|:)/i)) {matches["ShinglesVaccine"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(pneumonia|pneumococcal|ppsv23|prevnar|pcv13|pcv15|pcv20)(.*?)(-|:)/i)) {matches["PneumoniaVaccine"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(hep(atitis) ?b)(.*?)(-|:)/i)) {matches["HepBVaccine"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)(hpv|(human papilloma virus))(.*?)(-|:)/i)) {matches["HPVVaccine"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}
        else if (lines[i].match(/(^[\s\t]*)((in)?flu)(.*?)(-|:)/i)) {matches["InfluenzaVaccine"] = strip(lines[i].replace(/(^(.*?)(-|:))/, ""));}

        else if (lines[i].match(/(^[\s\t]*)(age:\s*)(\d+)/i)) {document.getElementById("age").value = strip(lines[i].replace(/(^[\s\t]*)(age:\s*)/i, ""));}
        else if (lines[i].match(/(^[\s\t]*)(height:\s*)(\d+)/i)) {
            document.getElementById("height_centimeters").value = strip(lines[i].replace(/(^[\s\t]*)(height:\s*)/i, "").replace(/cm/i, ""));
            document.getElementById("height_inches").value = "";
        }
        else if (lines[i].match(/(^[\s\t]*)(weight:\s*)(\d+)/i)) {
            document.getElementById("weight_kilograms").value = strip(lines[i].replace(/(^[\s\t]*)(weight:\s*)/i, "").replace(/kg/i, ""));
            document.getElementById("weight_pounds").value = "";
        }
        else if (lines[i].match(/(^[\s\t]*)(birth gender:\s*)(male|female)/i)) {
            var gender = strip(lines[i].replace(/(^[\s\t]*)(birth gender:\s*)/i, "")).toLowerCase();
            if (gender == "male") {
                document.getElementById("male_btn").classList.add("clicked");
                document.getElementById("female_btn").classList.remove("clicked");
            }
            else if (gender == "female") {
                document.getElementById("male_btn").classList.remove("clicked");
                document.getElementById("female_btn").classList.add("clicked");
            }
        }
        else if (lines[i].match(/(^[\s\t]*)(postmenopausal:\s*)(true|false)/i)) {
            var postmenopausal = strip(lines[i].replace(/(^[\s\t]*)(postmenopausal:\s*)/i, "")).toLowerCase();
            if (postmenopausal == "true") {
                document.getElementById("postmenopausal_btn").classList.add("clicked");
                document.getElementById("premenopausal_btn").classList.remove("clicked");
            }
            else if (postmenopausal == "false") {
                document.getElementById("postmenopausal_btn").classList.remove("clicked");
                document.getElementById("premenopausal_btn").classList.add("clicked");
            }
        }
        else if (lines[i].match(/(^[\s\t]*)(sexually active:\s*)(true|false)/i)) {
            var sexually_active = strip(lines[i].replace(/(^[\s\t]*)(sexually active:\s*)/i, "")).toLowerCase();
            if (sexually_active == "true") {
                document.getElementById("sexually_active_btn").classList.add("clicked");
                document.getElementById("sexually_inactive_btn").classList.remove("clicked");
            }
            else if (sexually_active == "false") {
                document.getElementById("sexually_active_btn").classList.remove("clicked");
                document.getElementById("sexually_inactive_btn").classList.add("clicked");
            }
        }
        else if (lines[i].match(/(^[\s\t]*)(using contraceptive:\s*)(true|false)/i)) {
            var using_contraceptive = strip(lines[i].replace(/(^[\s\t]*)(using contraceptive:\s*)/i, "")).toLowerCase();
            if (using_contraceptive == "true") {
                document.getElementById("using_contraceptive_btn").classList.add("clicked");
                document.getElementById("not_using_contraceptive_btn").classList.remove("clicked");
            }
            else if (using_contraceptive == "false") {
                document.getElementById("using_contraceptive_btn").classList.remove("clicked");
                document.getElementById("not_using_contraceptive_btn").classList.add("clicked");
            }
        }
        else if (lines[i].match(/(^[\s\t]*)(using contraceptive:\s*)(true|false)/i)) {
            var using_contraceptive = strip(lines[i].replace(/(^[\s\t]*)(using contraceptive:\s*)/i, "")).toLowerCase();
            if (using_contraceptive == "true") {
                document.getElementById("using_contraceptive_btn").classList.add("clicked");
                document.getElementById("not_using_contraceptive_btn").classList.remove("clicked");
            }
            else if (using_contraceptive == "false") {
                document.getElementById("using_contraceptive_btn").classList.remove("clicked");
                document.getElementById("not_using_contraceptive_btn").classList.add("clicked");
            }
        }
        else if (lines[i].match(/(^[\s\t]*)(tobacco ever:\s*)(true|false)/i)) {
            var tobacco_ever = strip(lines[i].replace(/(^[\s\t]*)(tobacco ever:\s*)/i, "")).toLowerCase();
            if (tobacco_ever == "true") {
                document.getElementById("used_tobacco_btn").classList.add("clicked");
                document.getElementById("never_used_tobacco_btn").classList.remove("clicked");
            }
            else if (tobacco_ever == "false") {
                document.getElementById("used_tobacco_btn").classList.remove("clicked");
                document.getElementById("never_used_tobacco_btn").classList.add("clicked");
            }
        }
        else if (lines[i].match(/(^[\s\t]*)(tobacco pack years:\s*)(\d+)/i)) {document.getElementById("tobacco_years").value = strip(lines[i].replace(/(^[\s\t]*)(tobacco pack years:\s*)/i, ""));}
        else if (lines[i].match(/(^[\s\t]*)(years since last tobacco use:\s*)(\d+)/i)) {document.getElementById("tobacco_last_use").value = strip(lines[i].replace(/(^[\s\t]*)(years since last tobacco use:\s*)/i, ""));}
    }
    
    var keys = Object.keys(matches);
    for (var i = 0; i < keys.length; i++) {
        var section = document.getElementById(keys[i]);
        var input = section.getElementsByTagName("input")[0];
        input.value = matches[keys[i]];
        section.style.display = "block";
    }

    eval_visibles();
};
