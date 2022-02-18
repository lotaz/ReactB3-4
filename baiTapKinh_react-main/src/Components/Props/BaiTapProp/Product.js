import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class Product extends Component {
    arrProduct = [
        {
            maSP: 1,
            tenSP: "iphone",
            heDieuHanh: "IOS",
            gia: 300000,
            hinhAnh: "./img/sp_iphoneX.png"
        },
        {
            maSP: 2,
            tenSP: "note",
            heDieuHanh: "IOS",
            gia: 300000,
            hinhAnh: "./img/sp_note7.png"
        },
        {
            maSP: 3,
            tenSP: "vivo",
            heDieuHanh: "IOS",
            gia: 300000,
            hinhAnh: "./img/sp_vivo850.png"
        },
        {
            maSP: 4,
            tenSP: "blackbarry",
            heDieuHanh: "IOS",
            gia: 300000,
            hinhAnh: "./img/sp_blackberry.png"
        }



    ]

    renderProduct = () => {
        return this.arrProduct.map((item, index) => {
            return (
                <div className='col-4' key={index}>
                    <ProductItem productItem={item} 
                     themGioHang = {this.themGioHang} />
                   
                </div>
            )
        })
    }
    themGioHang = (sp) => {
            console.log(sp);
    }

    render() {
        return (
            <div>{this.renderProduct()}</div>
        )
    }
}