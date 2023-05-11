import {Avatar, Badge, Group, Text, ActionIcon} from "@mantine/core";
import moment from "moment";
import {CommentType} from "../../hooks/useEnhancedComments";
import {Author} from "../comment-list";
import {useStyles} from "./styles";
import {IconHeart, IconHeartFilled} from "@tabler/icons-react";
import {useState} from "react";

interface CommentProps {
    comment: CommentType;
    authors: Author[];
    onLikeChange: (delta: number) => void;
}

export const CommentItem = ({comment, authors, onLikeChange}: CommentProps) => {
    const {classes} = useStyles();
    const {created, text, author, likes} = comment;

    const authorData = authors[author];
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);

    if (!authorData) return null;

    const formattedTime = moment(created).format("DD.MM.YYYY, HH:mm");

    const handleLike = () => {
        setLiked(true);
        setLikeCount((prevState) => prevState + 1);
        onLikeChange(1);
    };

    const handleUnlike = () => {
        setLiked(false);
        setLikeCount((prevState) => prevState - 1);
        onLikeChange(-1);
    };

    return (
        <Group spacing="xs" className={classes.container}>
            <Avatar
                radius="xl"
                size="lg"
                src={authorData.avatar}
                className={classes.avatar}
            />
            <div className={classes.content}>
                <div className={classes.author}>
                    <Text weight={700} className={classes.name}>
                        {authorData.name}
                    </Text>
                    {likeCount > 0 && (
                        <Badge variant="outline" className={classes.badge}>
                            {likeCount}
                        </Badge>
                    )}
                    {liked ? (
                        <ActionIcon
                            variant="transparent"
                            aria-label="Unlike icon"
                            className={classes.icon}
                            onClick={handleUnlike}
                        >
                            <IconHeartFilled />
                        </ActionIcon>
                    ) : (
                        <ActionIcon
                            variant="transparent"
                            aria-label="Like icon"
                            className={classes.icon}
                            onClick={handleLike}
                        >
                            <IconHeart />
                        </ActionIcon>
                    )}
                </div>
                <Text size="sm" color="gray" className={classes.time}>
                    {formattedTime}
                </Text>
                <Text>{text}</Text>
                {comment.children?.map((child) => (
                    <div key={child.id} className={classes.children}>
                        <CommentItem
                            comment={child}
                            authors={authors}
                            onLikeChange={onLikeChange}
                        />
                    </div>
                ))}
            </div>
        </Group>
    );
};
