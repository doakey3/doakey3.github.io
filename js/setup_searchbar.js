(function() {
    function isRunningLocally() {
        return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:';
    }
    
    let data = {}
    let keys = Object.keys(PathsIndex);
    for (let i = 0; i < keys.length; i++) {
        data[keys[i]] = PathsIndex[keys[i]];
        let extension = PathsIndex[keys[i]].path.split(".").pop().toLowerCase();
        if (extension.indexOf("/") > 0 && isRunningLocally()) {
            data[keys[i]]["path"] = PathsIndex[keys[i]]["path"] + "/index.html";
        }
        else {
            data[keys[i]]["path"] = PathsIndex[keys[i]]["path"];
        }
    }
    
    keys = Object.keys(data).sort((a, b) => {return a.toLowerCase().localeCompare(b.toLowerCase())});
    
    let lookup_table = document.getElementById("lookup_table");
    for (let i = 0; i < keys.length; i++) {
        let searchable_strings = data[keys[i]].title.split(/\s/g);
        searchable_strings = searchable_strings.concat(data[keys[i]].tags);
        searchable_strings = Array.from(new Set(searchable_strings));
        searchable_strings.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        
        let tr = document.createElement("tr");
        tr.searchable_strings = searchable_strings;
        tr.addEventListener("click", function(event) {
            if (event.button == 0 && event.target.tagName != "A") {
                let a = this.getElementsByTagName("a")[0];
                a.click();
            }
        });
        
        lookup_table.appendChild(tr);
 
        let td_icon = document.createElement("td");
        tr.appendChild(td_icon);
        
        let extension = data[keys[i]].path.split(".").pop().toLowerCase();
        
        let div_icon = document.createElement("div");
        div_icon.className = "icon " + extension;
        td_icon.appendChild(div_icon);
        
        let td_text = document.createElement("td");
        tr.appendChild(td_text);
        
        let a = document.createElement("a");
        a.className = "text";
        a.href = data[keys[i]].path;
        a.textContent = data[keys[i]].title;
        a.target = "_blank";
        a.addEventListener("auxclick", function(e) {
            if (e.button == 1) {
                e.preventDefault();
            }
        });
        td_text.appendChild(a);
    }
    
    function update_row_styles() {
        let lookup_table = document.getElementById("lookup_table");
        let trs = lookup_table.getElementsByTagName("tr");
        let visibleRows = [];
        for (let i = 0; i < trs.length; i++) {
            if (trs[i].style.display != "none") {
                visibleRows.push(trs[i]);
            }
        }
        
        for (let i = 0; i < visibleRows.length; i++) {
            if (i % 2 === 0) {
                visibleRows[i].defaultBackgroundColor = "#e6e6e6"
            } 
            else {
                visibleRows[i].defaultBackgroundColor = "#cccccc";
            }
            visibleRows[i].style.backgroundColor = visibleRows[i].defaultBackgroundColor;
            visibleRows[i].addEventListener("mousedown", function(e) {
                if (e.target.classList.contains("edit_button") || this.mode == "edit") {
                }
                else {
                    if (e.button == 0) {
                        this.style.backgroundColor = "#ffffe6";
                        let brothers = this.parentElement.querySelectorAll("tr.outer");
                        for (let x = 0; x < brothers.length; x++) {
                            brothers[x].classList.remove("selected");
                        }
                        
                        this.classList.add("selected");
                    }
                }
            });
            visibleRows[i].addEventListener("mouseup", function() {this.style.backgroundColor = this.defaultBackgroundColor;});
            visibleRows[i].addEventListener("mouseleave", function() {this.style.backgroundColor = this.defaultBackgroundColor;});
        }
    }
    
    window.onkeydown = function(event) {
        if (["Up", "ArrowUp", "Down", "ArrowDown"].includes(event.key)) {
            event.preventDefault();
            let trs = Array.from(lookup_table.getElementsByTagName("tr"));
            let visible_trs = trs.filter(tr => tr.style.display !== "none");
            let selected_index = visible_trs.findIndex(tr => tr.classList.contains("selected"));
            
            if (["Up", "ArrowUp"].includes(event.key)) {
                selected_index = selected_index <= 0 ? visible_trs.length - 1 : selected_index - 1;
            } 
            else if (["Down", "ArrowDown"].includes(event.key)) {
                selected_index = selected_index >= visible_trs.length - 1 ? 0 : selected_index + 1;
            }

            trs.forEach(tr => tr.classList.remove("selected"));
            visible_trs[selected_index]?.classList.add("selected");
            visible_trs[selected_index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        else if (["Enter", "Return"].includes(event.key)) {
            let selected = lookup_table.querySelector("tr.selected");
            if (selected && selected.style.display !== "none") {
                selected.click();
                selected.style.backgroundColor = "#ffffe6";
            } else {
                let firstVisible = lookup_table.querySelector("tr:not([style*='display: none'])");
                if (firstVisible) {
                    firstVisible.classList.add("selected");
                    firstVisible.style.backgroundColor = "#ffffe6";
                    firstVisible.click();
                }
            }
        }
    }
    
    let searchbar = document.getElementById("searchbar");
    searchbar.onkeydown = function(event) {
        if (["Backspace", "Delete"].includes(event.key) && event.ctrlKey && event.shiftKey) {
            this.value = "";
        }
    };
    
    
    let debounceTimerUp;
    searchbar.onkeyup = function(event) {
        clearTimeout(debounceTimerUp);
        debounceTimerUp = setTimeout(() => {
            let filter = searchbar.value.toLowerCase();
            let filter_split = filter.split(" ");
            let trs = lookup_table.getElementsByTagName("tr");
            
            let remove_selected = ["Up", "ArrowUp", "Down", "ArrowDown", "Enter", "Return"].indexOf(event.key) < 0;
            
            for (let i = 0; i < trs.length; i++) {
                let text_value = trs[i].searchable_strings.join(" ");
                let found = true;
                for (let x = 0; x < filter_split.length; x++) {
                    if (text_value.toLowerCase().indexOf(filter_split[x]) < 0) {
                        trs[i].style.display = "none";
                        found = false;
                        break;
                    }
                }
                if (found) {
                    trs[i].style.display = "";
                }
                if (remove_selected) {
                    trs[i].classList.remove("selected");
                }
            }
            update_row_styles();
        }, 50);
    };
}());
