import React, { useState, useEffect } from 'react';
import Container from './styles';

function Clock() {
    const [date, setDate] = useState(new Date());

    const refreshDate = () => setDate(new Date());

    useEffect(() => {
        const refresh = setInterval(refreshDate, 1000);
        return () => clearInterval(refresh);
    }, []);

    return (
        <Container>
            <span>
                <div>{date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}</div>
                Hours
            </span>
            <span>
                <div>{date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}</div>
                Minutes
            </span>
            <span>
                <div>{date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}</div>
                Seconds
            </span>
        </Container>
    );
}

export default Clock;