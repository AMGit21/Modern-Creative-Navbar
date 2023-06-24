import { HomeIcon } from '../Assets/icons/HomeIcon/index';
import { TiInfoLargeIcon } from '../Assets/icons/TiInfoLargeIcon/index';
import { TiLockClosedIcon } from '../Assets/icons/TiLockClosedIcon/index';
import { MdCallIcon } from '../Assets/icons/MdCallIcon/index';
export const tabLink = [
    { id: 0, name: 'Home', to: '/', icon: HomeIcon },
    { id: 1, name: 'About', to: '/About', icon: TiInfoLargeIcon },
    { id: 2, name: 'Contact', to: '/Contact', icon: MdCallIcon },
    { id: 3, name: 'SignIn', to: '/sign-in', icon: TiLockClosedIcon } //(activebtn === "SignIn") ? TiLockOpenIcon : TiLockClosedIcon },
];