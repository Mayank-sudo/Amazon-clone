import React from 'react'
import './ProductList.scss'
import Caard from './Caard'
import { useStateValue } from './StateProvider'


const ProductList = () => {
    const { initialState } = useStateValue();
    return <div className="productList">
        {
           initialState.productList.map((item, index) => <Caard key={index} {...item} />)
        }
    </div>
}




export default ProductList