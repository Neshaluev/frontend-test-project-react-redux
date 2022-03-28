export const localStorage = {
    clear: () => window.localStorage.clear(),
    setItem: (name: string, value: any) =>
        window.localStorage.setItem(name, value),
    getItem: (name: string) => window.localStorage.getItem(name),
    removeItem: (name: string) => window.localStorage.removeItem(name),
    setItemToBasket: (value: any) => {
        const basket = localStorage.getItem('basket');
        if (basket) {
            const formatBasket = JSON.parse(basket);
            formatBasket.push(value);
            localStorage.setItem('basket', JSON.stringify(formatBasket));
        } else {
            localStorage.setItem('basket', JSON.stringify([value]));
        }
    },
    removeItemFromBasket: (id: string) => {
        const basket = localStorage.getItem('basket');
        if (!basket) return;
        const formatBasket = JSON.parse(basket);
        const result = formatBasket.filter((item: any) => item._id !== id);
        localStorage.setItem('basket', JSON.stringify(result));
    },
    getItemsToBasket: () => {
        const basket = localStorage.getItem('basket');
        if (!basket) return;
        return JSON.parse(basket);
    },
};
