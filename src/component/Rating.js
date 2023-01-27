import { FaStar } from 'react-icons/fa'


const Rating = ({Rating}) => {
  return ( Array(3).fill().map((item, i) => <Start key={i} />)
  )
}

const Start = ({ selected }) => 
    <FaStar  color={selected ? 'red' : 'gray'}/>


export default Rating