import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    root: {
        height: "100%",
        width: `calc(100% - 32px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: theme.spacing.md,
    },
}));
