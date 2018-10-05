import { IUser } from "../../user";
import { ICategory } from "../../categorieslist/category";

export interface IUserDetail {
    id: number;
    user: IUser;
    fullName: string;
    nickName: string;
    birthDate: string;
    categories: {
        [key: string]: ICategory[]
    };
    gender: string;
    shortDescription: string;
    profileImage: string;
}


