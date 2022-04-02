import React, { useEffect, useState } from 'react'
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import {post} from "../api"
import FormPayment from '../components/FormPayment'

const stripe = loadStripe("pk_test_51KTd1dCxJ8HWxsAUvHdkJU90wXuUHO4qa4bF5dq3A7kCPWLAiaPnQ4bDpvBqIVMHPdABDwVMODmDff6jl8ok59OJ00SeHORvaW")

export default function Payment() {

    const [clientSecret,setClientSecret] = useState("")

    useEffect(()=>{
        post("/api/payments/intent",{
            amount:100
        })
        .then(({data})=>{
            setClientSecret(data.clientSecret)
        })
    },[])

    

  return (
    <div>
        {clientSecret&&<Elements stripe={stripe} options={{
            clientSecret
        }}>
            <FormPayment/>
        </Elements>}
    </div>
  )
}
