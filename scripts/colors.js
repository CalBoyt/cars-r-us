import { getColors, setColors } from "./database.js";

const colors = getColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "colors") {
            setColors(parseInt(changeEvent.target.value))
        }
    }
)

export const Colors = () => {
    let html = "<h2>Colors</h2>"
    html += "<select id='colors'>"
    html += '<option value="0">Please Select Your Option...</option>'
        
        const listItems = colors.map(colors => {
            return `
                <option value="${colors.id}"> ${colors.color}</option>`
        })
        html += listItems.join("")
    
        html += "</select>"
        return html
    
    
}