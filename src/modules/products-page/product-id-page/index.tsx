import React from 'react'
import "./style.scss"
import Layout from '../../main-layout'
import { useParams } from "react-router-dom"

function Product() {
    const { id } = useParams();

    return (
        <Layout>
            <div className="container single-product-wrapper">
                <div className="directory-wrapper">
                    <ul className="directory-list">
                        <li className="directory-item">Home</li>
                        <li className="directory-item">Men's</li>
                        <li className="directory-item">Single Product</li>
                    </ul>
                </div>
                <div className="single-product-detail">
                    {id}
                </div>
            </div>
        </Layout>
    )
}

export default Product