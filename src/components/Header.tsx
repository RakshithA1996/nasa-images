import React from 'react';
import nasaLogo from "../images/nasaLogo.png";
import { HeadWrap } from "../styles/HeadStyle";
import { FaSearch } from "react-icons/fa";

export default function Header() {
    return (
        <HeadWrap>
            <img className="logo" src={nasaLogo} alt="" />
            <FaSearch className="searchIcon" />
        </HeadWrap>
    )
}