import { Technologies} from "./technologies.js"
import { Colors} from "./colors.js"
import { Wheels} from "./wheels.js"
import { Interiors} from "./interiors.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === "orderButton"){
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__technologies options">
                <h2></h2>
                ${Technologies()}
            </section>
            <section class="choices__colors options">
                <h2></h2>
                ${Colors()}
            </section>
            <section class="choices__wheels options">
                <h2></h2>
                ${Wheels()}
            </section>
            <section class="choices__interiors options">
                <h2></h2>
                ${Interiors()}
                
            </section>
        </article id="button">
            <button id="orderButton">Create Custom Order</button>
        <article id="orders">
            <h2>Custom Car Orders</h2>
            ${Orders()}      
        </article>        
    `
}
