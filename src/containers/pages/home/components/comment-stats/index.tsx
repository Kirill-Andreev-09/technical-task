import {Badge, Box} from "@mantine/core";
import {useStyles} from "./styles";

interface CommentStatsProps {
    commentCount: number;
    likeCount: number;
}

const CommentStats = ({commentCount, likeCount}: CommentStatsProps) => {
    const {classes} = useStyles();

    return (
        <Box className={classes.root}>
            <Badge variant="filled" color="blue">
                {commentCount} Comments
            </Badge>
            <Badge variant="filled" color="red" style={{marginLeft: 8}}>
                {likeCount} Likes
            </Badge>
        </Box>
    );
};

export default CommentStats;
