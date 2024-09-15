import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const { url } = useContext(StoreContext)
    const navigate = useNavigate()
    const verifypayment = async () => {
        const response = await axios.post(url + "/api/order/verify", { success, orderId })
        if (response.data.success) {
            navigate("/myorders")
        } else {
            navigate("/")
        }
    }

    useEffect(() => {
        verifypayment()
    }, [])

    return (
        <div className='verify'>
            <div className="spinner">

            </div>
        </div>
    )
}

export default Verify
