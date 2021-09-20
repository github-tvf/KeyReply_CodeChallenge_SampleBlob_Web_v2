import React from 'react';
import { NavLink } from 'react-router-dom';
import { category } from 'components/common'
const NewsView = ({ currentUser, location }) => {
  const [activeMenu, setActiveMenu] = React.useState('all');
  return (
    <>
      <div className="news-page">
        <div className="tvf-container">
          <h3 className="page-title">tin tức sự kiện</h3>
          <ul className="news-menu">
            {
              category.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className={`${activeMenu == item.key ? 'active' : ''}`}>{item.name} </a>
                </li>
              ))
            }
          </ul>
          <div className="row">
            <div className="col-md-7">
              <div className="big-news">
                <NavLink to={'/news/detail'}>
                  <div className="thumb">
                    <img src="/images/thumb.jpg" alt="" className="thumb_img" />
                    <img src="/images/news-gif.png" alt="" className="thumb_trans" />
                  </div>
                  <div className="big-title">
                    <span className="big-cate">Tin Công nghệ</span>
                    <h4 className="news-title"> “Ngày Trí tuệ nhân tạo 2021” – Nơi hội tụ những “siêu sao AI” hàng đầu thế giới</h4>
                    <p className="news-date">23-08-2021</p>
                  </div>
                </NavLink>
              </div>
              <div className="wrap-news">
                <ul className="list-news row">
                  {
                    [1, 2, 3, 4].map((item, idx) => (
                      <li key={idx} className="col-md-6">
                        <NavLink to={'/news/detail'}>
                          <div className="thumb">
                            <img src="/images/thumb.jpg" alt="" className="thumb_img" />
                            <img src="/images/news-gif.png" alt="" className="thumb_trans" />
                          </div>
                          <h4 className="news-title"> “Ngày Trí tuệ nhân tạo 2021” – Nơi hội tụ những “siêu sao AI” hàng đầu thế giới</h4>
                          <p className="news-date">23-08-2021</p>
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <ul className="top-news">
                {
                  [1, 2, 3, 4].map((item, idx) => (
                    <li key={idx}>
                      <NavLink to={'/news/detail'}>
                        <div className="thumb">
                          <img src="/images/thumb.jpg" alt="" className="thumb_img" />
                          <img src="/images/news-gif.png" alt="" className="thumb_trans" />
                        </div>
                        <span className="big-cate">Tin Công nghệ</span>
                        <h4 className="news-title"> “Ngày Trí tuệ nhân tạo 2021” – Nơi hội tụ những “siêu sao AI” hàng đầu thế giới</h4>
                        <p className="news-date">23-08-2021</p>
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsView;
