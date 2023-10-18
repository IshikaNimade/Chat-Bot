export const commonComponentStyles = {
    // AppBar styles 
    appBar: {
        backgroundColor: '#fff'
    },
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // login styles
    loginBtn: {
        width: "100%",
        backgroundColor: "#3D3D3D",
        marginTop: "1rem"
    },
    errorCard: {
        marginTop: "1rem",
        borderColor: "red"
    },
    errorCardContent: {
        display: "flex",
        alignItems: "center",
    },
    infoOutlineIcon: {
        color: "red",
        marginRight: "0.5rem"
    },
    chatContainer: (isSender) => {
        return {
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
            justifyContent: isSender && "flex-end",
            marginRight: isSender && "10px"
        }
    },
    toyOutline: {
        color: "blue",
        marginRight: "16px"
    },
    chatCard: (isSender) => {
        return {
            width: "300px",
            backgroundColor: isSender ? "#D7FFD0" : "#F8F8F8",
            borderColor: isSender ? "#8FE298" : "#B1B1B1",
            borderRadius: "5px",
            border: `1px solid ${isSender ? "#8FE298" : "#B1B1B1"}`,
        }
    },
    listCard : {
        marginTop: "1rem",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "5px"
    }
}