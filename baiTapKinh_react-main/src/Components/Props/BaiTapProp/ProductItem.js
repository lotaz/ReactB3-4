import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { productItem } = this.props
        // console.log(productItem);
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={productItem.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{productItem.tenSP}</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            <button onClick={()=>{this.props.themGioHang(productItem)}}>
                them gio hang
            </button>


            </div>
        )
    }
}