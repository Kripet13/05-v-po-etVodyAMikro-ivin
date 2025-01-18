function calculateWaterInTake() {
    let weight = document.getElementById("weight").value;
    let activityHours = document.getElementById("activity").value;
    let waterInTake = (weight * 0.03) + (activityHours * 0.5);

        if (waterInTake < 2) {
        document.getElementById("showResult").innerText = "Nízký příjem vody, doporučuje se více pít.";
        } else if (waterInTake >= 2 && waterInTake <= 3) {
        document.getElementById("showResult").innerText = "Dostatečný příjem vody.";
        } else if (waterInTake > 3) {
        document.getElementById("showResult").innerText = "Vysoký příjem vody, doporučuje se přzpůsobit.";
        }
    document.querySelector("button[onclick='restart()']").hidden = false;
    document.querySelector("button[onclick='end()']").hidden = false;
}

function calculateMacros() {
    let weightTwo = parseFloat(document.getElementById("weightTwo").value);
    let gender = document.getElementById("gender").value;
    let goals = document.getElementById("goals").value;

    let protein, sacharid, fat;

        switch (gender) {
            case 'fm' :
                if (goals === 'weightLoss') {
                   protein = weightTwo * 1.4;
                   sacharid = weightTwo * 1.8;
                   fat = weightTwo * 0.7;
                } else if (goals === 'muscleGain') {
                    protein = weightTwo * 1.8;
                    sacharid = weightTwo * 3.6;
                    fat = weightTwo * 0.9;
                } else if (goals === 'weightHold') {
                    protein = weightTwo * 1.6;
                    sacharid = weightTwo * 2.7;
                    fat = weightTwo * 0.8;
                }
            break;
        
            case 'ml' :
                if (goals === 'weightLoss') {
                    protein = weightTwo * 1.6;
                    sacharid = weightTwo * 2.0;
                    fat = weightTwo * 0.8;
                } else if (goals === 'muscleGain') {
                    protein = weightTwo * 2.0;
                    sacharid = weightTwo * 4.0;
                    fat = weightTwo * 1.0;
                } else if (goals === 'weightHold') {
                    protein = weightTwo * 1.8;
                    sacharid = weightTwo * 3.0;
                    fat = weightTwo * 0.9;
                }
            break;
        }

        document.getElementById("recommend").innerText = `Denní příjem: Protein: ${protein.toFixed(2)} g, Sacharidy: ${sacharid.toFixed(2)} g, Tuky: ${fat.toFixed(2)} g.`;

        document.querySelector("button[onclick='restart()']").hidden = false;
        document.querySelector("button[onclick='end()']").hidden = false;
}

function restart() {
    document.getElementById("weight").value = "";
    document.getElementById("activity").value = "";
    document.getElementById("weightTwo").value = "";
    document.getElementById("showResult").value = "";
    document.getElementById("gender").value = "none";
    document.getElementById("goals").value = "none";
    document.getElementById("showResult").textContent = "";
    document.getElementById("recommend").textContent = "";
    document.querySelector("button[onclick='restart()']").hidden = true;
    document.querySelector("button[onclick='end()']").hidden = true;
}

function end() {
    window.close()
}