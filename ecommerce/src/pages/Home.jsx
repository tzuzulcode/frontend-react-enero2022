import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Home() {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    axios.get("https://backendtzuzulcode.wl.r.appspot.com/api/products?populate=*&filters[user][id]=1",{
      headers:{
        "Authorization":"Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ5NTM3Njc5LCJleHAiOjE2NTIxMjk2Nzl9.vTlFRa4BEKzv6YFbuUdt7xCv0MU0CqSeLHFGHx7cuzs"
      }
    })
    .then(({data})=>{
      setProducts(data.data)
    })

  },[])
  return (
    <div>
      <h1 data-test="h1">Home</h1>
      <section data-test="products">
        {products.map((product)=>{
          return <article key={product.id} className='product-item'>
            <h2>{product.attributes.name}</h2>
          </article>
        })}
        
      </section>
    </div>
  )
}
