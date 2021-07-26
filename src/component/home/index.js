import React, { useState, useRef, useEffect } from 'react';
import Header from '../header'
import IFRAME from '../iFrame';
import styled from 'styled-components';

const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

`;


const Index = (props) => {

    const { logOut } = props;

    const [searchValueOne, setSearchValueOne] = useState(undefined)
    const [searchValueTwo, setSearchValueTwo] = useState(undefined)
    const [wrapperWidth, setWrapperWidth] = useState(undefined)


    const wrapperRef = useRef(null)


    const OnChange = (value, key) => {
        if (key === 'searchValueOne') {
            setSearchValueOne(value)
        }
        if (key === 'searchValueTwo') {
            setSearchValueTwo(value)
        }
    }



    useEffect(() => {
        if (wrapperRef && wrapperRef.current) {
            setWrapperWidth(wrapperRef.current.clientWidth)
        }
    }, [])

    const padding = 20;
    const iframeWidth = (wrapperWidth && wrapperWidth < 776) ? (wrapperWidth - padding) : (wrapperWidth / 2 - padding);

    return (
        <div style={{ width: '100%', }} ref={wrapperRef}>
            <Header
                logOut={logOut}
                searchValueOne={searchValueOne}
                searchValueTwo={searchValueTwo}
                OnChange={OnChange}
                wrapperWidth={wrapperWidth}
            />
            {wrapperWidth && (
                <FlexWrapper>
                    <IFRAME
                        src={searchValueOne}
                        height={500}
                        width={iframeWidth}
                        title={'View 1'}
                    />
                    <IFRAME
                        src={searchValueTwo}
                        height={500}
                        width={iframeWidth}
                        title={'View 2'}

                    />
                </FlexWrapper>
            )}

        </div>
    )
}

export default Index
