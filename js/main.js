function menu() {
    document.getElementById("dropik").classList.toggle("show");
}

function lang_change() {
    let lang_value = document.getElementById("lang").value;
   let elements =  document.querySelectorAll(`[lang-${lang_value}]`)
    for(let element of elements){
        element.innerText = element.getAttribute(`lang-${lang_value}`);
    }
}
const img = (img) => {
    const image = document.createElement("img")
    image.src = document.getElementById("files").files
    document.getElementById("lister").appendChild(image)
}

