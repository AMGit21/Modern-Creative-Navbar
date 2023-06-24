import { primaryColor, secondaryColor } from "../components/Navbar/themesCss"
const stylePage = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: secondaryColor,
    color: primaryColor,
    margin: '25em auto',
    width: '100%'
}
const footer = {
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    backgroundColor: primaryColor,
    color: secondaryColor,
    width: '100%'
}

export { stylePage, footer }