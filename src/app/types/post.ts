export type Post = {
    _id: string;
    _ownerId: string;
    title: string;
    content: string;
    authorName?: string;
    _createdOn: number;
    _editedOn: number;
    post: string;
    img: string;
};

export type CreatePost = {
    title: string;
    content: string;
    post: string;
}