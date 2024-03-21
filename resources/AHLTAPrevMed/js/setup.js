(function() {
var setup = function() {
    setup_inputs();
    setup_pairs();
    setup_infos();
    
    document.getElementById("generate_btn").addEventListener("click", generate_output);
    document.getElementById("parse_btn").addEventListener("click", parse_text);
};
var setup_infos = function() {
    var screenings = document.getElementsByClassName("screening_title");
    
    for (var i = 0; i < screenings.length; i++) {
        screenings[i].addEventListener("mouseover", function() {
            var info_box = document.getElementById("info_box");
            info_box.innerHTML = this.getAttribute("info");
            info_box.style.display = "block";
        });
        screenings[i].addEventListener("mouseout", function() {
            var info_box = document.getElementById("info_box");
            info_box.style.display = "none";
        });
    }
};
var setup_inputs = function() {
    var integer_onlys = document.getElementsByClassName("integer_only");
    for (var i = 0; i < integer_onlys.length; i++) {
        integer_onlys[i].addEventListener("input", function() {
            var val = this.value;
            val = val.replace(/[^0-9]/, "");
            this.value = val;
        });
    }
    
    var float_onlys = document.getElementsByClassName("float_only");
    for (var i = 0; i < float_onlys.length; i++) {
        float_onlys[i].addEventListener("input", function() {
            var val = this.value;
            val = val.replace(/[^0-9\.]/, "");
            var split = val.split(".");
            if (split.length > 2) {
                var end = split.slice(1, split.length).join("");
                val = split[0] + "." + end;
            }
            this.value = val;
        });
    }
    
    var inputs = document.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", eval_visibles);
        inputs[i].addEventListener("input", process_input);
    }
    
};
var setup_pairs = function() {
    var pairs = document.getElementsByClassName("pair");
    for (var i = 0; i < pairs.length; i++) {
        pairs[i].addEventListener("click", function() {
            if (this.classList.contains("clicked")) {
                this.classList.remove("clicked");
            }
            else {
                this.classList.add("clicked");
                var parent = this.parentElement;
                var siblings = [];
                while (siblings.length <= 1) {
                    siblings = parent.getElementsByClassName("pair");
                    parent = parent.parentElement;
                }
                for (var x = 0; x < siblings.length; x++) {
                    if (siblings[x] != this && siblings[x].classList.contains("clicked")) {
                        siblings[x].classList.remove("clicked");
                    }
                }
            }
            
            eval_visibles();
            process_input();
        });
    }
};

setup();
}());

