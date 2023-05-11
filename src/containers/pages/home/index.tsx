import {useState, useEffect} from "react";
import {Box} from "@mantine/core";
import {useEnhancedComments} from "./hooks/useEnhancedComments";
import {Author, CommentList} from "./components/comment-list";
import CommentStats from "./components/comment-stats";
import {useStyles} from "./styles";
import getAuthorsRequest from "src/api/authors/getAuthorsRequest";

export const Home = () => {
    const {classes} = useStyles();

    const {commentsData, initComments} = useEnhancedComments();
    const [authors, setAuthors] = useState<Author[]>([]);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        (async () => {
            const authors = await getAuthorsRequest();
            setAuthors(authors);

            const totalLikes = initComments.reduce(
                (total, comment) => total + comment.likes,
                0,
            );
            setLikeCount(totalLikes);
        })();
    }, [initComments]);

    const handleLikeChange = (delta: number) => {
        setLikeCount((prevState) => prevState + delta);
    };

    return (
        <Box className={classes.root}>
            <CommentStats
                commentCount={initComments.length}
                likeCount={likeCount}
            />

            <CommentList
                comments={commentsData.data}
                authors={authors}
                onLikeChange={handleLikeChange}
            />
        </Box>
    );
};
