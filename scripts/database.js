const database = {

orderBuilder: {},

    colors: [
        { id: 1, color: "Silver", price: 800},
        { id: 2, color: "Midnight Blue", price: 600},
        { id: 3, color: "Firebrick Red", price: 700},
        { id: 4, color: "Spring Green", price: 500}
    ],
    interiors: [
        { id: 1, fabric: "Beige Fabric", price: 500},
        { id: 2, fabric: "Charcoal Fabric", price: 600},
        { id: 3, fabric: "White Leather", price: 800},
        { id: 4, fabric: "Black Leather", price: 700}
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 500},
        { id: 2, package: "Navigation Package", price: 1000},
        { id: 3, package: "Visibility Package", price: 1000},
        { id: 4, package: "Ultra Package", price: 1800}
    ],
   wheels: [
        { id: 1, rims: "17-inch Pair Radial", price: 500},
        { id: 2, rims: "17-inch Pair Radial Black", price: 1000},
        { id: 3, rims: "18-inch Pair Spoke Silver", price: 700},
        { id: 4, rims: "18-inch Pair Spoke Black", price: 1200}
    ],
    customOrders: [
        {
            id: 1,
            colorId: 3,
            interiorId: 4,
            technologyId: 2,
            wheelId: 3,
            timestamp: 1614659931693
        }
    ]

}

export const setColors = (id) => {
    database.orderBuilder.colorId = id
}

export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnologies = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}