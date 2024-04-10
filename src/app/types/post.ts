export type Post = {
    _id: string;
    _ownerId: string;
    created_at: string;
    title: string;
    content: string;
    authorName?: string;
    _createdOn: number;
    _editedOn: number;
    post: string;
};

export type CreatePost = {
    title: string;
    content: string;
    authorName?: string;
    post: string;
}