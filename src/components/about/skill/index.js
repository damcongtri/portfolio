import classNames from "classnames/bind";
import style from "./skill.module.scss"
import { Col, Row } from "antd";
const cx = classNames.bind(style)
function Skill() {
    return (
        <>
            <div className={cx('skills')}>
                <div className={cx('head')}>
                    <h3>Skills</h3>
                    <h1>I Work Hard to Improve My Skills Regularly</h1>
                </div>
                <div className={cx('content')}>
                    <Row gutter={[20, 20]}>
                        <Col md={12} span={24} >
                            <div className={cx('item')}>
                                <h3>Backend</h3>
                                <ul>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={12} span={24}>
                            <div className={cx('item')}>
                                <h3>Frontend</h3>
                                <ul>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={12} span={24}>
                            <div className={cx('item')}>
                                <h3>Database</h3>
                                <ul>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={12} span={24}>
                            <div className={cx('item')}>
                                <h3>Other</h3>
                                <ul>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                    <li>1</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>




                </div>
            </div>
        </>
    );
}

export default Skill;