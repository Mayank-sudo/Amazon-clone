import './Rating'

import { useStateValue } from './StateProvider'

const  Caard = (props) => {
    const { title, price, rating, imageURL} = props;
    const  { myReducer } = useStateValue();
    const [ dispatch] = myReducer;
   const clickHandler = (selectedValue) => {
    dispatch({
        type: 'ADD_TO_CART',
        payload: selectedValue
    })

   }

    return(
        <div className="card">
            <p className="title">{title}</p>
            <p className="price">${price}</p>
            <p className="starRating"><rating rating={ rating }/></p>
            <div className="imageHolder">
            <img src={imageURL} alt='' />
            <br />
            <br />
            <button onClick={()=>clickHandler(props)}>Add  TO Cart</button>
            </div>
        </div>
    )
}




export default Caard