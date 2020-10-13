import React, { Component, Fragment } from "react";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        {/* <!-- Start Preloader Area --> */}
        <div class="loader-wrapper">
          <div class="loader">
            <div class="dot-wrap">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
        </div>
        {/* <!-- End Preloader Area --> */}

        {/* <!-- Start Header Area --> */}
        <header class="header-area">
          {/* <!-- Start Top Header --> */}
          <div class="top-header">
            <div class="container-fluid">
              <div class="row align-items-center">
                <div class="col-lg-12 col-sm-8 pl-0">
                  <span class="d-block text-white ir-r text-right">
                    ما به رشد هر چه بهتر زبان انگلیسی شما می‌اندیشیم.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Start Top Header --> */}

          {/* <!-- Start Nav Area --> */}
          <div class="navbar-area">
            <div class="mobile-nav">
              <div class="container-fluid">
                <a href="index.html" class="logo">
                  <img class="logo-img" src="/assets/img/logo.png" alt="Logo" />
                </a>
              </div>
            </div>

            <div class="main-nav">
              <div class="container-fluid">
                <nav class="navbar navbar-expand-md">
                  <a class="navbar-brand" href="index.html">
                    <img
                      class="logo-img"
                      src="/assets/img/logo.png"
                      alt="Logo"
                    />
                  </a>

                  <div class="collapse navbar-collapse mean-menu">
                    <ul class="navbar-nav m-auto">
                      <li class="nav-item">
                        <a href="#" class="nav-link ir-r active">
                          خانه
                        </a>
                      </li>

                      <li class="nav-item">
                        <a href="#" class="nav-link ir-r">
                          دوره های آموزشی
                          <i class="bx bx-chevron-down"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li class="nav-item">
                            <a href="/" class="nav-link ir-r active">
                              دوره 1
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="/" class="nav-link ir-r">
                              دوره 2
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item">
                        <a href="#" class="nav-link ir-r">
                          مقالات آموزشی
                          <i class="bx bx-chevron-down"></i>
                        </a>

                        <ul class="dropdown-menu">
                          <li class="nav-item">
                            <a href="/" class="nav-link ir-r active">
                              اسپیکینگ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="/" class="nav-link ir-r">
                              ریدینگ
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="/" class="nav-link ir-r">
                              وکب
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="/" class="nav-link ir-r">
                              رایتیینگ
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item">
                        <a href="#" class="nav-link ir-r">
                          درباره ما
                        </a>
                      </li>

                      <li class="nav-item">
                        <a href="#" class="nav-link ir-r">
                          تماس با ما
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- End Nav Area --> */}
        </header>
        {/* <!-- End Header Area --> */}

        {/* <!-- Start Introduction --> */}
        <section class="index-intro">
          <div class="container">
            <div class="row d-lg-flex align-items-lg-center">
              <div class="col-md-5 img-holder mb-5 mb-lg-0">
                <img
                  class="w-75 d-block mx-auto"
                  src="/assets/img/testimonials-img-2.jpg"
                  alt="وبسایت رسمی رضا رفیعی"
                />
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-6">
                <h1 class="d-block text-right ir-b mb-3">
                  به وبسایت رسمی رضا رفیعی خوش آمدید
                </h1>
                <p class="d-block text-justify ir-r mb-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز
                </p>
                <a class="default-btn ir-r mb-0" href="#products">
                  مشاهده دوره ها
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Introduction --> */}

        {/* <!-- Start Products --> */}
        <section
          id="products"
          class="services-area services-area-style-two pt-100 pb-70"
        >
          <div class="container">
            <div class="section-title">
              <span class="ir-b">محصولات</span>
              <h2 class="ir-r text-white">محصولات آموزشی</h2>
            </div>

            <div class="row">
              <div class="col-lg-5 col-sm-6 mr-auto">
                <div class="single-services">
                  <i class="flaticon-estimate"></i>
                  <h3 class="ir-b">محصول 1</h3>
                  <p class="ir-r">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز...
                  </p>

                  <a href="single-services.html" class="read-more ir-r">
                    اطلاعات بیشتر
                    <span class="flaticon-next"></span>
                  </a>
                </div>
              </div>

              <div class="col-lg-5 col-sm-6 ml-auto">
                <div class="single-services">
                  <i class="flaticon-home"></i>
                  <h3 class="ir-b">محصول 2</h3>
                  <p class="ir-r">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز...
                  </p>

                  <a href="single-services.html" class="read-more ir-r">
                    اطلاعات بیشتر
                    <span class="flaticon-next"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="services-bg">
            <img src="/assets/img/services-bg.jpg" alt="Image" />
          </div>
        </section>
        {/* <!-- End Products --> */}

        {/* <!-- Start Pricing Area --> */}
        <section class="price-area price-area-style-two pt-100 pb-70">
          <div class="container">
            <div class="section-title">
              <span class="ir-r">قیمت محصولات</span>
              <h2 class="ir-b">یکی از محصولات رو انتخاب کن:</h2>
            </div>

            <div class="row">
              <div class="col-lg-4 col-sm-6 mr-auto">
                <div class="single-price-card">
                  <div class="price-title">
                    <h3 class="ir-b">محصول 1</h3>
                    <h2 class="ir-b">
                      400,000<sub>تومان</sub>
                    </h2>
                  </div>

                  <ul>
                    <li class="ir-r">یادگیری به شیوه مادری</li>
                    <li class="ir-r">به شیوه کاربردی</li>
                    <li class="ir-r">بدون خستگی</li>
                    <li class="ir-r">بدون یادگیری لغات</li>
                    <li class="ir-r">بدون یادگیری گرامر</li>
                  </ul>

                  <a
                    href="#"
                    class="default-btn ir-r d-flex justify-content-center"
                  >
                    پرداخت
                    <span class="flaticon-next d-block mr-2"></span>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 ml-auto">
                <div class="single-price-card active">
                  <div class="price-title">
                    <h3 class="ir-b">محصول 2</h3>
                    <h2 class="ir-b">
                      800,000<sub>تومان</sub>
                    </h2>
                  </div>

                  <ul>
                    <li class="ir-r">یادگیری به شیوه مادری</li>
                    <li class="ir-r">به شیوه کاربردی</li>
                    <li class="ir-r">بدون خستگی</li>
                    <li class="ir-r">بدون یادگیری لغات</li>
                    <li class="ir-r">بدون یادگیری گرامر</li>
                  </ul>

                  <a
                    href="#"
                    class="default-btn ir-r d-flex justify-content-center"
                  >
                    پرداخت
                    <span class="flaticon-next d-flex mr-2"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Pricing Area --> */}

        {/* <!-- Start Blog Area --> */}
        <section class="blog-area pt-100 pb-70">
          <div class="container">
            <div class="section-title">
              <span class="ir-b">وبلاگ</span>
              <h2 class="ir-r">آخرین مقالات آموزشی</h2>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-blog-post">
                  <a href="single-blog.html">
                    <img src="/assets/img/blog-img-1.jpg" alt="Image" />
                  </a>

                  <div class="news-content">
                    <ul class="admin d-flex justify-content-start mb-3">
                      <li class="float ir-r">
                        <i class="bx bx-calendar-alt"></i>
                        1399/6/15
                      </li>
                    </ul>

                    <a href="single-blog.html">
                      <h3 class="ir-b">
                        یادگیری آنلاین زبان انگلیسی به صورت گام به گام
                      </h3>
                    </a>

                    <a href="single-blog.html" class="read-more ir-r">
                      بیشتر
                      <span class="flaticon-next"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-blog-post">
                  <a href="single-blog.html">
                    <img src="/assets/img/blog-img-2.jpg" alt="Image" />
                  </a>

                  <div class="news-content">
                    <ul class="admin d-flex justify-content-start mb-3">
                      <li class="float ir-r">
                        <i class="bx bx-calendar-alt"></i>
                        1399/6/15
                      </li>
                    </ul>

                    <a href="single-blog.html">
                      <h3 class="ir-b">
                        یادگیری آنلاین زبان انگلیسی به صورت گام به گام
                      </h3>
                    </a>

                    <a href="single-blog.html" class="read-more ir-r">
                      بیشتر
                      <span class="flaticon-next"></span>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-blog-post">
                  <a href="single-blog.html">
                    <img src="/assets/img/blog-img-3.jpg" alt="Image" />
                  </a>

                  <div class="news-content">
                    <ul class="admin d-flex justify-content-start mb-3">
                      <li class="float ir-r">
                        <i class="bx bx-calendar-alt"></i>
                        1399/6/15
                      </li>
                    </ul>

                    <a href="single-blog.html">
                      <h3 class="ir-b">
                        یادگیری آنلاین زبان انگلیسی به صورت گام به گام
                      </h3>
                    </a>

                    <a href="single-blog.html" class="read-more ir-r">
                      بیشتر
                      <span class="flaticon-next"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Blog Area --> */}

        {/* <!-- Start Footer Top Area --> */}
        <footer class="footer-top-area pt-100 pb-70">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-footer-widget">
                  <a href="index.html">
                    <img
                      class="logo-img"
                      src="/assets/img/logo.png"
                      alt="Image"
                    />
                  </a>

                  <p class="ir-r">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </p>

                  <ul class="social-icon">
                    <li>
                      <a href="#">
                        <i class="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bx bxl-linkedin-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-footer-widget">
                  <h3 class="ir-b">لینک های مهم</h3>

                  <ul class="import-link">
                    <li>
                      <a class="ir-r" href="#">
                        دوره 1
                      </a>
                    </li>
                    <li>
                      <a class="ir-r" href="#">
                        دوره 2
                      </a>
                    </li>
                    <li>
                      <a class="ir-r" href="#">
                        وبلاگ2
                      </a>
                    </li>
                    <li>
                      <a class="ir-r" href="#">
                        درباره ما
                      </a>
                    </li>
                    <li>
                      <a class="ir-r" href="#">
                        تماس با ما
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-footer-widget">
                  <h3 class="ir-b">تماس با ما</h3>

                  <ul class="address">
                    <li class="location ir-r">
                      <i class="bx bxs-location-plus"></i>
                      تهران، میدان آزادی، نمایشگاه بین المللی شهر آفتاب.
                    </li>
                    <li>
                      <i class="bx bxs-envelope"></i>
                      <a class="ir-r" href="mailto:hello@example.com">
                        hello@example.com
                      </a>
                    </li>
                    <li>
                      <i class="bx bxs-phone-call"></i>
                      <a class="ir-r" href="tel:09121111111">
                        0912-111-1111
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End Footer Top Area --> */}

        {/* <!-- Start Footer Bottom Area --> */}
        <footer class="footer-bottom-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12">
                <p class="d-block text-center ir-r">
                  طراحی شده توسط{" "}
                  <a href="https://tad-group.ir/" target="blank">
                    گروه تاد
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End Footer Bottom Area --> */}

        {/* <!-- Start Go Top Area --> */}
        <div class="go-top">
          <i class="bx bx-chevrons-up"></i>
          <i class="bx bx-chevrons-up"></i>
        </div>
        {/* <!-- End Go Top Area --> */}
      </Fragment>
    );
  }
}
