
import { Affix, Anchor, Col, Row, Select, Space, Switch } from "antd";
import style from "./header.module.scss";
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { HiMenu } from 'react-icons/hi';
const cx = classNames.bind(style);
function Header() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const { Link } = Anchor;
    const [affixed, setAffixed] = useState(false);
    const [onCollapse, setOnCollapse] = useState(false);


    const onchangeTheme = (checked) => {
        console.log(checked);
    }
    const onChangeLanguage = (value) => {
        i18n.changeLanguage(value);
    }



    useEffect(() => {

    }, []);
    return (
        <>
            <Affix offsetTop={-2} style={{ left: "-1px !important" }} onChange={(affixed) => setAffixed(affixed)}>
                <div className={cx('header')} style={true ? { backgroundColor: "var(--header-bg)" } : {}} >
                    <div style={true ? { padding: '10px 0' } : {}}>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col>
                                <div className={cx('nav')}>
                                    <Anchor direction="horizontal" affix={false}>
                                        <Link href="/#home" title={t('nav.home')} />
                                        <Link href="/#about" title={t('nav.about')} />
                                        <Link href="/#service" title={t('nav.service')} />
                                        <Link href="/#portfolio" title={t('nav.portfolio')} />
                                        <Link href="/#contact" title={t('nav.contact')} />
                                    </Anchor>
                                </div>
                                <div className={cx('nav_mobile')}>
                                    <HiMenu onClick={() => setOnCollapse((c) => !c)} id="button_collapse" style={{ fontSize: "20px", cursor: "pointer" }} />
                                    <div style={onCollapse ? { height: "190px" } : { height: "0", padding: 0 }} className={cx('nav_dropdown')}>
                                        <Anchor affix={false}>
                                            <div onClick={() => setOnCollapse(false)}>
                                                <Link href="#home" title={t('nav.home')} />
                                            </div>
                                            <div onClick={() => setOnCollapse(false)}>
                                                <Link href="#about" title={t('nav.about')} />
                                            </div>
                                            <div onClick={() => setOnCollapse(false)}>
                                                <Link href="#service" title={t('nav.service')} />
                                            </div>
                                            <div onClick={() => setOnCollapse(false)}>
                                                <Link href="#portfolio" title={t('nav.portfolio')} />
                                            </div>
                                            <div onClick={() => setOnCollapse(false)}>
                                                <Link href="#contact" title={t('nav.contact')} />
                                            </div>
                                        </Anchor>
                                    </div>
                                </div>

                            </Col>
                            <Col>
                                <div className={cx('func')}>
                                    <Space>
                                        <div className={cx('theme')}>
                                            <Switch onChange={onchangeTheme} checkedChildren={t('nav.theme.dark')} unCheckedChildren={t('nav.theme.light')} defaultChecked />
                                        </div>
                                        <div className={cx('.lang')}>
                                            <Select
                                                defaultValue={"English"}
                                                style={{
                                                    width: 120,
                                                }}
                                                onChange={onChangeLanguage}
                                                options={[
                                                    {
                                                        value: 'en',
                                                        label: "English",
                                                    },
                                                    {
                                                        value: 'vi',
                                                        label: "Tiếng Việt",
                                                    },


                                                ]}
                                            />
                                        </div>

                                    </Space>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div >
            </Affix>

        </>
    );
}

export default Header;