import classNames from "classnames/bind";
import style from "./product.module.scss"
import { Col, Row } from "antd";
const cx = classNames.bind(style);
function ProductDetail() {
    return (
        <>
            <div className={cx('product_detail')}>
                <Row>
                    <Col sm={14} >
                        <div className={cx('left')}>
                            <h1>ECommerces</h1>

                            <p>This is project website ECommerces basic </p>

                            <ul>
                                <li><span>Link Source Code : </span> <a href="https://www.fb.com/damcongtri">aaaaaa</a></li>
                                <li><span>Link Demo : </span> <a href="https://www.fb.com/damcongtri">aaaaaa</a></li>
                            </ul>
                            <div className={cx('tech')}>
                                <h3>Technology is used</h3>
                                <ul>
                                    <li><span>BackEnd </span> <a href="https://www.fb.com/damcongtri">aaaaaa</a></li>
                                    <li><span>Frontend : </span> <a href="https://www.fb.com/damcongtri">aaaaaa</a></li>
                                    <li><span>Database : </span> <a href="https://www.fb.com/damcongtri">aaaaaa</a></li>
                                    <li><span>Other : </span> <a href="https://www.fb.com/damcongtri">aaaaaa</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={10} >
                        <div className={cx("image")}>
                            <img src="https://marketifythemes.net/html/foliox/img/portfolio/1.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
                <div className={cx('desc')}>
                    <h2>describe specific</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iure quibusdam praesentium illo. Dicta, ad consequatur aliquid in rerum, obcaecati nesciunt molestiae, sit quasi ullam deserunt expedita perferendis veritatis totam.
                </div>
            </div>
        </>
    );
}

export default ProductDetail;