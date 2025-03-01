const traffic_light_components = document.querySelectorAll(".halogen-bulb");
const interpretation = document.querySelectorAll(".interpretation");
var previousLight = null;

traffic_light_components.forEach((component) => {
    component.addEventListener("click", function () {
        if (previousLight != null)
            previousLight.style.backgroundColor = "transparent";
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