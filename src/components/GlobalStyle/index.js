// import { useSelector } from 'react-redux';
import { useState } from 'react';
import './globalStyle.scss'
import { Switch } from 'antd';

function GlobalStyle({ children }) {

    // const mode = useSelector(state => state.auth.mode)
    const [mode, setMode] = useState(true)
    const onchangeTheme = (checked) => {
        // alert(checked)
        setMode(!checked)
    }
    return (
        <div className={mode ? " " : 'global_dark_mode'}>
            <>
                {children}
            </>
        </div>
    );
}

export default GlobalStyle;