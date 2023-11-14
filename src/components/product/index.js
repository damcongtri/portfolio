import classNames from "classnames/bind";
import style from "./product.module.scss"
import { Col, Row } from "antd";
const cx = classNames.bind(style)
function Product() {
    return (
        <>
            <div className={cx('product')}>
                <div className={cx('head')}>
                    <h3>Personal Project</h3>
                    <h1>What I do for my project</h1>
                </div>
                <div className={cx("content")}>
                    <div className={cx('category')}>
                        <span>All</span>
                        <span>.Net</span>
                        <span>JS</span>
                        <span>Backend</span>
                        <span>Frontend</span>
                    </div>
                    <div className={cx('list')}>
                        <Row gutter={[16, 16]}>
                            <Col lg={8} sm={12} span={24}>
                                <div className={cx('item')} style={{ backgroundImage: 'url(https://marketifythemes.net/html/foliox/img/portfolio/1.jpg)' }}>

                                    <div className={cx('title')}>
                                        <h3>Ecommeces</h3>
                                        <span>ExpressJS, ReactJS</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} sm={12} span={24}>
                                <div className={cx('item')} style={{ backgroundImage: 'url(https://marketifythemes.net/html/foliox/img/portfolio/1.jpg)' }}>

                                    <div className={cx('title')}>
                                        <h3>Ecommeces</h3>
                                        <span>ExpressJS, ReactJS</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} sm={12} span={24}>
                                <div className={cx('item')} style={{ backgroundImage: 'url(https://marketifythemes.net/html/foliox/img/portfolio/1.jpg)' }}>

                                    <div className={cx('title')}>
                                        <h3>Ecommeces</h3>
                                        <span>ExpressJS, ReactJS</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} sm={12} span={24}>
                                <div className={cx('item')} style={{ backgroundImage: 'url(https://marketifythemes.net/html/foliox/img/portfolio/1.jpg)' }}>

                                    <div className={cx('title')}>
                                        <h3>Ecommeces</h3>
                                        <span>ExpressJS, ReactJS</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Product;