export const defaultMessages = {
    login: {
        success: 'Успешная авторизация.',
        error: 'Ошибка авторизации',
    },
    register: {
        success: 'Успешная регистрация.',
        error: 'Ошибка регистрация',
    },
    loading: {
        success: (name: string) => `Успшено загреженны ${name}.`,
        error: (name: string) => `Ошибка загрузки ${name}.`,
    },
    all: {
        success: `Успех.`,
        error: `Ошибка.`,
    },
};
