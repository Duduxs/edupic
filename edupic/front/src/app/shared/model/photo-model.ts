export class PhotoModel {
    id: number;
    userId: number;
    description: string;
    likes: number;
    comments: number;
    allowComments: boolean;
    url: string;
    postDate: Date;
}