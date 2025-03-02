const traffic_light_components = document.querySelectorAll(".halogen-bulb");
const interpretation = document.querySelectorAll(".interpretation");
var previousLight = null;
var currentLight = null;

const car = {
    element: document.getElementById("car"),
    x: 0,
    xVelocity: 0,
    maxVelocity: 10,
    drive: function() {
        if(this.xVelocity < this.maxVelocity) {
            this.xVelocity += 0.1;
            this.xVelocity = parseFloat(this.xVelocity.toFixed(2));
        }
    },
    slow: function() {
        if(this.xVelocity >= this.maxVelocity/2) {
        this.xVelocity -= 0.1;
        this.xVelocity = parseFloat(this.xVelocity.toFixed(2));
        }
    },
    stop: function() {
        if(this.xVelocity > 0) {
        this.xVelocity -= 0.1;
        this.xVelocity = parseFloat(this.xVelocity.toFixed(2));
        }
    },
    update: function() {
        this.x += this.xVelocity;
        this.element.style.left = this.x + "px";
        if(this.x >= window.innerWidth) this.x = -this.element.offsetWidth;
    }
}

traffic_light_components.forEach((component) => {
    component.addEventListener("click", function () {
        currentLight = previousLight == component ? null : component;
        if (previousLight != null) previousLight.style.backgroundColor = "transparent";

        component.style.backgroundColor =
            previousLight != component
                ? component.getAttribute("data-color")
                : "transparent";

        previousLight = previousLight != component ? component : null;

        interpretation.forEach(element => {
            element.textContent = previousLight != null ? component.getAttribute("data-name") + "!" : "ERROR!";
        });
    });
});

interpretation.forEach(element => {
    element.textContent = previousLight != null ? component.getAttribute("data-name") + "!" : "ERROR!";
});

function carDrive() {
    if(currentLight != null) {
        switch(currentLight.getAttribute("data-name")) {
            case "GO": car.drive(); break;
            case "SLOW": car.slow(); break;
            case "STOP": car.stop(); break;
        }
        car.update();
    }
}

setInterval(carDrive, 1000/60);
