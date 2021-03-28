(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);

        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

            if (h === 0) {
                h = 12;
            }

            if (h > 12) {
                h = h - 12;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            if (date.getHours() > 12) {
                c.innerHTML = h + ":" + m + ":" + s + " PL";
            }
            else {
                c.innerHTML = h + ":" + m + ":" + s + " EL";
            }
            
        };

        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        let linn = document.getElementById("linn");
        let v1 = document.getElementById("v1").checked;
        let v2 = document.getElementById("v2").checked;
        let r1 = document.getElementById("r1").checked;
        let r2 = document.getElementById("r2").checked;
        let r3 = document.getElementById("r3").checked;

        let eesnimi = document.getElementById("fname").value;
        let perenimi = document.getElementById("lname").value;

        const reg = /\d/;

        if (eesnimi === "" || perenimi === "") {
            alert("Nimeväljad peavad olema täidetud!");
            return;
        }
        else if (reg.test(eesnimi) || reg.test(perenimi) ) {
            alert("Ees- või perenimi ei tohi sisaldada numbreid!");
            return;
        }
        else if (!(r1 || r2 || r3)) {
            alert("Palun vali kättetoimetamise aeg!");
            return;
        }
        else if (linn.value === "") {
            alert("Palun valige linn nimekirjast");
            linn.focus();
            return;
        }
        else {
            if (r1) {
                if (v1 && !v2) {
                    if (linn.value === "tln") {
                        e.innerHTML = "7,00 &euro;";
                    }
                    else if (linn.value === "trt") {
                        e.innerHTML = "9,50 &euro;";
                    }
                    else if (linn.value === "nrv") {
                        e.innerHTML = "9,50 &euro;";
                    }
                    else {
                        e.innerHTML = "10,00 &euro;";
                    }
                }
                else if (!v1 && v2) {
                    if (linn.value === "tln") {
                        e.innerHTML = "3,00 &euro;";
                    }
                    else if (linn.value === "trt") {
                        e.innerHTML = "5,50 &euro;";
                    }
                    else if (linn.value === "nrv") {
                        e.innerHTML = "5,50 &euro;";
                    }
                    else {
                        e.innerHTML = "6,00 &euro;";
                    }
                }
                else if (v1 && v2) {
                    if (linn.value === "tln") {
                        e.innerHTML = "8,00 &euro;";
                    }
                    else if (linn.value === "trt") {
                        e.innerHTML = "10,50 &euro;";
                    }
                    else if (linn.value === "nrv") {
                        e.innerHTML = "10,50 &euro;";
                    }
                    else {
                        e.innerHTML = "11,00 &euro;";
                    }
                }
                else {
                    if (linn.value === "tln") {
                        e.innerHTML = "2,00 &euro;";
                    }
                    else if (linn.value === "trt") {
                        e.innerHTML = "4,50 &euro;";
                    }
                    else if (linn.value === "nrv") {
                        e.innerHTML = "4,50 &euro;";
                    }
                    else {
                        e.innerHTML = "5,00 &euro;";
                    }
                }
            }
            else {
                if (v1 && !v2) {
                    if (linn.value === "tln") {
                        e.innerHTML = "5,00 &euro;";
                    }
                    else if (linn.value === "trt") {
                        e.innerHTML = "7,50 &euro;";
                    }
                    else if (linn.value === "nrv") {
                        e.innerHTML = "7,50 &euro;";
                    }
                    else {
                        e.innerHTML = "8,00 &euro;";
                    }
                }
                else if (!v1 && v2) {
                    if (linn.value === "tln") {
                        e.innerHTML = "1,00 &euro;";
                    }
                    else if (linn.value === "trt") {
                        e.innerHTML = "3,50 &euro;";
                    }
                    else if (linn.value === "nrv") {
                        e.innerHTML = "3,50 &euro;";
                    }
                    else {
                        e.innerHTML = "4,00 &euro;";
                    }
                }
                else if (v1 && v2) {
                    if (linn.value === "tln") {
                        e.innerHTML = "6,00 &euro;";
                    }
                    else if (linn.value === "trt") {
                        e.innerHTML = "8,50 &euro;";
                    }
                    else if (linn.value === "nrv") {
                        e.innerHTML = "8,50 &euro;";
                    }
                    else {
                        e.innerHTML = "9,00 &euro;";
                    }
                }
                else {
                    if (linn.value === "tln") {
                        e.innerHTML = "0,00 &euro;";
                    }
                    else if (linn.value === "trt") {
                        e.innerHTML = "2,50 &euro;";
                    }
                    else if (linn.value === "nrv") {
                        e.innerHTML = "2,50 &euro;";
                    }
                    else {
                        e.innerHTML = "3,00 &euro;";
                    }
                }
            }

        }        
        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

let mapAPIKey = "AvVZ0XlSLipLmZ0pV_1hnhSjGW7if91u-1EG62_a_ERA8XA8LYGqIjw52S2nYJn4";

let map;

function GetMap() {
    "use strict";

    let keskpunkt = new Microsoft.Maps.Location(
        58.35887, 26.66862
    );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: keskpunkt,
        zoom: 11,
        mapTypeId: Microsoft.Maps.MapTypeId.road
    });

    let infobox = new Microsoft.Maps.Infobox(keskpunkt, {
        visible: false
    });

    infobox.setMap(map);

    let ylikool = new Microsoft.Maps.Location(
        58.38104, 26.71992
    );

    let lennujaam = new Microsoft.Maps.Location(
        58.31016, 26.6901
    );

    let pushpin1 = new Microsoft.Maps.Pushpin(ylikool, {
        title: 'Tartu Ülikool',
        description: 'Tartu Ülikool on vanim ja suurim Eestis tegutsev ülikool.'
    });

    let pushpin2 = new Microsoft.Maps.Pushpin(lennujaam, {
        title: 'Tartu Lennujaam',
        description: 'Tartu lennujaam asub Tartu linnast 10 km lõuna pool Kambja vallas.'
    });


    //Add a click event handler to the pushpin.
    Microsoft.Maps.Events.addHandler(pushpin1, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(pushpin2, 'click', pushpinClicked);

    map.entities.push(pushpin1);
    map.entities.push(pushpin2);

}

// https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-concepts/infoboxes/multiple-pushpins-and-infoboxes
function pushpinClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
        //Set the infobox options with the metadata of the pushpin.
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
}