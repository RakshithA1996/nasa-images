import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import { getPictureOfDaySelector } from "../services/redux/selector";
import { HomeWrap } from '../styles/HomeStyle';

export default function Home() {
    const pictureOfDayArr = useSelector(getPictureOfDaySelector);
    const pictureOfDayArrData = pictureOfDayArr && pictureOfDayArr['data'];
    const imageUrl = pictureOfDayArrData && pictureOfDayArrData['url'];
    return(
        <HomeWrap>
            <img src={imageUrl} alt="" />   
        </HomeWrap>
    )
}