import "./NewCollection.scss"

import {FC, useEffect, useState} from 'react'

import axios from "axios"

interface ProductSchema{
    id:number
    images:string[]
    title:string
    price:number
}

const API_URL:string = "https://dummyjson.com"
const NewCollection:FC = () => {

    const [products, setProducts] = useState< ProductSchema[] | null>(null)

    useEffect(() => {
      axios
          .get(`${API_URL}/products`, {params:{skip:92, limit:3}})
          .then((res:any):void=>{
            setProducts(res.data.products)
          })
    }, [])
    
    let productItems: JSX.Element[] | undefined = products?.map((product:ProductSchema): JSX.Element=>(
        <div className="new__collection__watches__card" key={product.id}>
            <div className="">

            <img src={product.images[0]} width={'200px'} alt="product.img" />
            </div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
    ))
  return (
    <div className="new__collection">
        <div className="new__collection__watches">
            <h3>СЕЗОН <span> 2020/21</span></h3>
            <div className="new__collection__watches__cards">
            {productItems}
            </div>
        </div>
        <div className="new__collection__collect">
            <h3>Новая коллекция</h3>
            <button>Каталог</button>
        </div>
        
    </div>
  )
}

export default NewCollection