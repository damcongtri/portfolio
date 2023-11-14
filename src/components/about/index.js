import classNames from "classnames/bind";
import style from "./about.module.scss"
import { Col, Row } from "antd";
import Skill from "./skill";
const cx = classNames.bind(style)
function About() {
    return (
        <>
            <div className={cx('about')}>
                <div className={cx('head')}>
                    <h3>About Me</h3>
                    <h1>A Passionate Developer Who Loves to Code</h1>
                </div>
                <div className={cx("content")}>
                    <Row gutter={[30]}>
                        <Col lg={12}>
                            <div className={cx('image')}>
                                <img width={"100%"} src="https://marketifythemes.net/html/foliox/img/about/2.jpg" alt="" />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={cx('text')}>
                                <h3>About Me</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat.</p>
                                <div className={cx('info')}>
                                    <ul>
                                        <li>Name</li>
                                        <li>Trí</li>
                                        <li>Email</li>
                                        <li>tri@123.com</li>
                                        <li>Phone</li>
                                        <li>0355719203</li>
                                    </ul>
                                    <ul>
                                        <li>Address</li>
                                        <li>Bắc Ninh</li>
                                        <li>Education</li>
                                        <li>Bach Khoa Aptech</li>
                                        <li>Status</li>
                                        <li>Studying</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Skill />
            </div>
        </>
    );
}

export default About;