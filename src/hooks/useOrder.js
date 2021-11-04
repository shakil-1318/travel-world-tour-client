import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useOrder = services => {
    const [order, setOrder] = useState([])

    useEffect(() => {
        if (services.length) {
            const savedOrder = getStoredCart();
            const storedOrder = [];
            for (const key in savedOrder) {
                const addedService = services.find(service => service.key === key);
                if (addedService) {
                    const quantity = savedOrder[key];
                    addedService.quantity = quantity;
                    storedOrder.push(addedService);
                }
                setOrder(storedOrder)
            }
        }
    }, [services])
    return [order, setOrder]
}
export default useOrder;