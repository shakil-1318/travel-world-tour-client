// use local storage as your db for now
const addToDb = id => {
    const exists = getDb();
    let shopping_cart = {};
    if (!exists) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updateDb(shopping_cart);
}

const getDb = () => localStorage.getItem('shopping_cart');
const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
}

const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }



// const addToDb = id => {
//     const exists = getDb();
//     let customer_order = {};
//     if (!exists) {
//         customer_order[id] = 1;
//     }
//     else {
//         customer_order = JSON.parse(exists);
//         if (customer_order[id]) {
//             const newOrder = customer_order[id] + 1;
//             customer_order[id] = newOrder;
//         }
//         else {
//             customer_order[id] = 1;
//         }
//     }
//     updateDb(customer_order);
// }
// const getDb = () => {
//     localStorage.getItem('customer_order');
// }

// const updateDb = order => {
//     localStorage.setItem('customer_order', JSON.stringify(order))
// }

// const removeFromDb = id => {
//     const exists = getDb();
//     if (exists) {

//     }
//     else {
//         const customer_order = JSON.parse(exists);
//         delete customer_order[id];
//         updateDb(customer_order);

//     }
// }

// const clearTheOrder = () => {
//     localStorage.removeItem('customer_order');
// }

// export { addToDb, removeFromDb as deleteFromDb, clearTheOrder }