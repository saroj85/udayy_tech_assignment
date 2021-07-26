import React from 'react';
import styled, { keyframes } from 'styled-components';


const ripple = keyframes`
    0% {
        transform: scale(0, 0);
        opacity: 1;
    }
    20% {
        transform: scale(25, 25);
        opacity: 1;
    }
    100% {
        opacity: 1;
        transform: scale(40, 40);
    }
`;


export const ButtonStyled = styled.button`
        display: ${props => props.display || 'inline-block'};
        padding: ${props => props.padding || "2px 1.286rem"};
        box-sizing: border-box;
        height: ${props => props.height || '2.5rem'};
        width: ${props => props.width || undefined};
        background-color: ${props => props.disabled ? '#eaeaea' : props.bgColor || '#ff4819'};
        border-radius: ${props => props.borderRadius || '4px'};
        border: 0px;
        font-weight: 400;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        font-size: 1rem;
        color: ${props => props.color || '#fff'};
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        cursor: ${props => props.disabled ? undefined : 'pointer'};
        white-space: nowrap;
        margin-right: ${props => props.mR ? props.mR : "0px"};
        font-family: "DM Sans", sans-serif;
        position: relative;
        overflow: hidden;
        transition: all 0.2s;
        text-transform: uppercase;
        font-weight: 500;


        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 5px;
            height: 5px;
            background: rgb(255 255 255 / 32%);
            opacity: 0;
            border-radius: 50%;
            transform: scale(1, 1) translate(-50%);
            transform-origin: 50% 50%;
        }

        &:active{
        }

        &:hover{
            background-color: ${props => props.disabled ? '#eaeaea' : props.primary ? '#ff4819' : undefined};
            cursor: ${props => props.disabled ? "not-allowed" : undefined};
        }
        &:focus{
            &:after{
                animation: ${ripple} 3s ease-out;
            }
            border: 0px;
            outline: none;
        }

`;



export const Button = (props) => {
    return (
        <ButtonStyled
            {...props}
            disabled={props.disabled}
            onClick={(event) => {
                setTimeout(() => {
                    props.onClick(event);
                }, 400);
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                {props.children}
            </div>
        </ButtonStyled>
    )
}


