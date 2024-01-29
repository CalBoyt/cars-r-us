import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"
html += "<select id='wheels'>"
html += '<option value="0">Please Select Your Option...</option>'
    
    const listItems = wheels.map(wheels => {
        return `
            <option value="${wheels.id}"> ${wheels.rims}</option>`
    })
    html += listItems.join("")

    html += "</select>"
    return html

}
