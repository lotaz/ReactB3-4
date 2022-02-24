import React, { Component } from 'react'

export default class Cart extends Component {

  renderGioHang = () => {
    let {gioHang} = this.props;
    return(
      <tr>
      <td>{gioHang.maSP}</td>
      <td>{gioHang.tenSP}</td>
      <td>{gioHang.heDieuHanh}</td>
      <td>{gioHang.gia}</td>
      <td><img src={gioHang.hinhAnh} /></td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h1>Gio Hang</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Ma sp</th>
              <th>Ten sp</th>
              <th> he dieu hanh</th>
              <th>gia</th>
              <th>hinh anh</th>
              <th>thanh tien</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>   
        </div>
    )
  }
}
