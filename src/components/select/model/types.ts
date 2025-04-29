export interface Option {
    label: string;
    value: string;
}

export type Variant = 'allergen' | 'authors';
export interface MultiSelectProps {
    isDisabled?: boolean;
    selectedItems?: string[];
    options?: Option[];
    newOption?: string;
    onSelect?: (value: string) => void;
    onClear?: () => void;
    onNewOptionChange?: (value: string) => void;
    onAddOption?: () => void;
}
