import "./Products.scss"

import {FC, Fragment, useEffect, useState} from 'react'

import axios from "axios"

interface ProductsSchema{
    id:number
    images:string[]
    title:string
    price:number
}

const API__URL:string = "https://dummyjson.com"


const Products: FC = () => {
    const [allProducts, setAllProducts] = useState< ProductsSchema[] | null>(null)


    useEffect(() => {
      axios
          .get(`${API__URL}/products`, {params:{skip:92, limit:6}})
          .then((res:any):void=>{
            setAllProducts(res.data.products)
          })
    }, [])
    
    let allProductItems: JSX.Element[] | undefined = allProducts?.map((product:ProductsSchema): JSX.Element=>(
        <div className="products__card" key={product.id}>
            <div className="">

            <img src={product.images[0]}  alt="product.img" />
            </div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
    ))

  return (<Fragment>
    <div className="products">
        <h3 className="products__title">новые поступления</h3>
        <div className="products__cards  container-min">
            {allProductItems}   
        </div>
    </div>
  </Fragment>
  )
}

export default Products