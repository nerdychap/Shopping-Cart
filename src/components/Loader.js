import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { LoaderWrapper } from '../styles/element-styling';
const Loader = () => {
    return (
        <LoaderWrapper>
            <PacmanLoader color="blue" />
        </LoaderWrapper>
    )
}

export default Loader
