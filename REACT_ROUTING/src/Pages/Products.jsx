import { useParams } from 'react-router-dom'
import BackNavigate from '../components/BackNavigate'
const Product = () => {
  const params = useParams()

  return (
    <div>
        <BackNavigate></BackNavigate>
        <h2>Products page </h2>
        <h3>{params.id}</h3>

    </div>
  )
}

export default Product