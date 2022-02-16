import React, { Component } from 'react'

export default class BaiTapKinh extends Component {
    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: '.././img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: '.././img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: '.././img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: '.././img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: '.././img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: '.././img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: '.././img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: '.././img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: '.././img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];
    state = {
        kinh: {
            id: 1,
            price: 30,
            name: 'GUCCI G8850U', url: './glassesImage/v1.png',
            url:'.././img/v1.png',
            desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }
    }

    changeKinh = (itemKinh) => {
        this.setState({
            kinh: itemKinh
        })
    }
    renderKinh = () => {
        return this.arrProduct.map((item, index) => {
            return (
                <div className='col-12 mt-5'>
                    <button onClick={() => {
                        this.changeKinh(item)
                    }} className='btn ml-2'>
                        <img src={item.url} />
                    </button>

                </div>

            )
        })
    }

    render() {
        let { id, name, url, desc } = this.state.kinh
        return (
            <div>
                <div>
                    <img src=".././img/background.jpg" height="800" width="100%" />
                </div>
                <div className='row mt-5'>
                    <div className='col-6' style={{ position: "relative" }}>
                        <div>
                            <img src=".././img/model.jpg" height="300" />
                        </div>

                        <div style={{ position: "absolute", top: 80, left: 312 }}>
                            <img src={url} height="40px" />
                        </div>
                    </div>
                </div>

                <div>{this.renderKinh()}</div>
            </div>


        )
    }
}
