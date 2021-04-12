function golfScore(par, strokes) {
    par = Math.floor(Math.random()*10);
    document.getElementById("par").innerHTML = par;
    strokes = Math.floor(Math.random()*10);
    document.getElementById("strokes").innerHTML = strokes;

    return (strokes == 1) ? document.getElementById("Results").innerText = "Hole-in-one!" :
    (strokes <= par -2)? document.getElementById("Results").innerText = "Eagle":
    (strokes == par -1)? document.getElementById("Results").innerText = "Birdie":
    (strokes == 0  || par == 0)? document.getElementById("Results").innerText = "N/A":
    (strokes == par)? document.getElementById("Results").innerText = "Par":
    (strokes == par +1)? document.getElementById("Results").innerText = "Bogey":
    (strokes == par +2)? document.getElementById("Results").innerText = "Double Bogey":
    document.getElementById("Results").innerText = "Go Home (Git Gud)";

}