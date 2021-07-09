import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #000;
    display: flex;
    height: 50px;
    justify-content: space-around;
    align-items:center;
    wdith:100%;
    z-index: 10;
    top:0;
    position: sticky;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active{
        color: #15cdfc;
        border-bottom: 3px solid #15cdfc;
    }
`

export const Bars = styled(FaBars)`\
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        right: 25px;
        transform: translate(-100%, 75%)
        font-size: 1.8rem;
        cursor:pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    height: 100%;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    /*2nd Nav*/
    margin-left:24px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606
    }
`
