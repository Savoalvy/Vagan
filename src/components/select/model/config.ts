export const VARIANTS = {
    allergen: {
        label: 'Выберите из списка...',
        handleSelect: (selectedItems: string[], item: string) =>
            selectedItems.includes(item)
                ? selectedItems.filter((i) => i !== item)
                : [...selectedItems, item],
    },
    authors: {
        label: 'Поиск по автору',
        handleSelect: (selectedItems: string[], item: string) =>
            selectedItems.includes(item)
                ? selectedItems.filter((i) => i !== item)
                : [...selectedItems, item],
    },
    category: {
        label: 'Категория',
        handleSelect: (selectedItems: string[], item: string) =>
            selectedItems.includes(item)
                ? selectedItems.filter((i) => i !== item)
                : [...selectedItems, item],
    },
};
