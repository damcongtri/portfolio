import classNames from "classnames/bind";
import style from "./contact.module.scss"
import { Col, Row, Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { IoLocationSharp } from "react-icons/io5";
const cx = classNames.bind(style)
function Contact() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            <div className={cx('contact')}>
                <div className={cx('head')}>
                    <h3>Contact</h3>
                    <h1>I Want to Hear from You</h1>
                </div>
                <div className={cx("content")}>
                    <Row>
                        <Col lg={12} span={24}>
                            <div className={cx('info')}>
                                <div className={cx('item')}>
                                    <span>
                                        <IoLocationSharp />
                                    </span>
                                    <div>
                                        <h3>Address</h3>
                                        <p>Từ Sơn, Bắc Ninh</p>
                                    </div>
                                </div>
                                <div className={cx('item')}>
                                    <span>
                                        <IoLocationSharp />
                                    </span>
                                    <div>
                                        <h3>Address</h3>
                                        <p>Từ Sơn, Bắc Ninh</p>
                                    </div>
                                </div>
                                <div className={cx('item')}>
                                    <span>
                                        <IoLocationSharp />
                                    </span>
                                    <div>
                                        <h3>Address</h3>
                                        <p>Từ Sơn, Bắc Ninh</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12} span={24}>
                            <div className={cx('form')}>
                                <Form
                                    name="contact"
                                    // initialValues={{
                                    //     remember: true,
                                    // }}

                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Row gutter={[20, 12]}>
                                        <Col lg={12} span={24}>
                                            <Form.Item
                                                style={{ width: '100%', margin: 0 }}
                                                name="username"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your name!',
                                                    },
                                                ]}
                                            >
                                                <Input style={{ padding: '16px 20px' }} placeholder="Your Name" />
                                            </Form.Item>
                                        </Col>
                                        <Col lg={12} span={24}>
                                            <Form.Item
                                                style={{ width: '100%', margin: 0 }}
                                                name="address"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your password!',
                                                    },
                                                    {
                                                        type: "email",
                                                        message: 'Please enter your email address',
                                                    }
                                                ]}
                                            >
                                                <Input style={{ padding: '16px 20px' }} placeholder="Your Email" />
                                            </Form.Item>
                                        </Col>
                                        <Col lg={12} span={24}>
                                            <Form.Item
                                                style={{ width: '100%', margin: 0 }}
                                                name="phone"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your username!',
                                                    },
                                                ]}
                                            >
                                                <Input style={{ padding: '16px 20px' }} placeholder="Your Phone" />
                                            </Form.Item>
                                        </Col>
                                        <Col lg={12} span={24}>
                                            <Form.Item
                                                style={{ width: '100%', margin: 0 }}
                                                name="subject"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your username!',
                                                    },
                                                ]}
                                            >
                                                <Input style={{ padding: '16px 20px' }} placeholder="Subject" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item
                                                style={{ width: '100%', margin: 0 }} >
                                                <TextArea style={{ padding: '16px 20px' }} placeholder="Your Message" rows={5} />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Button className={cx('submit')} htmlType="submit">
                                        <span>
                                            Submit
                                        </span>
                                    </Button>

                                </Form>
                            </div>
                        </Col>
                    </Row>


                </div>
            </div >
        </>
    );
}

export default Contact;