export type ICategory = {
    _id: string;
    title: string;
    description: string;
    date: string;
};

export type IBrand = {
    id: string;
    title: string;
    description: string;
    date: string;
};

export type IGender = 'male' | 'female' | 'other';

export type IProduct = {
    _id?: string;
    image: string;
    title: string;
    price?: number;
    description: string;
    brand: IBrand;
    category: ICategory;
    gender: IGender;
    status: boolean;
};

export type IUserRole = 'client' | 'admin';

export type IUser = {
    id?: string;
    username: string;
    password?: string;
    email: string;
    role: IUserRole;
    gender?: IGender;
};
