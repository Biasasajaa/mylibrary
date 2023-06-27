fetch("Scigenres.json")
.then(function(response){
    return response.json();
})
.then(function(Scigenres){
    let placeholder = document.querySelector(".scicar");
    let out = "";
    for(let genre of Scigenres){
        out += `
        <li class="card2">
        <center>
            <div class="img2">
                <img src="${genre.image.src}" style="width: ${genre.image.width}px; height: ${genre.image.height}px;">
                <br>
                <h5 style="color: rgb(1,34,105);">${genre.title}</h5>
            </div>
            </center>
        </li>
        `
    }

    placeholder.innerHTML = out;
})


const scicar = document.querySelector(".scicar");

let isDragging2 = false;

const dragStart2 = () => {
    isDragging2 = true;
    scicar.classList.add("dragging2");
}

const dragging2 = (e) => {
    if(!isDragging2) return;
    scicar.scrollLeft = e.pageX;
}

const dragstop2 = () => {
    isDragging2 = false;
    scicar.classList.remove("dragging2");
}


scicar.addEventListener("mousedown", dragStart2);
scicar.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragstop2);
