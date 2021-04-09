import {useSelector} from 'react-redux';
import { getPictureOfDaySelector } from "../services/redux/selector";
import dateConvert from '../services/utils/DateConvert';
import { BannerWrap } from '../styles/BannerStyle';

export default function Banner() {
    const pictureOfDayArr = useSelector(getPictureOfDaySelector);
    const pictureOfDayArrData = pictureOfDayArr && pictureOfDayArr['data'];
    const imageUrl = pictureOfDayArrData && pictureOfDayArrData['url'];
    const title = pictureOfDayArrData && pictureOfDayArrData['title'];
    const explanation = pictureOfDayArrData && pictureOfDayArrData['explanation'];
    const date = pictureOfDayArrData && pictureOfDayArrData['date'];
    const copyright = pictureOfDayArrData && pictureOfDayArrData['copyright'];
    return(
        <BannerWrap>
            <div className="imageOfDayText">NASA's image of the day</div>
            <img className="imageOfDay" src={imageUrl} alt="" /> 
            <div className="titleDiv">
                <div className="titleDiv__title">{title}</div>
                <div className="titleDiv__date">{date ? dateConvert(date) : ""}</div>
            </div>  
            <div className="explanation">{explanation}</div>
            <div className="copyright">Copyright : {copyright}</div>
        </BannerWrap>
    )
}