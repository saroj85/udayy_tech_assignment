import React from 'react'
import { validURL } from '../../utils';

function Index(props) {
    const { width, height, src, title } = props;
    return <iframe title={title} src={validURL(src) ? src : 'https://portal.udayy.com/'} width={width} height={height}/>
}

export default Index
