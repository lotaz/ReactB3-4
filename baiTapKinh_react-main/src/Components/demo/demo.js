import React, { Component } from 'react'

export default class Demo extends Component {
    arrProduct = [
        { url: 'https://yt3.ggpht.com/ytc/AKedOLTk_RWI60cnKQNROd3TTA3Ay5XeBg6TRTY9sEps=s900-c-k-c0x00ffffff-no-rj' },
        { url: 'https://i.pinimg.com/originals/5a/bf/21/5abf219774a8c5a376ae081b70c7ccf6.jpg' }
    ];
    state = {
        img: {
            url: 'https://yt3.ggpht.com/ytc/AKedOLTk_RWI60cnKQNROd3TTA3Ay5XeBg6TRTY9sEps=s900-c-k-c0x00ffffff-no-rj'
        }
    }
    changeImg = (itemHinh) => {
        this.setState({
            img: itemHinh
        })
    }
    renderHinh = () => {
        return this.arrProduct.map((item, index)=>{
            return(
                <div >
                    <button onClick={() => {
                        this.changeImg(item)
                    }}>
                        <img src={item.url} style={{width:'200px'}}/>
                    </button>
                </div>
            )
        })
    }
    render() {
        let { url } = this.state.img
        return (
            <div>
                <img src = {url} style={{width:'200px'}}/> 
                <div>
                    {this.renderHinh()}
                </div>

            </div>
           
        )
    }
}
