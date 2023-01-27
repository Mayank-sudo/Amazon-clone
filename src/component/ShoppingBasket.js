import { useStateValue} from './StateProvider'
import './ShoppingBasket.scss'

const ShoppingBasket = () => {
const { myReducer} = useStateValue()
const [state, dispatch] = myReducer

  return(
    <div className="shoppingBasket">
      <h2>Your Shopping Basket</h2>
      <hr/>
      <ul className='list'>
         {
          state.cartList.map((item, index) => (<li key={index}>
            <div className='imageHolder'>
                 <img src={item.imageURL} alt=""/>
              <div>dogfg fgdgfdg fhghghghghg</div>
              <p><strong>{item.title}</strong></p>
              <p>{item.price}</p>
              <div>{item.rating}</div>
              <button>Remove from cart</button>
            </div>
          </li>
         
          ))
         }
      </ul>
    </div>
  )
}

export default ShoppingBasket;