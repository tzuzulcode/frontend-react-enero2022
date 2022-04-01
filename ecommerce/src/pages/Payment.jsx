import React, { useEffect, useState } from 'react'
import {Elements, PaymentElement} from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import {post} from "../api"

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
        {console.log(clientSecret)}
        {clientSecret&&<Elements stripe={stripe} options={{
            clientSecret
        }}>
            <form>
                <PaymentElement id='pay'/>
                <button>submit</button>
            </form>
        </Elements>}
    </div>
  )
}
