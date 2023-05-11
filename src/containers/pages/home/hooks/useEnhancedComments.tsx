import {useEffect, useState} from "react";
import getCommentsRequest from "src/api/comments/getCommentsRequest";

export type CommentType = {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: number | null;
    likes: number;
    children?: CommentType[];
};

export type CommentsType = {
    pagination: {
        page: number;
        size: number;
        total_pages: number;
    };
    data: CommentType[];
};

export const useEnhancedComments = () => {
    const [initComments, setInitComments] = useState<CommentType[]>([]);
    const [commentsData, setCommentsData] = useState<CommentsType>({
        pagination: {page: 1, size: 0, total_pages: 1},
        data: [],
    });

    useEffect(() => {
        fetchComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function fetchComments() {
        const response = await getCommentsRequest(1);
        const enhancedData = transformData(response);
        setCommentsData(enhancedData);
        setInitComments(enhancedData.data);
    }

    function transformData(comments: CommentsType): CommentsType {
        const commentMap = new Map<number, CommentType>();
        comments.data.forEach((comment) => commentMap.set(comment.id, comment));

        const rootComments: CommentType[] = [];
        comments.data.forEach((comment) => {
            if (comment.parent === null) {
                rootComments.push(comment);
            } else {
                const parentComment = commentMap.get(comment.parent);
                if (parentComment) {
                    if (!parentComment.children) parentComment.children = [];
                    parentComment.children.push(comment);
                }
            }
        });

        return {...comments, data: rootComments};
    }

    return {commentsData, initComments: initComments};
};
