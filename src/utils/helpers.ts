export const fnGetById = (array: any, id: any) => {
    return array.find((item: any) => item._id === id);
};

export const filtredArrById = (array: any[], id: string) => [
    ...array.filter((item) => item !== id),
];

export const formatObjData = (data: any) => {
    const {image, price, brand, category, description, title, gender, status} =
        data;
    const formData = new FormData();

    formData.append('status', status);
    formData.append('gender', gender);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('brand', brand);
    formData.append('price', price);

    if (typeof image === 'string') {
        formData.append('image', image);
        return formData;
    }

    if (typeof image === 'object') {
        formData.append('image', image, image.name);
        return formData;
    }
    return formData;
};

export const formatLinkImg = (str: any) => {
    if (str) {
        return window.location.origin + '/' + str.replace(/\\/g, '/');
    } else {
        return '';
    }
};
