import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    root: {
        height: `100%`,
        width: `100%`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.md,
    },
}));
