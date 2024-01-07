import { useState } from "react"
import axios from "axios"


const useFetch = (url) => {
    
    const [response, setResponse] = useState()
    const [hasError, setHasError] = useState(false)
    
    const getAapi = () => {
        axios.get(url)
            .then(res => {
                setResponse(res.data)
                setHasError(false)
            })
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
    }

return [response, getAapi, hasError]
}

export default useFetch
