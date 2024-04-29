fetch("./profile.JSON")
.then(response => response.json())
.then(Data => loadProfile(Data));

//ppossibly ad search funtionality laterS
    
function loadProfile(Data) {
    //first container, user info
    let container1 = document.getElementById("container1");
    container1.innerHTML = `
    <div class="text-center">
        <img src = ${Data.profile.url} width="500" height="300" style="border-radius: 50%;">
        <div class="my-3 py-3">
            <h2 class="display-5">${Data.profile.name}</h2>
            <p class="lead">Joined: ${Data.profile.joined}</p>
            <p class="lead">${Data.profile.bio}</p>
            <hr>
        </div>
    </div>
    `;
    
    //second container, challenges
    let container2 = document.getElementById("container2");
    container2.innerHTML = ``;
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
        container2.appendChild(div);
    }

    //third container achievements
    let container3 = document.getElementById("container3");
    container3.innerHTML = ``;
    for (achievement of Data.achievements){
        console.log(achievement);
        let div = document.createElement("div");
        div.innerHTML = ` 
        <div class="my-md-3 ps-md-3" style="display: inline-block; float:none;">
            <div class="text-bg-dark me-md-3 text-center overflow-hidden">
                <img src = ${achievement.url} width="500" height="300">
                <div class="my-3 py-3" style="width: 500px; height: 200px">
                    <h2 class="display-5">${achievement.title}</h2>
                    <p class="lead">${achievement.description}</p>
                </div>
            </div>
        </div>`;
        container3.appendChild(div);
    }
}