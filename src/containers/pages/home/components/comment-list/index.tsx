import {CommentType} from "../../hooks/useEnhancedComments";
import {CommentItem} from "../comment-item";
import {useStyles} from "./styles";
import {Box} from "@mantine/core";

export type Author = {
    id: number;
    name: string;
    avatar: string;
};

type CommentsListProps = {
    comments: CommentType[];
    authors: Author[];
    onLikeChange: (delta: number) => void;
};

export const CommentList = ({
    comments,
    authors,
    onLikeChange,
}: CommentsListProps) => {
    const {classes} = useStyles();

    return (
        <Box className={classes.root}>
            {comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    authors={authors}
                    onLikeChange={onLikeChange}
                />
            ))}
        </Box>
    );
};
