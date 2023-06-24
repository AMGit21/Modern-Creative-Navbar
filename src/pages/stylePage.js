import { primaryColor, secondaryColor } from "../components/Navbar/themesCss";
const stylePage = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: secondaryColor,
  color: primaryColor,
  margin: "8em auto",
  width: "100%",
  padding: "20px 0",
};
const footer = {
  position: "fixed",
  bottom: 0,
  textAlign: "center",
  backgroundColor: primaryColor,
  color: secondaryColor,
  width: "100%",
};
const mailLinkStyle = {
  textDecoration: "none",
  color: secondaryColor,
  fontWeight: "bold",
};
export { stylePage, footer, mailLinkStyle };
