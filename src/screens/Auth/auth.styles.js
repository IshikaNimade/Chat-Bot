export const AuthStyles = {
    loginTab: (tabValue) => {
        return {
            backgroundColor: tabValue === 0 ? "#8FE298" : "#E4E4E4",
            color: tabValue === 0 ? "#000": "#8B8B8B",
            borderRadius: "10px"
        }
    },
    registerTab : (tabValue) => {
        return {
            backgroundColor: tabValue === 1 ?  "#8FE298" : "#E4E4E4",
            color: tabValue === 1 ? "#000": "#8B8B8B",
            marginLeft: "10px",
            borderRadius: "10px"
        }
    }

}