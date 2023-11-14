import classNames from "classnames/bind";
import style from "./features.module.scss"
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import { IoSettingsOutline } from "react-icons/io5"
const cx = classNames.bind(style)
function Features() {
    return (
        <>
            <div className={cx('features')}>
                <Row gutter={[20, 20]}>
                    <Col lg={8}>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <IoSettingsOutline />
                            </div>
                            <h3>Developer skill</h3>
                            <p>Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <IoSettingsOutline />
                            </div>
                            <h3>Developer skill</h3>
                            <p>Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <IoSettingsOutline />
                            </div>
                            <h3>Developer skill</h3>
                            <p>Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Features;