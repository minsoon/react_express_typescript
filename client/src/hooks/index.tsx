import React, { useState, useEffect } from 'react';

const useStyles = (src: string, bodyClass: string) => {
    const [status, setStatus] = useState(src ? 'loading' : 'idle');
    useEffect(() => {
        if (!src) {
            setStatus('idle');
            return;
        }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = process.env.REACT_APP_CSS_URL + src;
        document.head.appendChild(link);
        document.body.classList.add(bodyClass);
        setStatus('ready');
    }, [src]);
    return status
}
export { useStyles };