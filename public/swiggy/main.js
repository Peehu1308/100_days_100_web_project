document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("color").style.backgroundColor = "rgb(255, 81, 0)";
    
    document.querySelectorAll(".button1").forEach(element => {
        element.style.padding = "5px";
    });
    
    document.querySelector("h1").style.textAlign = "center";
    
    const searchElement = document.querySelector(".search");
    if (searchElement) {
        searchElement.style.display = "flex";
        searchElement.style.flexDirection = "row";
    }
    
    const task1 = document.querySelector(".color");
    const task2 = document.querySelector(".title");
    
    if (task1) {
        Object.assign(task1.style, {
            margin: "0",
            top: "0",
            padding: "0",
            left: "0",
            right: "0",
            width: "100%",
            marginTop: "0",
            display: "flex",
            justifyContent: "center"
        });
    }
    
    if (task2) {
        Object.assign(task2.style, {
            margin: "0",
            top: "0",
            padding: "0",
            left: "0",
            right: "0",
            width: "100%",
            marginTop: "0"
        });
    }
});