fetch("Interests.json")
.then(function(response){
    return response.json();
})
.then(function(Interests){
    let placeholder = document.querySelector(".carousel");
    let out = "";
    for(let Interest of Interests){
        out += `
        <li class="card">
        <center>
            <div class="img">
                <img src="${Interest.image}">
                <br>
                <h5 style="color: rgb(1,34,105);">${Interest.title}</h5>
            </div>
            </center>
        </li>
        `
    }

    placeholder.innerHTML = out;
})



const carousel = document.querySelector(".carousel");

let isDragging = false;

const dragStart = () => {
    isDragging = true;
    carousel.classList.add("dragging");
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
}

const dragstop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragstop);