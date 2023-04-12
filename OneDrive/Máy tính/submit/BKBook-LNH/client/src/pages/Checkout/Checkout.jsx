import React, { useEffect, useState } from "react";
import images from "./../../images/index";
import AddButton from "../../components/AddButton/AddButton";
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import { getPriceExpr } from "../../utils/getPriceRepr";

const cx = classNames.bind(styles);

const Checkout = () => {
  const expressDeliveryProvinces = ["TPHCM", "Hà Nội", "Đà Nẵng"];

  const userAddresses = [
    {
      id: "0",
      fname: "Hưng",
      lname: "Nguyễn Minh",
      phone: "0123456789",
      province: "TPHCM",
      district: "Quận 1",
      ward: "Phường 1",
      addr: "123 John Doe",
    },
    {
      id: "1",
      fname: "A",
      lname: "Nguyễn Văn",
      phone: "0987654321",
      province: "Hà Nội",
      district: "Quận Hà Đông",
      ward: "Phường 1",
      addr: "100 Albert Einstein",
    },
    {
      id: "2",
      fname: "B",
      lname: "Lê Thị",
      phone: "0123789456",
      province: "Thanh Hóa",
      district: "Huyện Quảng Xương",
      ward: "Xã ABC",
      addr: "456 Alan Turing",
    },
  ];

  const order = [
    {
      id: "checkoutBook1",
      name: "Thay đổi cuộc sống với nhân số học",
      image: images.checkoutBook1,
      price: 248000,
      discount: 20,
      count: 1,
    },
    {
      id: "checkoutBook2",
      name: "Hiểu Về Trái Tim (Tái Bản 2023)",
      image: images.checkoutBook2,
      price: 158000,
      discount: 25,
      count: 2,
    },
  ];

  const getTotalPrice = (deliveryFee = 0) =>
    getPriceExpr(
      order.reduce((prev, curr) => {
        return prev + curr.price * (1 - curr.discount / 100) * curr.count;
      }, deliveryFee)
    );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressChoice, setAddressChoice] = useState(0); // order: radio and select, top -> down => 0 and up; 0 means the first choice
  const [deliveryMethod, setDeliveryMethod] = useState(0);
  const [hasExpress, setHasExpress] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(0);

  useEffect(() => {
    setName(
      `${userAddresses[addressChoice].lname} ${userAddresses[addressChoice].fname}`
    );
    setPhone(userAddresses[addressChoice].phone);
    setHasExpress(
      expressDeliveryProvinces.includes(userAddresses[addressChoice].province)
    );
  }, [addressChoice]);

  const deliveryMethodTexts = [
    "Thông thường",
    "Nhanh",
    `Hỏa tốc ${!hasExpress ? "(không hỗ trợ)" : ""}`,
  ];

  const deliveryMethods = ["Thông thường", "Nhanh", "Hỏa tốc"];

  const paymentMethods = [
    {
      text: "Ví Momo",
      logo: images.momoLogo,
    },
    {
      text: "Ví ZaloPay",
      logo: images.zalopayLogo,
    },
    {
      text: "ATM / Internet Banking",
      logo: images.atmLogo,
    },
    {
      text: "Thẻ tín dụng (Visa, Mastercard)",
      logo: images.creditcardLogo,
    },
    {
      text: "Thanh toán khi nhận hàng (COD)",
      logo: images.codLogo,
    },
  ];

  return (
    <>
      <h1>Địa chỉ giao hàng</h1>
      <label htmlFor="fullName">Họ và tên người nhận</label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="phone">Số điện thoại</label>
      <input
        type="text"
        name="phone"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="address">Địa chỉ nhận hàng</label>
      <select
        name="address"
        id="address"
        onChange={(e) => {
          setAddressChoice(e.target.value);
          setDeliveryMethod(0);
        }}
        value={0}
      >
        {userAddresses.map((address) => (
          <option key={address.id} value={parseInt(address.id)}>
            {`${address.addr}, ${address.ward}, ${address.district}, ${address.province}`}
          </option>
        ))}
      </select>
      <AddButton />
      <h1>Phương thức vận chuyển</h1>
      {deliveryMethodTexts.map((option, index) => (
        <div key={index}>
          <input
            disabled={!hasExpress && index === 2}
            type="radio"
            value={index}
            name="delivery"
            id={`delivery-${index}`}
            checked={deliveryMethod === index}
            onChange={(e) => {
              setDeliveryMethod(parseInt(e.target.value));
            }}
          />
          <label htmlFor={`delivery-${index}`}>{option}</label>
        </div>
      ))}
      <h1>Phương thức thanh toán</h1>
      {paymentMethods.map((method, index) => (
        <div key={index}>
          <input
            type="radio"
            value={index}
            name="payment"
            id={`payment-${index}`}
            checked={paymentMethod === index}
            onChange={(e) => {
              setPaymentMethod(parseInt(e.target.value));
            }}
          />
          <img src={method.logo} />
          <label htmlFor={`payment-${index}`}>{method.text}</label>
        </div>
      ))}
      <h1>Kiểm tra lại đơn hàng</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Sách</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item, index) => (
            <tr key={item.id}>
              <td>
                <div>{index + 1}</div>
              </td>
              <td>
                <img src={item.image} alt="Book image" />
                <div>{item.name}</div>
              </td>
              <td>
                <div>{getPriceExpr(item.price)}</div>
                <div>
                  {getPriceExpr(item.price, item.discount)}
                </div>
              </td>
              <td>
                <div>{item.count}</div>
              </td>
              <td>
                <div>
                  {getPriceExpr(item.price * item.count, item.discount)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Thành tiền:</div>
      <div>{getTotalPrice()}</div>
      <h1>Xác nhận</h1>
      <p>Họ và tên người nhận:</p>
      <p>{name}</p>
      <p>Số điện thoại:</p>
      <p>{phone}</p>
      <p>Địa chỉ nhận hàng:</p>
      <p>{`${userAddresses[addressChoice].addr}, ${userAddresses[addressChoice].ward}, ${userAddresses[addressChoice].district}, ${userAddresses[addressChoice].province}`}</p>
      <p>Phương thức vận chuyển:</p>
      <p>{deliveryMethods[deliveryMethod]}</p>
      <p>Phương thức thanh toán:</p>
      <p>{paymentMethods[paymentMethod].text}</p>
      <p>Thành tiền:</p>
      <p>{getTotalPrice()}</p>
      <p>Giảm giá:</p>
      <p>{getPriceExpr(0)}</p>
      <p>Vận chuyển:</p>
      <p>{getPriceExpr(15000)}</p>
      <p>Tổng cộng:</p>
      <p>{getTotalPrice(15000)}</p>
      <button>Quay lại giỏ hàng</button>
      <button>Xác nhận đặt hàng</button>
    </>
  );
};

export default Checkout;
