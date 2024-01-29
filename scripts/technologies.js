import { getTechnologies, setTechnologies } from "./database.js";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technologies") {
            setTechnologies(parseInt(changeEvent.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"
html += "<select id='technologies'>"
html += '<option value="0">Please Select Your Option...</option>'
    
    const listItems = technologies.map(tech => {
        return `
            <option value="${tech.id}"> ${tech.package}</option>`
    })
    html += listItems.join("")

    html += "</select>"
    return html

}

