import React, { useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import {
  getAllBlogs
} from '../modules/actions'
import moment from 'moment';
//slick setting
const pagesize = 10000
const pagenumber = 1
const settings = {
  dots: !1,
  infinite: !1,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: !0,
  autoplaySpeed: 5e3,
  arrows: !1,
  centerPadding: '40px',
};
const HomeView = ({ currentUser, getAllBlogs, home }) => {
  useEffect(() => {
    getAllBlogs(pagesize, pagenumber)
  }, []);
  console.log(home.listBlog.filter(rw => rw.category === 'Hot'))
  return (
    <>
      <div className="home-page">
        <section className="home-banner animated animate__fadeInUp">
          <img src="/images/Landmark81banner.jpg" alt="" />
        </section>
        <section className="news">
          <div className="tvf-container">
            <h3 className="page-title">Tin Tức Sự Kiện</h3>
            <ul className="list-news">
              {
                home.listBlog.length > 0 &&
                home.listBlog.filter(rw => rw.category === 'Hot').map((post, idx) => (
                  <li key={idx}>
                    <NavLink to={'/news'}>
                      <div className="thumb">
                        <img src="/images/thumb.jpg" alt="" className="thumb_img" />
                        <img src="/images/news-gif.png" alt="" className="thumb_trans" />
                      </div>
                      <h4 className="news-title"> {post.title}</h4>
                      <p className="news-date">{moment(post.createdAt).format('MM-DD-YYYY')}</p>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
            <NavLink className="btn-view-more" to={'/news'}>Xem Thêm</NavLink>
          </div>
        </section>
        <section className="tfv-tech">
          <div className="tvf-container">
            <div className="content-wrap">
              <Controller>
                <Scene
                  indicators={false}
                  duration="100%"
                  triggerHook="onEnter"
                >
                  <Timeline>
                    <Tween
                      position="0"
                      from={{
                        xPercent: -50,
                      }}
                      to={{
                        xPercent: 0,
                      }}
                    >
                      <div className="left-info">
                        <h3 className="page-title">Lĩnh vực Tiên Phong</h3>
                        <p className="des">
                          Với mong muốn đem đến cho thị trường những sản phẩm - dịch vụ theo tiêu chuẩn quốc tế và những trải nghiệm hoàn toàn mới về phong cách sống hiện đại, ở bất cứ lĩnh vực nào Techvify cũng chứng tỏ vai trò tiên phong, dẫn dắt sự thay đổi xu hướng tiêu dùng.
                        </p>
                        <div className="dragger-mouse">
                          <img src="/images/mouse.png" alt="" />
                          <div>
                            <img src="/images/ar-drag-l.png" alt="" />
                            <span>trượt để khám phá</span>
                            <img src="/images/ar-drag-r.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </Tween>
                    <Tween
                      position="0"
                      from={{
                        xPercent: 50,
                      }}
                      to={{
                        xPercent: 0,
                      }}
                    >

                      <ul className="right-info">
                        <Slider {...settings}>
                          <li className="tch-1">
                            <div className="item-category">
                              <a href="#" className="wrap-block">
                                <div className="ico">
                                  <img src="/images/b_transparent.gif" alt="" />
                                </div>
                                <h4 className="cat-name">công nghệ</h4>
                                <div className="content">
                                  <img src="/images/TECHBANNER-2.png" alt="" />
                                  <div className="view-detail">
                                    <p>Với mảng Công Nghệ, TVF xác định nhiều mũi nhọn để có thể thúc đẩy đầu tư mạnh mẽ, trong đó có ba điểm chính. Đầu tiên là tập trung đầu tư đội ngũ nhân sự, hạ tầng để phát triển sản xuất phần mềm.&nbsp;Mũi nhọn thứ hai ...</p>
                                    <span className="btn-view-more">Xem Thêm</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li className="tch-2">
                            <div className="item-category">
                              <a href="#" className="wrap-block">
                                <div className="ico">
                                  <img src="/images/b_transparent.gif" alt="" />
                                </div>
                                <h4 className="cat-name">công nghiệp</h4>
                                <div className="content">
                                  <img src="/images/TECHBANNER-2.png" alt="" />
                                  <div className="view-detail">
                                    <p>Với mảng Công Nghệ, TVF xác định nhiều mũi nhọn để có thể thúc đẩy đầu tư mạnh mẽ, trong đó có ba điểm chính. Đầu tiên là tập trung đầu tư đội ngũ nhân sự, hạ tầng để phát triển sản xuất phần mềm.&nbsp;Mũi nhọn thứ hai ...</p>
                                    <span className="btn-view-more">Xem Thêm</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li className="tch-3">
                            <div className="item-category">
                              <a href="#" className="wrap-block">
                                <div className="ico">
                                  <img src="/images/b_transparent.gif" alt="" />
                                </div>
                                <h4 className="cat-name">thương mại & dịch vụ</h4>
                                <div className="content">
                                  <img src="/images/TECHBANNER-2.png" alt="" />
                                  <div className="view-detail">
                                    <p>Với mảng Công Nghệ, TVF xác định nhiều mũi nhọn để có thể thúc đẩy đầu tư mạnh mẽ, trong đó có ba điểm chính. Đầu tiên là tập trung đầu tư đội ngũ nhân sự, hạ tầng để phát triển sản xuất phần mềm.&nbsp;Mũi nhọn thứ hai ...</p>
                                    <span className="btn-view-more">Xem Thêm</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </li>
                        </Slider>
                      </ul>
                    </Tween>


                  </Timeline>
                </Scene>
              </Controller>
            </div>
          </div>
        </section>
        <section className="tvf-info">
          <Controller>
            <Scene
              indicators={false}
              duration="100%"
              triggerHook="onEnter"
            >
              <Timeline>
                <div className="tvf-container">
                  <h3 className="page-title">Giới thiệu công ty</h3>
                  <div className="row">
                    <div className="col">
                      <Tween
                        position="0"
                        from={{
                          xPercent: -100,
                        }}
                        to={{
                          xPercent: 0,
                        }}
                      >
                        <div className="sub-title">lịch sử hình thành</div>
                        <img src="/images/thumb_mini.jpg" alt="" />
                        <p>
                          In urgent situation, many people want to find the nearest pharmacy for themselves and family.
                          On a daily basis,  being busy may cause you forget daily medication.
                          You would like to order and track the availability of the medicines online.
                        </p>
                      </Tween>

                    </div>
                    <div className="col">
                      <Tween
                        position="0"
                        from={{
                          xPercent: 100,
                        }}
                        to={{
                          xPercent: 0,
                        }}
                      >
                        <div className="sub-title">hoạt động của công ty</div>
                        <img src="/images/Home-anh-3.jpg" alt="" />
                      </Tween>
                    </div>
                  </div>

                </div>
              </Timeline>
            </Scene>
          </Controller>
        </section>
      </div>
    </>
  );
};

export default HomeView;
