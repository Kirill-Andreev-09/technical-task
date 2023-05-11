import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: "20px",
    },
    avatar: {
        marginRight: "10px",
    },
    content: {
        display: "flex",
        flexDirection: "column",
    },
    author: {
        display: "flex",
        alignItems: "center",
    },
    name: {
        fontWeight: 700,
        marginRight: "5px",
    },
    badge: {
        marginLeft: "5px",
    },
    icon: {
        marginLeft: "10px",
        color: "red",
    },
    time: {
        marginBottom: "4px",
        color: "#999",
    },
    children: {
        marginTop: "10px",
        paddingLeft: "50px",
    },
}));
