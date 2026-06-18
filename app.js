const sollwerte = {
    "100.4162.02": {
        AG10:316,
        AG20:316,
        AG30:200,
        AG40:222
    },

    "100.4451.01": {
        AG10:222,
        AG20:143,
        AG30:240
    },

    "100.4706.00": {
        AG10:300,
        AG20:300,
        AG30:300
    }
};

let aktuellerSoll = 0;

function auftragStarten(){

    const bg =
        document.getElementById("baugruppe").value;

    const ag =
        document.getElementById("ag").value;

    aktuellerSoll =
        sollwerte[bg][ag] || 0;

    document.getElementById("soll").innerText =
        aktuellerSoll;

    document.getElementById("produktion")
        .style.display = "block";
}

function berechnen(){

    const ist =
        Number(
            document.getElementById("ist").value
        );

    const prozent =
        (ist / aktuellerSoll * 100).toFixed(1);

    document.getElementById("ergebnis").innerText =
        prozent + " %";
}
