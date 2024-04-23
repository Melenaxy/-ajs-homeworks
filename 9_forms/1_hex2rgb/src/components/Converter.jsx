import React, { useState } from 'react'

export const Converter = () => {
    const [state, setState] = useState({ hex: "", rgb: "", bgcolor: "" });
    const regExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

    function hexToRgb(hex) {
        const result = regExp.exec(hex);
        if (!result) {
            return;
        };
        const
            r = parseInt(result[1], 16),
            g = parseInt(result[2], 16),
            b = parseInt(result[3], 16);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const inputHandler = (e) => {
        const { value } = e.target;

        setState((prev) => ({ ...prev, hex: value }));

        if (value.match(regExp) && value.length === 7) {
            setState((prev) => ({ ...prev, rgb: hexToRgb(value), bgcolor: hexToRgb(value) }));
        } else if (!value.match(regExp) && value.length === 7) {
            setState((prev) => ({ ...prev, rgb: "Ошибка!", bgcolor: "#B22222" }));
        }
    };

    return (
        <div className="container" style={{ backgroundColor: state.bgcolor }}>
            <input className="hex-input" type="text" onInput={inputHandler} maxLength="7"></input>
            <input className="rgb-input" type="text" value={state.rgb} readOnly></input>
        </div>
    )
}
