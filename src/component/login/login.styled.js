import styled from 'styled-components';

export const LoginWrapper =  styled.div`
    width: 500px;
    margin: auto;
    box-shadow: 1px 2px 8px 0px #ccc;
    border-radius: 4px;
    margin-top: 2rem;
    border: 1px solid #e8473626;
    padding: 1rem;
    box-sizing: border-box;

    @media only screen and (max-width: 600px) {
        width: 100%;
        box-shadow: 1px 2px 8px 0px #0000;
        border: 0px;
     }
    h1{
        margin-bottom: .1rem;
        color: #ff4819;
        font-weight: 600;
        text-align: center;
    }
    p{
        text-align: center;
        margin-bottom: 3rem;
        margin-top: 0px;
        color: #222;
        font-size: 1rem;
        font-weight: 600;

    }

    .row{
        width: 100%;
        margin-bottom: 1.5rem;
    }
`;