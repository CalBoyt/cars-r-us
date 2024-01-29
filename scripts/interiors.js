import { getInteriors, setInteriors } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            setInteriors(parseInt(changeEvent.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"
    html += "<select id='interiors'>"
    html += '<option value="0">Please Select Your Option...</option>'
        
        const listItems = interiors.map(interiors => {
            return `
                <option value="${interiors.id}"> ${interiors.fabric}</option>`
        })
        html += listItems.join("")
    
        html += "</select>"
        return html
    
    
}