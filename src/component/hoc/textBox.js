import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
    width: ${props => props.width ? props.width : '100%'};
    position: relative;
    height: ${props => props.size === 'small' ? '1.5rem' : '2.8rem'};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.borderNone ? "center" : undefined};
    cursor: ${props => props.disabled ? "not-allowed" : undefined};

    sup{
        color: red;
    }

    .error{
        border-bottom: 1px solid red !important;

       
    }


    .form__field {
        cursor: ${props => props.disabled ? "not-allowed" : undefined};

        margin-top: ${props => props.borderNone ? "0px" : "auto"};
        width: 100%;
        border: 0;
        border-bottom:${props => props.borderNone ? "0px" : '1px solid #ccc'};
        border-bottom-color:  ${props => props.borderColor ? props.borderColor : '#cccc'};
        outline: 0;
        font-size: ${props => props.size === 'large' ? '1.5rem' : '1rem'};
        background: transparent;
        transition: border-color 0.2s;
        line-height: ${props => props.size === 'large' ? '2.5rem !important' : '1.7rem !important'};
        z-index: 2;
        position: relative;
        padding: 0px;
        height: auto !important;
        padding-right: ${props => props.paddingRight ? props.paddingRight : undefined};
        box-sizing: border-box;
        
        }


        .form__field::placeholder {
            color: transparent;
        }
       
        .form__field:placeholder-shown ~ .form__label {
            font-weight: 400;
            font-size: ${props => props.size === 'large' ? '1.5rem' : '1rem'};
            cursor: text;
            top: ${props => props.size === 'large' ? '1rem' : '1.2rem'};
            z-index: 1;
            text-align: ${props => props.labelCenter ? 'center' : undefined};
            width: ${props => props.labelCenter ? "100%" : undefined};
            transition: all .2s;
            text-align: ${props => props.labelCenter ? 'center' : undefined};


        }

        label{
            position: absolute;
            top: ${props => props.size === 'large' ? '-.5rem' : '0rem'};
            display: block;
            transition: 0.2s;
            font-size: ${props => props.size === 'large' ? '1rem' : '.8rem'};
            color: ${props => props.error ? "red" : '#222'};

            transition: all .2s;
            width: ${props => props.labelCenter ? "100%" : undefined};
            text-align: ${props => props.labelCenter ? 'center' : undefined};

        }
        .form__field:focus ~ .form__label {
            position: absolute;
            font-weight: 400;

            top: ${props => props.size === 'large' ? '-.5rem' : '0rem'};
            display: block;
            transition: 0.2s;
            font-size: ${props => props.size === 'large' ? '1rem' : '.8rem'};
            color: ${props => props.error ? "red" : '#f84618'};

            transition: all .2s;
            width: ${props => props.labelCenter ? "100%" : undefined};
            text-align: ${props => props.labelCenter ? 'center' : undefined};



        }

        .form__field:focus ~ .form__label {
            font-weight: 400;
             color: ${props => props.error ? "red" : '#f84618'};

        }
        .form__field:hover{
            border-bottom: ${props => props.borderNone ? "0px" : '1px solid #f84618'};
        }
        .form__field:focus {
            border-bottom: ${props => props.borderNone ? "0px" : '2px solid #f84618'};
        }


        .form__error_msg{
            position: absolute;
            border: 0px;
            width: 100%;
            font-size: .6rem;
            display: inline-block;
            bottom: -1rem;
            z-index: 1;
            color: red;
        }
`;

const TextBox = (props) => {

    const {
        size, disabled, width, borderNone,
        label, isRequired, readOnly, refName,
        error, type, onChange, value, onFocus, onClick, onBlur, errorMessage, id,
        labelCenter, autoFocus, onKeyDown, paddingRight, lableStyle, height, borderColor } = props;

    return (
        <React.Fragment>
            <Wrapper borderNone={borderNone} error={error} size={size} disabled={disabled} width={width} labelCenter={labelCenter} paddingRight={paddingRight} height={height} borderColor={borderColor}>
                <input
                    style={{ padding: '0px 2px' }}
                    id={id ? id : undefined}
                    autoFocus={autoFocus ? autoFocus : undefined}
                    className={['form__field', error ? 'error' : ''].join(' ')}
                    placeholder="'"
                    value={value}
                    disabled={disabled}
                    type={type ? type : 'text'}
                    ref={refName}
                    onChange={(e) => {
                        if (!disabled) {
                            onChange(e)
                        }
                    }}
                    onFocus={(e) => {
                        if (onFocus && !disabled) {
                            onFocus(e)
                        }
                    }}
                    onClick={(e) => {
                        if (onClick && !disabled) {
                            onClick(e)
                        }
                    }}
                    onBlur={(e) => {
                        if (onBlur && !disabled) {
                            onBlur(e)
                        }
                    }}
                    onKeyDown={(e) => {
                        if (onKeyDown && !disabled) {
                            onKeyDown(e)
                        }
                    }}
                    autoComplete="off"
                />

                <label style={lableStyle ? lableStyle : undefined} className="form__label">{
                    label ? isRequired ? <span >{label}&nbsp;&nbsp;<sup>*</sup></span> : <div dangerouslySetInnerHTML={{ __html: label }}></div> : ''
                }</label>
                {errorMessage ? <span className="form__error_msg">{errorMessage}</span> : null}
            </Wrapper>
        </React.Fragment>
    )
}

export default TextBox
