import classNames from "classnames/bind";
import style from "./service.module.scss"
import { Col, Row } from "antd";
import { SlScreenDesktop } from "react-icons/sl"
const cx = classNames.bind(style)
function Service() {
    return (
        <>
            <div className={cx('service')}>
                <div className={cx('head')}>
                    <h3>Services</h3>
                    <h1>What I Do for My Clients</h1>
                </div>
                <div className={cx("content")}>
                    <Row gutter={[20, 20]}>
                        <Col xl={8} sm={12} span={24}>
                            <div className={cx('item')}>
                                <div>
                                    <div className={cx('icon')}>
                                        <SlScreenDesktop />
                                    </div>
                                </div>
                                <h3>Web design</h3>
                                <p>
                                    Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor
                                </p>
                            </div>
                        </Col>
                        <Col xl={8} sm={12} span={24}>
                            <div className={cx('item')}>
                                <div className={cx('icon')}>

                                </div>
                                <h3>Web design</h3>
                                <p>
                                    Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor
                                </p>
                            </div>
                        </Col>
                        <Col xl={8} sm={12} span={24}>
                            <div className={cx('item')}>
                                <div className={cx('icon')}>

                                </div>
                                <h3>Web design</h3>
                                <p>
                                    Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor
                                </p>
                            </div>
                        </Col>
                        <Col xl={8} sm={12} span={24}>
                            <div className={cx('item')}>
                                <div className={cx('icon')}>

                                </div>
                                <h3>Web design</h3>
                                <p>
                                    Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor
                                </p>
                            </div>
                        </Col>
                        <Col xl={8} sm={12} span={24}>
                            <div className={cx('item')}>
                                <div className={cx('icon')}>

                                </div>
                                <h3>Web design</h3>
                                <p>
                                    Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor
                                </p>
                            </div>
                        </Col>
                        <Col xl={8} sm={12} span={24}>
                            <div className={cx('item')}>
                                <div className={cx('icon')}>

                                </div>
                                <h3>Web design</h3>
                                <p>
                                    Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>
        </>
    );
}

export default Service;