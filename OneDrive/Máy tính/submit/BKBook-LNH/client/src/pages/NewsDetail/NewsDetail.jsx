import React from 'react'

import myData from './data.json';
import images from './../../images/index';

import Detail from '../../components/Editor/Detail';
import './index.css'


const NewsDetail = () => {
  const news = {
    'title': `Nguyễn Nhật Ánh sẽ nhổ neo khỏi thế giới tuổi thơ với 'Những người hàng xóm'?`,
    'createAt': '23/12/2022 14:28 GMT+7',
    'views': 284,
    'content': myData.data,
    'relatedNews': [
      {
        'title': 'Ra mắt phiên bản sách nói toàn bộ tác phẩm của Nguyễn Nhật Ánh',
        'thumbnail': images.newsImageOther1,
      },
      {
        'title': 'Hơn 1.000 độc giả dự buổi ký tặng của nhà văn Nguyễn Nhật Ánh',
        'thumbnail': images.newsImageOther2,
      },
      {
        'title': 'Tôi là Bêtô của Nguyễn Nhật Ánh sẽ được dịch và in bán ở Hàn Quốc',
        'thumbnail': images.newsImageOther3,
      }
    ]
  }

  return (
    <div className='p-5'>
      <h2 className='text-center fw-bold'>{news.title}</h2>
      <div className="text-secondary text-end">{news.createAt}</div>
      <div className="text-secondary text-end">Lượt xem: {news.views}</div>
      <Detail description={news.content} />
      <h4 className='fw-bold mt-2'>Tin tức liên quan</h4>
      <div class="row row-cols-3 px-5 py-4">
        {news.relatedNews.map((related, index) => (
          <div class="col" index={index}>
            <div className="card related-card">
                <div style={{paddingTop:"100%",position:"relative"}}>
                  <img src={related.thumbnail} className="card-img-top"/>
                </div>
                <div className="card-body text-center">
                  <p className="card-text mb-0">{related.title}</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsDetail