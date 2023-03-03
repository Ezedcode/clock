import React, { useState } from 'react';
import { useContext } from 'react';
import GlobalVar from '../../context/GlobalVar';
import Container from './styles';

function BtTheme() {
    const [active, setActive] = useState(false);
    const [deactive, setDeactivate] = useState("active");
    const { setChange } = useContext(GlobalVar);

    const activeBtn = () => {
        if (active) {
            setTimeout(() => {
                setActive(false);
                setChange(true);
            }, 500);

            setDeactivate("deactive");
        } else {
            setActive(true);
            setChange(false);
            setDeactivate("active");
        }
    }

    return (
        <Container onClick={activeBtn}>
            <div className={active && deactive}></div>
        </Container>
    );
}

export default BtTheme;