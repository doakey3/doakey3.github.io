(function() {
    var infos = document.getElementsByClassName("info");
    for (var i = 0; i < infos.length; i++) {
        var info_button = document.createElement("div");
        info_button.className = "info_button";
        info_button.addEventListener("click", function() {
            info = this.parentElement.getElementsByClassName("info")[0];
            if (this.clicked) {
                info.style.display = "none";
                this.clicked = false;
            }
            else {
                this.clicked = true;
                info.style.display = "block";
            }
        });
        
        infos[i].parentElement.insertBefore(info_button, infos[i]);
    }
}());
