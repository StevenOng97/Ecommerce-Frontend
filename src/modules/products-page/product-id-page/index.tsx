import "./style.scss"
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsById } from '../../../redux/actions/products';

import DirectoryPath from "../../../components/DirectoryPath/DirectoryPath"
import ProductDetail from "./ProductDetail/ProductDetail"

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentProduct = useSelector((state: any) => state.products.product)
  const isLoading = useSelector((state: any) => state.products.isLoading)

  useEffect(() => {
    dispatch(fetchProductsById(id))
    window.scroll(0, 0);
  }, []);

  return (
      <div className="container single-product-wrapper">
        {!isLoading && currentProduct &&
          <div>
            <DirectoryPath currentProduct={currentProduct} />
            <ProductDetail currentProduct={currentProduct} />
          </div>
        }
      </div>
  )
}

export default Product