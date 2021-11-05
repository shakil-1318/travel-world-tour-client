import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://murmuring-river-32108.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
}
export default useServices;