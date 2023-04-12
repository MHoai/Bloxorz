import React, { useEffect, useState } from 'react'
import images from './../../images/index';
import AddButton from '../../components/AddButton/AddButton';
import classNames from "classnames/bind"
import styles from "./Checkout.module.scss"
import { getPriceExpr } from '../../utils/getPriceRepr';
// this file is deprecated, don't use this
const cx = classNames.bind(styles)

const Checkout = () => {

  const expressDeliveryProvinces = ["TPHCM", "Hà Nội", "Đà Nẵng"]

  const userAddresses = [
    {
      id: "0",
      fname: "Hưng",
      lname: "Nguyễn Minh",
      phone: "0123456789",
      province: "TPHCM",
      district: "Quận 1",
      ward: "Phường 1",
      addr: "123 John Doe"
    },
    {
      id: "1",
      fname: "A",
      lname: "Nguyễn Văn",
      phone: "0987654321",
      province: "Hà Nội",
      district: "Quận Hà Đông",
      ward: "Phường 1",
      addr: "100 Albert Einstein"
    },
    {
      id: "2",
      fname: "B",
      lname: "Lê Thị",
      phone: "0123789456",
      province: "Thanh Hóa",
      district: "Huyện Quảng Xương",
      ward: "Xã ABC",
      addr: "456 Alan Turing"
    },
  ]

  const order = [
    {
      id: "checkoutBook1",
      name: "Thay đổi cuộc sống với nhân số học",
      image: images.checkoutBook1,
      price: 248000,
      discount: 20,
      count: 1
    },
    {
      id: "checkoutBook2",
      name: "Hiểu Về Trái Tim (Tái Bản 2023)",
      image: images.checkoutBook2,
      price: 158000,
      discount: 25,
      count: 2
    },
  ]

  const getTotalPrice = (deliveryFee) =>
    getPriceExpr(
      order.reduce((prev, curr) => {
        return prev + curr.price * (1 - curr.discount / 100) * curr.count;
      }, deliveryFee)
    );
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressChoice, setAddressChoice] = useState(0);      // order: radio and select, top -> down => 0 and up; 0 means the first choice
  const [deliveryMethod, setDeliveryMethod] = useState(0);
  const [hasExpress, setHasExpress] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(0);
  
  useEffect(() => {
    setName(`${userAddresses[addressChoice].lname} ${userAddresses[addressChoice].fname}`)
    setPhone(userAddresses[addressChoice].phone)
    setHasExpress(expressDeliveryProvinces.includes(userAddresses[addressChoice].province))
  }, [addressChoice])

  const deliveryMethodTexts = ["Thông thường", "Nhanh", `Hỏa tốc ${!hasExpress ? "(không hỗ trợ)" : ""}`]
  
  const deliveryMethods = ["Thông thường", "Nhanh", "Hỏa tốc"]

  const paymentMethods = [
    {
      text: "Ví Momo",
      logo: images.momoLogo
    },
    {
      text: "Ví ZaloPay",
      logo: images.zalopayLogo
    },
    {
      text: "ATM / Internet Banking",
      logo: images.atmLogo
    },
    {
      text: "Thẻ tín dụng (Visa, Mastercard)",
      logo: images.creditcardLogo
    },
    {
      text: "Thanh toán khi nhận hàng (COD)",
      logo: images.codLogo
    },
  ]

  return (
    <div className={cx("container")}>
      <div className={cx("address", "section-container")}>
        <div className={cx("section-layout")}>
          <h1 className={cx("section-title")}>Địa chỉ giao hàng</h1>
          <div className={cx("address-content")}>
            <div className={cx("address-top")}>
              <div className={cx("address-top-left")}>
                <label htmlFor="fullName" className={cx("address-label")}>Họ và tên người nhận</label>
                <input type="text" name="fullName" id="fullName" className={cx("address-input")} value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className={cx("address-top-right")}>
                <label htmlFor="phone" className={cx("address-label")}>Số điện thoại</label>
                <input type="text" name="phone" id="phone" className={cx("address-input")} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className={cx("address-bottom")}>
              <div className={cx("address-bottom-select")}>
                <label htmlFor="address" className={cx("address-label")}>Địa chỉ nhận hàng</label>
                <select name="address" id="address" className={cx("address-input")} onChange={(e) => {
                  setAddressChoice(e.target.value)
                  setDeliveryMethod(0)
                }} value={0}>
                  {userAddresses.map(address => (
                    <option key={address.id} value={parseInt(address.id)}>
                      {`${address.addr}, ${address.ward}, ${address.district}, ${address.province}`}
                    </option>
                   ))}
                </select>
              </div>
              <div className={cx("address-bottom-button")}>
                <AddButton />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={cx("delivery", "section-container")}>
        <div className={cx("section-layout")}>
          <h1 className={cx("section-title")}>Phương thức vận chuyển</h1>
          <div className={cx("delivery-content")}>
            <div className={cx("radios-container")}>
              {deliveryMethodTexts.map((option, index) => (
                <div className={cx("delivery-radio-container")} key={index}>
                <input disabled={!hasExpress && index === 2} type="radio" value={index} name="delivery" id={`delivery-${index}`} className={cx("delivery-radio")} checked={deliveryMethod === index} onChange={(e => {
                  setDeliveryMethod(parseInt(e.target.value))
                })} />
                <label htmlFor={`delivery-${index}`}>{option}</label>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={cx("payment", "section-container")}>
        <div className={cx("section-layout")}>
          <h1 className={cx("section-title")}>Phương thức thanh toán</h1>
          <div className={cx("payment-content")}>
            <div className={cx("radios-container")}>
              {paymentMethods.map((method, index) => (
                <div className={cx("payment-radio-container")} key={index}>
                  <input type="radio" value={index} name="payment" id={`payment-${index}`} className={cx("payment-radio")} checked={paymentMethod === index} onChange={(e => {
                    setPaymentMethod(parseInt(e.target.value))
                  })} />
                  <div className={cx("payment-radio-right")}>
                    <img className={cx("payment-radio-logo")} src={method.logo} />
                    <label className={cx("payment-radio-text")} htmlFor={`payment-${index}`}>{method.text}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={cx("order", "section-container")}>
        <h1 className={cx("section-title")}>Kiểm tra lại đơn hàng</h1>
        <div className={cx("order-content")}>
          <table className={cx("table")}>
            <thead className={cx("table-header")}>
              <tr className={cx("table-header-row")}>
                <th className={cx("table-header-cell")}>#</th>
                <th className={cx("table-header-cell")}>Sách</th>
                <th className={cx("table-header-cell")}>Đơn giá</th>
                <th className={cx("table-header-cell")}>Số lượng</th>
                <th className={cx("table-header-cell")}>Thành tiền</th>
              </tr>
            </thead>
            <tbody className={cx("table-body")}>
              {order.map((item, index) => (
                <tr key={item.id} className={cx("table-body-row")}>
                  <td className={cx("table-body-cell")}>
                    <div className={cx("book-index")}>{index}</div>
                  </td>
                  <td className={cx("table-body-cell")}>
                    <img src={item.image} alt="Book image" className={cx("book-image")} />
                    <div className={cx("book-name")}>{item.name}</div>
                  </td>
                  <td className={cx("table-body-cell")}>
                    <div className={cx("book-price")}>{getPriceExpr(item.price)}</div>
                    <div className={cx("book-price-discount")}>{getPriceExpr(item.price, item.discount)}</div>
                  </td>
                  <td className={cx("table-body-cell")}>
                    <div className={cx("book-count")}>{item.count}</div>
                  </td>
                  <td className={cx("table-body-cell")}>
                    <div className={cx("book-total")}>{getPriceExpr(item.count * item.price, item.discount)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={cx("total")}>
            <div className="total-text">Thành tiền:</div>
            <div className="total-price">{getTotalPrice()}</div>
          </div>
        </div>
      </div>
      <div className={cx("confirm", "section-container")}>
        <h1 className={cx("section-title")}>Xác nhận</h1>
        <div className={cx("confirm-content")}>
          <div className={cx("confirm-left")}>
            <div className={cx("confirm-item-container")}>
              <p className={cx("confirm-item-key")}>Họ và tên người nhận:</p>
              <p className={cx("confirm-item-value")}>{name}</p>
            </div>
            <div className={cx("confirm-item-container")}>
              <p className={cx("confirm-item-key")}>Số điện thoại:</p>
              <p className={cx("confirm-item-value")}>{phone}</p>
            </div>
            <div className={cx("confirm-item-container")}>
              <p className={cx("confirm-item-key")}>Địa chỉ nhận hàng:</p>
              <p className={cx("confirm-item-value")}>{`${userAddresses[addressChoice].addr}, ${userAddresses[addressChoice].ward}, ${userAddresses[addressChoice].district}, ${userAddresses[addressChoice].province}`}</p>
            </div>
            <div className={cx("confirm-item-container")}>
              <p className={cx("confirm-item-key")}>Phương thức vận chuyển:</p>
              <p className={cx("confirm-item-value")}>{deliveryMethods[deliveryMethod]}</p>
            </div>
            <div className={cx("confirm-item-container")}>
              <p className={cx("confirm-item-key")}>Phương thức thanh toán:</p>
              <p className={cx("confirm-item-value")}>{paymentMethods[paymentMethod].text}</p>
            </div>
          </div>
          <div className={cx("confirm-right")}>
            <div className={cx("confirm-right-top")}>
              <div className={cx("confirm-item-container")}>
                <p className={cx("confirm-item-key")}>Thành tiền:</p>
                <p className={cx("confirm-item-value")}>{getTotalPrice()}</p>
              </div>
              <div className={cx("confirm-item-container")}>
                <p className={cx("confirm-item-key")}>Giảm giá:</p>
                <p className={cx("confirm-item-value")}>{getPriceExpr(0)}</p>
              </div>
              <div className={cx("confirm-item-container")}>
                <p className={cx("confirm-item-key")}>Vận chuyển:</p>
                <p className={cx("confirm-item-value")}>{getPriceExpr(15000)}</p>
              </div>
            </div>
            <div className={cx("confirm-right-bottom")}>
              <div className={cx("confirm-item-container")}>
                <p className={cx("confirm-total-key")}>Tổng cộng:</p>
                <p className={cx("confirm-total-value")}>{getTotalPrice()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("confirm-bottom-buttons")}>
          <button className={cx("total-button-back")}>Quay lại giỏ hàng</button>
          <button className={cx("total-button-purchase")}>Xác nhận đặt hàng</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout