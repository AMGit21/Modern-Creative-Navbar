import React, { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa';
import profileImg from '../../Assets/imgs/profileImg.jpg';
import { Search } from '../Navbar/Search';
import { MovingButton } from './Search/MovingButton';
import { SearchDivWrapper } from './Search/SearchDivWrapper';
import { CategoriesWrapper } from "./Search/SearchDivWrapper/CategoriesWrapper";
import { CategoriesInput } from './Search/SearchDivWrapper/CategoriesWrapper/CategoriesInput';
import { CategoryIcon } from './Search/SearchDivWrapper/CategoriesWrapper/CategoryIcon';
import { CategoriesList } from './Search/SearchDivWrapper/CategoriesWrapper/CategoriesList';
import { SearchIcon } from './Search/SearchDivWrapper/SearchIcon';
import { CategoriesListItemWrapper } from './Search/SearchDivWrapper/CategoriesWrapper/CategoriesList/CategoriesListItemWrapper';
import { CategoriesListItemLeft } from './Search/SearchDivWrapper/CategoriesWrapper/CategoriesList/CategoriesListItemWrapper/CategoriesListItemLeft';
import { CategoriesListIconLeft } from './Search/SearchDivWrapper/CategoriesWrapper/CategoriesList/CategoriesListItemWrapper/CategoriesListItemLeft/CategoriesListIconLeft';
import { CategoriesListItemMiddle } from './Search/SearchDivWrapper/CategoriesWrapper/CategoriesList/CategoriesListItemWrapper/CategoriesListItemMiddle';
import { CategoriesListItem } from './Search/SearchDivWrapper/CategoriesWrapper/CategoriesList/CategoriesListItemWrapper/CategoriesListItemMiddle/CategoriesListItem';
import { CategoriesListItemRight } from './Search/SearchDivWrapper/CategoriesWrapper/CategoriesList/CategoriesListItemWrapper/CategoriesListItemRight';
import { CategoriesListIconRight } from './Search/SearchDivWrapper/CategoriesWrapper/CategoriesList/CategoriesListItemWrapper/CategoriesListItemRight/CategoriesListIconRight';
import { SearchInput } from './Search/SearchDivWrapper/SearchInput';
import { SocialMediaSection } from './Search/SocialMediaSection';
import { SocialTwitter } from './Search/SocialMediaSection/SocialTwitter';
import { SocialLinkedin } from './Search/SocialMediaSection/SocialLinkedin';

import { Nav } from './Nav';
import { NavLogo } from './Nav/NavLogo';
import { Bars } from './Nav/Bars';
import { NavMenu } from './Nav/NavMenu';
import { NavbarMegaDropdown } from './Nav/NavMenu/NMegaDp';
import { NavbarMegaDropdownLabel } from './Nav/NavMenu/NMegaDp/NMegaDpLabel';
import { NavbarMegaDropdownContent } from './Nav/NavMenu/NMegaDp/NMegaDpContent';
import { NavbarListWrapper } from './Nav/NavMenu/NMegaDp/NMegaDpContent/NListWrapper';
import { NavbarMegaDropdownLeftSideSection } from './Nav/NavMenu/NMegaDp/NMegaDpContent/NListWrapper/NMegaDpLeftSection';
import { NavbarDropdownContentMDropdown } from './Nav/NavMenu/NMegaDp/NMegaDpContent/NListWrapper/NMegaDpLeftSection/NDpContentMDp';
import { DropdownNavLink } from './Nav/NavMenu/NMegaDp/NMegaDpContent/NListWrapper/NMegaDpLeftSection/NDpContentMDp/DpNavLink';
import { NavbarMegaDropdownMiddleSection } from './Nav/NavMenu/NMegaDp/NMegaDpContent/NListWrapper/NMegaDpMiddleSection';
import { NavbarMegaDropdownRightSideSection } from './Nav/NavMenu/NMegaDp/NMegaDpContent/NListWrapper/NMegaDpRightSection';
import { NavLink } from './Nav/NavMenu/NavLink';
import { NavbarDropdown } from './Nav/NavMenu/NDp';
import { NavbarDropdownLabel } from './Nav/NavMenu/NDp/NDpLabel';
import { NavbarDropdownContent } from './Nav/NavMenu/NDp/NDpContent';
import { NavbarDropdownListWrapper } from './Nav/NavMenu/NDp/NDpContent/NDpListWrapper';


import { ChevronDownSharpIcon } from '../../Assets/icons/ChevronDownSharpIcon/index';
import { ChevronUpSharpIcon } from '../../Assets/icons/ChevronUpSharpIcon/index';

import {
    HamburgerMenu,
    HamburgerMenuLink,
    CloseToggle,
} from "./NavbarElements";
import { navbarAfterScrolling, navbarBeforeScrolling } from "./themesCss";
import { tabLink } from '../../Data/data';
const Navbar = () => {
    const [activebtn, setActiveBtn] = useState("Home");
    const [hamburgermenustate, setHamburgerMenuState] = useState("false");
    const [isFeaturesMenuOpen, setFeaturesMenuOpen] = useState(false);
    const [isNewMenuOpen, setNewMenuOpen] = useState(false);
    const setActBtn = (btn) => {
        switch (btn) {
            case "Home":
                setActiveBtn("Home");
                console.log("Home Page");
                return true;
            case "About":
                setActiveBtn("About");
                console.log("About Page");
                return true;
            case "Contact":
                setActiveBtn("Contact");
                console.log("Contact Page");
                return true;
            case "SignIn":
                setActiveBtn("SignIn");
                console.log("SignIn Page");
                return true;
            case "SignUp":
                setActiveBtn("SignUp");
                console.log("SignUp Page");
                return true;
            default:
                return false;
        }
    }

    //navbar scroll when active state
    const [navbarscrollingstate, setNavbarScrollingState] = useState('');
    //navbar scroll changeBackground function
    const changeBackground = () => {
        console.log(window.scrollY)
        window.scrollY >= 2 ?
            setNavbarScrollingState(navbarAfterScrolling) :
            setNavbarScrollingState(navbarBeforeScrolling);
    }
    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);

        const path = window.location.pathname.split("/");
        console.log(path[1]);
        path[1] === "" ? setActiveBtn("Home") : (path[1] === "sign-in" ? setActiveBtn("SignIn") : setActiveBtn(path[1]));
    }, []);


    return (
        <>
            <Search navbarscrollingstate={navbarscrollingstate}>
                <MovingButton navbarscrollingstate={navbarscrollingstate}>Hey! How are you?!</MovingButton>
                <SearchDivWrapper navbarscrollingstate={navbarscrollingstate}>
                    <CategoriesWrapper navbarscrollingstate={navbarscrollingstate}>
                        <CategoriesInput navbarscrollingstate={navbarscrollingstate} placeholder="Choose Categories" />
                        <CategoryIcon size={22} navbarscrollingstate={navbarscrollingstate} />
                        <CategoriesList navbarscrollingstate={navbarscrollingstate}>
                            {tabLink.map(tab =>
                                <CategoriesListItemWrapper
                                    key={tab.id}
                                    active={String(activebtn === tab.name)} >
                                    <CategoriesListItemLeft>
                                        <CategoriesListIconLeft size={22} active={String(activebtn === tab.name)} />
                                    </CategoriesListItemLeft>
                                    <CategoriesListItemMiddle active={String(activebtn === tab.name)}>
                                        <CategoriesListItem
                                            to={tab.to}
                                            active={String(activebtn === tab.name)}
                                            onClick={() => setActBtn(tab.name)}
                                        >{tab.name}
                                        </CategoriesListItem>
                                    </CategoriesListItemMiddle>
                                    <CategoriesListItemRight>
                                        <CategoriesListIconRight size={22} active={String(activebtn === tab.name)} />
                                    </CategoriesListItemRight>
                                </CategoriesListItemWrapper>
                            )}
                        </CategoriesList>
                    </CategoriesWrapper>
                    <SearchInput navbarscrollingstate={navbarscrollingstate} placeholder="Search..." />
                    <SearchIcon size={22} navbarscrollingstate={navbarscrollingstate} />
                </SearchDivWrapper>
                <SocialMediaSection>
                    <SocialTwitter size={22} />
                    <SocialLinkedin size={22} />
                </SocialMediaSection>
            </Search>

            <Nav navbarscrollingstate={navbarscrollingstate}>
                <NavLogo
                    navbarscrollingstate={navbarscrollingstate}
                    to="/"
                    active={String(activebtn === "Home")}
                    onClick={() => setActBtn("Home")}
                >
                    Ali
                </NavLogo>
                <Bars navbarscrollingstate={navbarscrollingstate}
                    onClick={() => setHamburgerMenuState("true")}
                />
                <NavMenu>
                    <NavbarMegaDropdown navbarscrollingstate={navbarscrollingstate}
                        active={String(activebtn === "new")}
                        onClick={() => setActBtn("new")}>
                        <NavbarMegaDropdownLabel
                            navbarscrollingstate={navbarscrollingstate}
                            onMouseEnter={() => setNewMenuOpen(true)}
                            onMouseLeave={() => setNewMenuOpen(false)}
                        >New
                            {isNewMenuOpen ?
                                <ChevronUpSharpIcon navbarscrollingstate={navbarscrollingstate} /> :
                                <ChevronDownSharpIcon navbarscrollingstate={navbarscrollingstate} />
                            }
                        </NavbarMegaDropdownLabel>
                        {/* ********************************************************************** */}
                        <NavbarMegaDropdownContent navbarscrollingstate={navbarscrollingstate}>
                            <NavbarListWrapper navbarscrollingstate={navbarscrollingstate}>
                                <NavbarMegaDropdownLeftSideSection>
                                    <NavbarDropdownContentMDropdown navbarscrollingstate={navbarscrollingstate}>
                                        {tabLink.map(tab =>
                                            <DropdownNavLink
                                                key={tab.id}
                                                navbarscrollingstate={navbarscrollingstate}
                                                to={tab.to}
                                                active={String(activebtn === tab.name)}
                                                onClick={() => setActBtn(tab.name)}
                                            >{tab.name}
                                            </DropdownNavLink>
                                        )}
                                    </NavbarDropdownContentMDropdown>
                                </NavbarMegaDropdownLeftSideSection>
                                <NavbarMegaDropdownMiddleSection>
                                    <NavbarDropdownContentMDropdown navbarscrollingstate={navbarscrollingstate}>
                                        {tabLink.map(tab =>
                                            <DropdownNavLink
                                                key={tab.id}
                                                navbarscrollingstate={navbarscrollingstate}
                                                to={tab.to}
                                                active={String(activebtn === tab.name)}
                                                onClick={() => setActBtn(tab.name)}
                                            >{tab.name}
                                            </DropdownNavLink>
                                        )}
                                    </NavbarDropdownContentMDropdown>
                                </NavbarMegaDropdownMiddleSection>
                                <NavbarMegaDropdownRightSideSection>
                                    <NavbarDropdownContentMDropdown navbarscrollingstate={navbarscrollingstate}
                                        style={{
                                            backgroundImage: `url(${profileImg})`,
                                            backgroundSize: `cover`,
                                            backgroundRepeat: `no-repeat`,
                                            backgroundPosition: `center`,
                                        }}>
                                    </NavbarDropdownContentMDropdown>
                                </NavbarMegaDropdownRightSideSection>
                            </NavbarListWrapper>
                        </NavbarMegaDropdownContent>
                    </NavbarMegaDropdown>

                    {tabLink.map(tab =>
                        <NavLink
                            key={tab.id}
                            navbarscrollingstate={navbarscrollingstate}
                            id={tab.id}
                            to={tab.to}
                            active={String(activebtn === tab.name)}
                            onClick={() => setActBtn(tab.name)}
                        >
                            {tab.name}
                            <tab.icon fixedicons='false'
                                navbarscrollingstate={navbarscrollingstate} />
                        </NavLink>
                    )}

                    <NavbarDropdown navbarscrollingstate={navbarscrollingstate}>
                        <NavbarDropdownLabel
                            navbarscrollingstate={navbarscrollingstate}
                            onMouseEnter={() => setFeaturesMenuOpen(true)}
                            onMouseLeave={() => setFeaturesMenuOpen(false)}
                        >Features
                            {isFeaturesMenuOpen ?
                                <ChevronUpSharpIcon navbarscrollingstate={navbarscrollingstate} /> :
                                <ChevronDownSharpIcon navbarscrollingstate={navbarscrollingstate} />
                            }
                        </NavbarDropdownLabel>
                        <NavbarDropdownContent navbarscrollingstate={navbarscrollingstate}>
                            <NavbarDropdownListWrapper navbarscrollingstate={navbarscrollingstate}>
                                {tabLink.map(tab =>
                                    <DropdownNavLink
                                        key={tab.id}
                                        navbarscrollingstate={navbarscrollingstate}
                                        to={tab.to}
                                        active={String(activebtn === tab.name)}
                                        onClick={() => setActBtn(tab.name)}
                                    >{tab.name}
                                    </DropdownNavLink>
                                )}
                            </NavbarDropdownListWrapper>
                        </NavbarDropdownContent>
                    </NavbarDropdown>
                </NavMenu>
            </Nav>

            <HamburgerMenu
                hamburgermenustate={hamburgermenustate}>
                {tabLink.map(tab =>
                    <HamburgerMenuLink
                        key={tab.id}
                        navbarscrollingstate={navbarscrollingstate}
                        to={tab.to}
                        active={String(activebtn === tab.name)}
                        onClick={() => setActBtn(tab.name)}>
                        <tab.icon fixedicons='true'
                            navbarscrollingstate={navbarscrollingstate}
                        />
                        {tab.name}
                    </HamburgerMenuLink>
                )}
                <CloseToggle
                    hamburgermenustate={hamburgermenustate}
                    onClick={() => setHamburgerMenuState("false")}>
                    <FaTimes />
                </CloseToggle>
            </HamburgerMenu>

        </>
    );
};
export default Navbar;