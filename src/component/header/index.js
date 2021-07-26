import React from 'react';
import styled from 'styled-components';
import { Button } from '../hoc/button';



const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    background: #ffffff;
    box-shadow: 2px 3px 4px #ccc;
    margin-bottom: 1rem;
    padding: 5px 2rem;
    box-sizing: border-box;

    @media only screen and (max-width: 767px) {
        flex-direction: column;
        padding: 10px;
     }


`;

const SideArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 40%;

    @media only screen and (max-width: 767px) {
        width: 100%;
        justify-content: space-between;
     }

    h1{
        margin-right: 1rem;
    }

    button{
        margin-left: 1rem;
    }

    input{
        width: 100%;
        height: 2.5rem;
        padding: 5px;
        border-radius: 3px;
        box-sizing: border-box;
        font-size: 1rem;
        @media only screen and (max-width: 767px) {
            width: 45%;
         }

    }
`;


function Index(props) {

    const { OnChange, searchValueOne, searchValueTwo, logOut, wrapperWidth } = props;

    const isMobile = (wrapperWidth && wrapperWidth < 776)
    return (
        <HeaderWrapper>
            {isMobile ? (
                <React.Fragment>
                    <SideArea>
                        <h1>App</h1>
                        <Button onClick={logOut}>LogOut</Button>

                    </SideArea>
                    <SideArea>
                        <input placeholder={'Type Your First URL'} type="text" value={searchValueOne} onChange={(e) => OnChange(e.target.value, 'searchValueOne')} />

                        <input placeholder={'Type Your Second URL'} type="text" value={searchValueTwo} onChange={(e) => OnChange(e.target.value, 'searchValueTwo')} />
                    </SideArea>
                </React.Fragment>
            ) :
                <React.Fragment>
                    <SideArea>
                        <h1>App</h1>
                        <input placeholder={'Type Your First URL'} type="text" value={searchValueOne} onChange={(e) => OnChange(e.target.value, 'searchValueOne')} />

                    </SideArea>

                    <SideArea>
                        <input placeholder={'Type Your Second URL'} type="text" value={searchValueTwo} onChange={(e) => OnChange(e.target.value, 'searchValueTwo')} />
                        <Button onClick={logOut}>LogOut</Button>
                    </SideArea>
                </React.Fragment>
            }

        </HeaderWrapper>
    )
}

export default Index
