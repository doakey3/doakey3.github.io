(function() {
    document.getElementById("generate_btn").addEventListener("click", function() {
        var qr_size = 128;
        var val = document.getElementById("qr_size").value;
        if (val != "") {
            qr_size = parseInt(val);
        }
        var link = document.getElementById("qr_link").value;
        
        document.getElementById("QRCode").innerHTML = "";
        
        var qrcode = new QRCode("QRCode", {
            text: link,
            width: qr_size,
            height: qr_size
        });    
    });
    
    
}());
