import classNames from "classnames/bind";
import style from "./brand.module.scss"
import Slider from "react-slick";

const cx = classNames.bind(style);
var settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
};
function Brand() {
    return (
        <>
            <div className={cx('brand')}>
                <Slider {...settings}>
                    <div>
                        <img src="https://marketifythemes.net/html/foliox/img/partners/6.png" alt="" />
                    </div>


                    <div>
                        <img src="https://marketifythemes.net/html/foliox/img/partners/6.png" alt="" />
                    </div>


                    <div>
                        <img src="https://marketifythemes.net/html/foliox/img/partners/6.png" alt="" />
                    </div>


                    <div>
                        <img src="https://marketifythemes.net/html/foliox/img/partners/6.png" alt="" />
                    </div>
                    <div>
                        <img src="https://marketifythemes.net/html/foliox/img/partners/6.png" alt="" />
                    </div>

                </Slider>
            </div>
        </>
    );
}

export default Brand;