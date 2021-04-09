import { HomeWrap } from '../styles/HomeStyle';
import Banner from './Banner';
import Header from './Header';

export default function Home() {
    return(
        <HomeWrap>
            <Header />
            <Banner />
        </HomeWrap>
    )
}