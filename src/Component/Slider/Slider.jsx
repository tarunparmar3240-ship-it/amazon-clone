import React from 'react'
import { useMediaQuery } from 'react-responsive';
import SliderMobile from '../../Component/Slider/SliderMobile/SliderMobile';
import SliderDesktop from '../../Component/Slider/SliderDesktop/SliderDesktop';

const Slider = () => {
    const isMobile = useMediaQuery({maxWidth: 767});

    return isMobile ? <SliderMobile /> : <SliderDesktop />;
}

export default Slider;