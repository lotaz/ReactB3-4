import React, { Component } from 'react'
import Cart from './Cart'
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

    state = {
        productDetail: {
            maSP: 1,
            tenSP: "iphone",
            heDieuHanh: "IOS",
            gia: 300000,
            hinhAnh: "./img/sp_iphoneX.png"

        },
        gioHang: {
            maSP: 1,
            tenSP: "iphone",
            heDieuHanh: "IOS",
            gia: 300000,
            hinhAnh: "./img/sp_iphoneX.png"

        }
    }


    renderProduct = () => {
        return this.arrProduct.map((item, index) => {
            return (
                <div className='col-4' key={index}>
                    <ProductItem productItem={item}
                        themGioHang={this.themGioHang}
                        viewDetail={this.viewDetail}
                    />
                </div>
            )
        })
    }
    themGioHang = (sp) => {
        this.setState({ gioHang: sp })
    }

    viewDetail = (itemClick) => {
        this.setState({ productDetail: itemClick })
        console.log(itemClick);
    }

    render() {
        let {
            maSP, tenSP, heDieuHanh, gia, hinhAnh
        } = this.state.productDetail;

        return (
            <div>
                <div>
                    <Cart gioHang={this.state.gioHang} />
                </div>
                {tenSP}
                <img src={hinhAnh} />
                {this.renderProduct()}

            </div>
        )
    }
}