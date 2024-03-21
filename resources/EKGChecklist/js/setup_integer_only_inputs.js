(function() {
    var integer_only_inputs = document.getElementsByClassName("integer_only");
    
    for (var i = 0; i < integer_only_inputs.length; i++) {
        integer_only_inputs[i].addEventListener("input", function(event) {
            //this.value = this.value
            this.value = this.value.replace(/[^0-9]*/g, "");
        });
    }
    
    var limit3s = document.getElementsByClassName("limit3");
    for (var i = 0; i < limit3s.length; i++) {
        limit3s[i].addEventListener("input", function(event) {
            if (this.value.length > 3) {
                this.value = this.value.substring(0, 3);
            }
        });
    }
    
    var limit2s = document.getElementsByClassName("limit2");
    for (var i = 0; i < limit2s.length; i++) {
        limit2s[i].addEventListener("input", function(event) {
            if (this.value.length > 2) {
                this.value = this.value.substring(0, 2);
            }
        });
    }
}());
