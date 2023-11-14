import classNames from "classnames/bind";
import style from "./banner.module.scss"
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Features from "./features";
const cx = classNames.bind(style)
function Banner() {
    const { t } = useTranslation();
    return (
        <>
            <div className={cx('banner')}>
                <Row align={"middle"} gutter={[20]}>
                    <Col lg={12} md={12} sm={24} order={1} span={24}>
                        <div className={cx('text')}>
                            <h2>Đàm Công Trí</h2>
                            <p>Web Developer - JS, C#(ASP.NET Core)</p>

                            <Link className={cx("contact")} to="#contact">
                                <span>
                                    {t('banner.contact')}
                                </span>
                            </Link>

                        </div>
                    </Col>
                    <Col lg={12} md={{ span: 12, order: 2 }} span={24} order={0} >
                        <div className={cx('avatar')}>
                            <img width={'100%'} src="https://marketifythemes.net/html/foliox/img/hero/avatar.png" />
                        </div>
                    </Col>
                </Row>
                <Features />
            </div>
        </>
    );
}

export default Banner;