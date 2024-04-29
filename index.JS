fetch("./index.JSON")
.then(response => response.json())
.then(Data => loadChallenges(Data));

//ppossibly ad search funtionality laterS
    
function loadChallenges(Data) {
    let mainContainer = document.getElementById("container");
    mainContainer.innerHTML = ``;
    for (challenge of Data.challenges){
        console.log(challenge);
        let div = document.createElement("div");
        div.innerHTML = ` 
        <div class="my-md-3 ps-md-3" style="display: inline-block; float:none;">
            <div class="text-bg-dark me-md-3 text-center overflow-hidden">
                <img src = ${challenge.url} alt=${challenge.alt} width="500" height="300">
                <div class="my-3 py-3" style="width: 500px; height: 200px">
                    <h2 class="display-5">${challenge.title}</h2>
                    <p class="lead">${challenge.description}</p>
                </div>
            </div>
        </div>`;
        mainContainer.appendChild(div);
    }
}
