import React from 'react'
import { useState } from "react";

// import boostrap
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// charjs
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, Line } from "react-chartjs-2";

import images from '../../../images/index';
import { getPriceExpr } from '../../../utils/getPriceRepr';

import './style.css'
import classNames from "classnames/bind"
import styles from "./Dashboard.module.scss"
const cx = classNames.bind(styles)

const Dashboard = () => {
  const week = {
    weekNo: 12,
    from: "27/03/2023",
    to: "02/03/2023"
  }

  const monthlyStats = [
    {
      text: "Tổng doanh số",
      value: 56785,
      growth: 62,
      bgColor: "#A871ED",
    },
    {
      text: "Tổng đơn hàng",
      value:678,
      growth: 12,
      bgColor: "#F3B350",
    },
    {
      text: "Lượt truy cập",
      value:45678,
      growth: -45,
      bgColor: "#45DDC7",
    },
  ]

  const statHistory = [
    {
      month:"07/2022",
      sale: 45612,
      order: 456,
      view: 2595,
    },
    {
      month:"08/2022",
      sale: 47656,
      order: 501,
      view: 2946,
    },
    {
      month:"09/2022",
      sale: 48621,
      order: 624,
      view: 3056,
    },
    {
      month:"10/2022",
      sale: 46156,
      order: 359,
      view: 2456,
    },
    {
      month:"11/2022",
      sale: 50546,
      order: 684,
      view: 3261,
    },
    {
      month:"12/2022",
      sale: 51345,
      order: 700,
      view: 2469,
    },
    {
      month:"01/2023",
      sale: 50648,
      order: 615,
      view: 456,
    },
    {
      month:"02/2023",
      sale: 53599,
      order: 650,
      view: 2600,
    },
  ]

  const [saleData, setsaleData] = useState({
    labels: statHistory.map((data) => data.month), 
    datasets: [
      {
        label: "Doanh số",
        data: statHistory.map((data) => data.sale),
        backgroundColor: monthlyStats[0].bgColor,
      }
    ]
  });

  const [orderData, setorderData] = useState({
    labels: statHistory.map((data) => data.month), 
    datasets: [
      {
        label: "Đơn hàng",
        data: statHistory.map((data) => data.order),
        backgroundColor: monthlyStats[1].bgColor,
        borderColor: monthlyStats[1].bgColor,
      }
    ]
  });

  const [viewData, setviewData] = useState({
    labels: statHistory.map((data) => data.month), 
    datasets: [
      {
        label: "Lượt xem",
        data: statHistory.map((data) => data.view),
        backgroundColor: monthlyStats[2].bgColor,
        fill:true,
        tension:0.4
      }
    ]
  });

  return (
    <>
      <div className="text-secondary fst-italic mb-1" style={{fontSize: "0.9rem"}}>Tuần {week.weekNo}: {week.from} - {week.to}</div>
      <div className="row row-cols-3">
        {monthlyStats.map((stat, index) => (
          <div className="col" key={index}>
            <div className={`p-4 rounded ${cx("stat-card")}`} style={{backgroundColor:stat.bgColor}}>    
              <div className="mb-3">{stat.text}</div>
              <h1 className="mb-2 text-center">{stat.value}</h1>
              <div className="fst-italic" style={{fontSize: "0.9rem"}}>
                {`${stat.growth<=0?"Giảm":"Tăng"} ${Math.abs(stat.growth)}% so với tháng trước`}
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="row row-cols-2 g-4" style={{marginTop:"30px"}}>
      
        <div className="col">
          <div className={`p-4 rounded ${cx("chart-container")}`}>
            <h4>Thống kê doanh số</h4>
            <Bar
              data={saleData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                }
              }}
            />
          </div>
        </div>

        <div className="col">
          <div className={`p-4 rounded ${cx("chart-container")}`}>
            <h4>Thống kê đơn hàng</h4>
            <Line
              data={orderData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                }
              }}
            />
          </div>
        </div>

        <div className="col">
          <div className={`p-4 rounded ${cx("chart-container")}`}>
            <h4>Thống kê lượt truy cập</h4>
            <Line
              data={viewData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard