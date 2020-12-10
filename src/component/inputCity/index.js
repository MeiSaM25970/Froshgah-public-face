import React, { Component, Fragment } from "react";
import { addCity, selectCityStore } from "./redux";

export * from "./redux";

export class InputCity extends Component {
  state = { selectCity: [], areaTranslate: "empty", province: "", city: "" };
  city = [
    {
      areaName: "azerbaijanSharghi",
      cities: [
        "آذر شهر",
        "اسكو",
        "اهر",
        "بستان آباد",
        "بناب",
        "بندر شرفخانه",
        "تبريز",
        "تسوج",
        "جلفا",
        "سراب",
        "شبستر",
        "صوفیان",
        "عجبشير",
        "قره آغاج",
        "كليبر",
        "كندوان",
        "مراغه",
        "مرند",
        "ملكان",
        "ممقان",
        "ميانه",
        "هاديشهر",
        "هريس",
        "هشترود",
        "ورزقان",
      ],
    },
    {
      areaName: "azerbaijanGharbi",
      cities: [
        "اروميه",
        "اشنويه",
        "بازرگان",
        "بوكان",
        "پلدشت",
        "پيرانشهر",
        "تكاب",
        "خوي",
        "سردشت",
        "سلماس",
        "سيه چشمه- چالدران",
        "سیمینه",
        "شاهين دژ",
        "شوط",
        "ماكو",
        "مهاباد",
        "مياندوآب",
        "نقده",
      ],
    },
    {
      areaName: "ardabil",
      cities: [
        "اردبيل",
        "بيله سوار",
        "پارس آباد",
        "خلخال",
        "سرعين",
        "كيوي (كوثر)",
        "گرمي (مغان)",
        "مشگين شهر",
        "مغان (سمنان)",
        "نمين",
        "نير",
      ],
    },
    {
      areaName: "isfahan",
      cities: [
        "آران و بيدگل",
        "اردستان",
        "اصفهان",
        "باغ بهادران",
        "تيران",
        "خميني شهر",
        "خوانسار",
        "دهاقان",
        "دولت آباد-اصفهان",
        "زرين شهر",
        "زيباشهر (محمديه)",
        "سميرم",
        "شاهين شهر",
        "شهرضا",
        "فريدن",
        "فريدون شهر",
        "فلاورجان",
        "فولاد شهر",
        "قهدریجان",
        "كاشان",
        "گلپايگان",
        "گلدشت اصفهان",
        "گلدشت مركزی",
        "مباركه اصفهان",
        "مهاباد-اصفهان",
        "نايين",
        "نجف آباد",
        "نطنز",
        "هرند",
      ],
    },
    {
      areaName: "alborz",
      cities: [
        "آسارا",
        "اشتهارد",
        "شهر جديد هشتگرد",
        "طالقان",
        "كرج",
        "گلستان تهران",
        "نظرآباد",
        "هشتگرد",
      ],
    },
    {
      areaName: "ilam",
      cities: [
        "آبدانان",
        "ايلام",
        "ايوان",
        "دره شهر",
        "دهلران",
        "سرابله",
        "شيروان چرداول",
        "مهران",
      ],
    },
    {
      areaName: "boshehr",
      cities: [
        "آبپخش",
        "اهرم",
        "برازجان",
        "بندر دير",
        "بندر ديلم",
        "بندر كنگان",
        "بندر گناوه",
        "بوشهر",
        "تنگستان",
        "جزيره خارك",
        "جم (ولايت)",
        "خورموج",
        "دشتستان - شبانکاره",
        "دلوار",
        "عسلویه",
      ],
    },
    {
      areaName: "tehran",
      cities: [
        "اسلامشهر",
        "بومهن",
        "پاكدشت",
        "تهران",
        "چهاردانگه",
        "دماوند",
        "رودهن",
        "ري",
        "شريف آباد",
        "شهر رباط كريم",
        "شهر شهريار",
        "فشم",
        "فيروزكوه",
        "قدس",
        "كهريزك",
        "لواسان بزرگ",
        "ملارد",
        "ورامين",
      ],
    },
    {
      areaName: "chaharmahalVaBakhtiari",
      cities: [
        "اردل",
        "بروجن",
        "چلگرد (كوهرنگ)",
        "سامان",
        "شهركرد",
        "فارسان",
        "لردگان",
      ],
    },
    {
      areaName: "khorasanJonobi",
      cities: [
        "بشرویه",
        "بيرجند",
        "خضری",
        "خوسف",
        "سرایان",
        "سربيشه",
        "طبس",
        "فردوس",
        "قائن",
        "نهبندان",
      ],
    },
    {
      areaName: "khorasanRazavi",
      cities: [
        "بجستان",
        "بردسكن",
        "تايباد",
        "تربت جام",
        "تربت حيدريه",
        "جغتای",
        "جوین",
        "چناران",
        "خلیل آباد",
        "خواف",
        "درگز",
        "رشتخوار",
        "سبزوار",
        "سرخس",
        "طبس",
        "طرقبه",
        "فريمان",
        "قوچان",
        "كاشمر",
        "كلات",
        "گناباد",
        "مشهد",
        "نيشابور",
      ],
    },
    {
      areaName: "khorasanShomali",
      cities: [
        "آشخانه، مانه و سمرقان",
        "اسفراين",
        "بجنورد",
        "جاجرم",
        "شيروان",
        "فاروج",
      ],
    },
    {
      areaName: "khozestan",
      cities: [
        "آبادان",
        "اميديه",
        "انديمشك",
        "اهواز",
        "ايذه",
        "باغ ملك",
        "بستان",
        "بندر ماهشهر",
        "بندرامام خميني",
        "بهبهان",
        "خرمشهر",
        "دزفول",
        "رامشیر",
        "رامهرمز",
        "سوسنگرد",
        "شادگان",
        "شوش",
        "شوشتر",
        "لالي",
        "مسجد سليمان",
        "هنديجان",
        "هويزه",
      ],
    },
    {
      areaName: "zanjan",
      cities: [
        "آب بر (طارم)",
        "ابهر",
        "خرمدره",
        "زرین آباد (ایجرود)",
        "زنجان",
        "قیدار (خدا بنده)",
        "ماهنشان",
      ],
    },
    {
      areaName: "semnan",
      cities: [
        "ايوانكي",
        "بسطام",
        "دامغان",
        "سرخه",
        "سمنان",
        "شاهرود",
        "شهمیرزاد",
        "گرمسار",
        "مهدیشهر",
      ],
    },
    {
      areaName: "sistanVaBalochestan",
      cities: [
        "ايرانشهر",
        "چابهار",
        "خاش",
        "راسك",
        "زابل",
        "زاهدان",
        "سراوان",
        "سرباز",
        "ميرجاوه",
        "نيكشهر",
      ],
    },
    {
      areaName: "fars",
      cities: [
        "آباده",
        "آباده طشك",
        "اردكان",
        "ارسنجان",
        "استهبان",
        "اشكنان",
        "اقليد",
        "اوز",
        "ایج",
        "ایزد خواست",
        "باب انار",
        "بالاده",
        "بنارويه",
        "بهمن",
        "بوانات",
        "بيرم",
        "بیضا",
        "جنت شهر",
        "جهرم",
        "حاجي آباد-زرین دشت",
        "خاوران",
        "خرامه",
        "خشت",
        "خفر",
        "خنج",
        "خور",
        "داراب",
        "رونيز عليا",
        "زاهدشهر",
        "زرقان",
        "سده",
        "سروستان",
        "سعادت شهر",
        "سورمق",
        "ششده",
        "شيراز",
        "صغاد",
        "صفاشهر",
        "علاء مرودشت",
        "عنبر",
        "فراشبند",
        "فسا",
        "فيروز آباد",
        "قائميه",
        "قادر آباد",
        "قطب آباد",
        "قير",
        "كازرون",
        "كنار تخته",
        "گراش",
        "لار",
        "لامرد",
        "لپوئی",
        "لطيفي",
        "مبارك آباد ديز",
        "مرودشت",
        "مشكان",
        "مصير",
        "مهر فارس(گله دار)",
        "ميمند",
        "نوبندگان",
        "نودان",
        "نورآباد",
        "ني ريز",
        "کوار",
      ],
    },
    {
      areaName: "ghazvin",
      cities: [
        "آبيك",
        "البرز",
        "بوئين زهرا",
        "تاكستان",
        "قزوين",
        "محمود آباد نمونه",
      ],
    },
    {
      areaName: "ghom",
      cities: ["قنوات", "جعفریه", "کهک", "دستجرد", "سلفچگان", "قم"],
    },
    {
      areaName: "kordestan",
      cities: [
        "بانه",
        "بيجار",
        "دهگلان",
        "ديواندره",
        "سقز",
        "سنندج",
        "قروه",
        "كامياران",
        "مريوان",
      ],
    },
    {
      areaName: "kerman",
      cities: [
        "بابك",
        "بافت",
        "بردسير",
        "بم",
        "جيرفت",
        "راور",
        "رفسنجان",
        "زرند",
        "سيرجان",
        "كرمان",
        "كهنوج",
        "منوجان",
      ],
    },
    {
      areaName: "kermanshah",
      cities: [
        "اسلام آباد غرب",
        "پاوه",
        "تازه آباد- ثلاث باباجانی",
        "جوانرود",
        "سر پل ذهاب",
        "سنقر كليائي",
        "صحنه",
        "قصر شيرين",
        "كرمانشاه",
        "كنگاور",
        "گيلان غرب",
        "هرسين",
      ],
    },
    {
      areaName: "kohkiloyeVaBoyerahmad",
      cities: ["دهدشت", "دوگنبدان", "سي سخت- دنا", "گچساران", "ياسوج"],
    },
    {
      areaName: "golestan",
      cities: [
        "آزاد شهر",
        "آق قلا",
        "انبارآلوم",
        "اینچه برون",
        "بندر گز",
        "تركمن",
        "جلین",
        "خان ببین",
        "راميان",
        "سرخس کلاته",
        "سیمین شهر",
        "علي آباد كتول",
        "فاضل آباد",
        "كردكوي",
        "كلاله",
        "گالیکش",
        "گرگان",
        "گمیش تپه",
        "گنبد كاووس",
        "مراوه تپه",
        "مينو دشت",
        "نگین شهر",
        "نوده خاندوز",
        "نوکنده",
      ],
    },
    {
      areaName: "gilan",
      cities: [
        "آستارا",
        "آستانه اشرفيه",
        "املش",
        "بندرانزلي",
        "خمام",
        "رشت",
        "رضوان شهر",
        "رود سر",
        "رودبار",
        "سياهكل",
        "شفت",
        "صومعه سرا",
        "فومن",
        "كلاچاي",
        "لاهيجان",
        "لنگرود",
        "لوشان",
        "ماسال",
        "ماسوله",
        "منجيل",
        "هشتپر",
      ],
    },
    {
      areaName: "lorestan",
      cities: [
        "ازنا",
        "الشتر",
        "اليگودرز",
        "بروجرد",
        "پلدختر",
        "خرم آباد",
        "دورود",
        "سپید دشت",
        "كوهدشت",
        "نورآباد (خوزستان)",
      ],
    },
    {
      areaName: "mazandaran",
      cities: [
        "آمل",
        "بابل",
        "بابلسر",
        "بلده",
        "بهشهر",
        "پل سفيد",
        "تنكابن",
        "جويبار",
        "چالوس",
        "خرم آباد",
        "رامسر",
        "رستم کلا",
        "ساري",
        "سلمانشهر",
        "سواد كوه",
        "فريدون كنار",
        "قائم شهر",
        "گلوگاه",
        "محمودآباد",
        "مرزن آباد",
        "نكا",
        "نور",
        "نوشهر",
      ],
    },
    {
      areaName: "markazi",
      cities: [
        "آشتيان",
        "اراك",
        "تفرش",
        "خمين",
        "دليجان",
        "ساوه",
        "شازند",
        "محلات",
        "کمیجان",
      ],
    },
    {
      areaName: "hormozgan",
      cities: [
        "ابوموسي",
        "انگهران",
        "بستك",
        "بندر جاسك",
        "بندر لنگه",
        "بندرعباس",
        "پارسیان",
        "حاجي آباد",
        "دشتی",
        "دهبارز (رودان)",
        "قشم",
        "كيش",
        "ميناب",
      ],
    },
    {
      areaName: "hamadan",
      cities: [
        "اسدآباد",
        "بهار",
        "تويسركان",
        "رزن",
        "كبودر اهنگ",
        "ملاير",
        "نهاوند",
        "همدان",
      ],
    },
    {
      areaName: "yazd",
      cities: [
        "ابركوه",
        "اردكان",
        "اشكذر",
        "بافق",
        "تفت",
        "مهريز",
        "ميبد",
        "هرات",
        "يزد",
      ],
    },
  ];

  async changeHandlerProvince(e) {
    const area = {};
    const name = e.target.name;
    const value = e.target.value;
    area[name] = value;
    await this.setState({ ...area });
    await this.translateCity();
    await this.addCityHandler();
  }
  async changeHandlerCity(e) {
    const city = {};
    const name = e.target.name;
    const value = e.target.value;
    city[name] = value;
    await this.setState({ ...city });
    await this.addCityHandler();
  }
  addCityHandler() {
    const cities = {
      area: this.state.province,
      city: this.state.city,
    };
    selectCityStore.dispatch(addCity(cities));
  }
  translateCity() {
    if (this.state.province === "تهران") {
      this.setState({ areaTranslate: "tehran" });
    } else if (this.state.province === "گیلان") {
      this.setState({ areaTranslate: "gilan" });
    } else if (this.state.province === "آذربایجان شرقی") {
      this.setState({ areaTranslate: "azerbaijanSharghi" });
    } else if (this.state.province === "خوزستان") {
      this.setState({ areaTranslate: "khozestan" });
    } else if (this.state.province === "فارس") {
      this.setState({ areaTranslate: "fars" });
    } else if (this.state.province === "اصفهان") {
      this.setState({ areaTranslate: "isfahan" });
    } else if (this.state.province === "خراسان رضوی") {
      this.setState({ areaTranslate: "khorasanRazavi" });
    } else if (this.state.province === "قزوین") {
      this.setState({ areaTranslate: "ghazvin" });
    } else if (this.state.province === "سمنان") {
      this.setState({ areaTranslate: "semnan" });
    } else if (this.state.province === "قم") {
      this.setState({ areaTranslate: "ghom" });
    } else if (this.state.province === "مرکزی") {
      this.setState({ areaTranslate: "markazi" });
    } else if (this.state.province === "زنجان") {
      this.setState({ areaTranslate: "zanjan" });
    } else if (this.state.province === "مازندران") {
      this.setState({ areaTranslate: "mazandaran" });
    } else if (this.state.province === "گلستان") {
      this.setState({ areaTranslate: "golestan" });
    } else if (this.state.province === "اردبیل") {
      this.setState({ areaTranslate: "ardabil" });
    } else if (this.state.province === "آذربایجان غربی") {
      this.setState({ areaTranslate: "azerbaijanGharbi" });
    } else if (this.state.province === "همدان") {
      this.setState({ areaTranslate: "hamadan" });
    } else if (this.state.province === "کردستان") {
      this.setState({ areaTranslate: "kordestan" });
    } else if (this.state.province === "کرمانشاه") {
      this.setState({ areaTranslate: "kermanshah" });
    } else if (this.state.province === "لرستان") {
      this.setState({ areaTranslate: "lorestan" });
    } else if (this.state.province === "بوشهر") {
      this.setState({ areaTranslate: "boshehr" });
    } else if (this.state.province === "کرمان") {
      this.setState({ areaTranslate: "kerman" });
    } else if (this.state.province === "هرمزگان") {
      this.setState({ areaTranslate: "hormozgan" });
    } else if (this.state.province === "چهارمحال و بختیاری") {
      this.setState({ areaTranslate: "chaharmahalVaBakhtiari" });
    } else if (this.state.province === "یزد") {
      this.setState({ areaTranslate: "yazd" });
    } else if (this.state.province === "سیستان و بلوچستان") {
      this.setState({ areaTranslate: "sistanVaBalochestan" });
    } else if (this.state.province === "ایلام") {
      this.setState({ areaTranslate: "ilam" });
    } else if (this.state.province === "کهگلویه و بویراحمد") {
      this.setState({ areaTranslate: "kohkiloyeVaBoyerahmad" });
    } else if (this.state.province === "خراسان شمالی") {
      this.setState({ areaTranslate: "khorasanShomali" });
    } else if (this.state.province === "خراسان جنوبی") {
      this.setState({ areaTranslate: "khorasanJonobi" });
    } else if (this.state.province === "البرز") {
      this.setState({ areaTranslate: "alborz" });
    } else {
      this.setState({ areaTranslate: "empty" });
    }
    const filterCity = this.city.filter(
      (cities) => cities.areaName === this.state.areaTranslate
    );
    this.setState({ selectCity: filterCity });
  }
  render() {
    return (
      <Fragment>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label className="ir-r">استان</label>
            <input
              className="form-control ir-r"
              list="provinceList"
              type="text"
              name="province"
              placeholder="لطفا استان را انتخاب نمایید"
              onChange={this.changeHandlerProvince.bind(this)}
            />
            <datalist id="provinceList">
              <option>تهران</option>
              <option>گیلان</option>
              <option>آذربایجان شرقی</option>
              <option>خوزستان</option>
              <option>فارس</option>
              <option>اصفهان</option>
              <option>خراسان رضوی</option>
              <option>قزوین</option>
              <option>سمنان</option>
              <option>قم</option>
              <option>مرکزی</option>
              <option>زنجان</option>
              <option>مازندران</option>
              <option>گلستان</option>
              <option>اردبیل</option>
              <option>آذربایجان غربی</option>
              <option>همدان</option>
              <option>کردستان</option>
              <option>کرمانشاه</option>
              <option>لرستان</option>
              <option>بوشهر</option>
              <option>کرمان</option>
              <option>هرمزگان</option>
              <option>چهارمحال و بختیاری</option>
              <option>یزد</option>
              <option>سیستان و بلوچستان</option>
              <option>ایلام</option>
              <option>کهگلویه و بویراحمد</option>
              <option>خراسان شمالی</option>
              <option>خراسان جنوبی</option>
              <option>البرز</option>
            </datalist>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label className="ir-r">شهر</label>
            {this.state.areaTranslate === "empty" ? (
              <span
                className="form-control ir-r"
                style={{ backgroundColor: "#eee" }}
              />
            ) : (
              <input
                className="form-control ir-r"
                list="citiesList"
                type="text"
                name="city"
                onChange={this.changeHandlerCity.bind(this)}
              />
            )}
            <datalist id="citiesList">
              {this.state.areaTranslate === "empty" ? (
                <option>لطفا استان را انتخاب نمایید</option>
              ) : this.state.selectCity[0] ? (
                this.state.selectCity[0].cities.map((item, index) => (
                  <option key={index}>{item}</option>
                ))
              ) : (
                <option>لطفا استان را انتخاب نمایید</option>
              )}
            </datalist>
          </div>
        </div>
      </Fragment>
    );
  }
}
