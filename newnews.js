fetch("newnews.json")
.then(function(response){
    return response.json();
})
.then(function(newnews){
    let placeholder = document.querySelector(".beritabaru");
    let out = "";
    for(let newnew of newnews){
        out += `
        <li class="row">
            <div class="col-lg-3">
                <center>
                <img src="${newnew.image.src}" style="width: ${newnew.image.width}px; height: ${newnew.image.height}px;">
                </center>
                <br><br>
                <h5 style="color: grey;">${newnew.date}</h5><br>
                <h3 style="color: rgb(1,34,105);">${newnew.title}</h3>
            </div>
        </li>
        `
    }

    placeholder.innerHTML = out;
})
