const size = {
    mobile : "770px",
    tabletS : "1023px",
    tabletM : "1220px",
    tabletL : "1280px",
    laptop : "1460px",
    desktop : "1700px",
}

const theme = {
    backgroundColor:"#282a36",
    Background :"#282a36",
    CurrentLine:"#44475a",
    Foreground:"#f8f8f2",
    Comment:"#6272a4",
    Cyan:"#8be9fd",
    Green:"#50fa7b",
    Orange:"#ffb86c",
    Pink:"#ff79c6",
    Purple:"#bd93f9",
    Red:"#ff5555",
    Yellow: "#f1fa8c",
    mobile : `(max_width: ${size.mobile})`,
    tabletS : `(max-width: ${size.tabletS})`,
    tabletM : `(max-width: ${size.tabletM})`,
    tabletL : `(max-width: ${size.tabletL})`,
    laptop : `(max-width: ${size.laptop})`,
    desktop : `(max-width:${size.desktop})`
}

export default theme;