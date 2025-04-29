import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    SystemStyleObject,
    Text,
} from '@chakra-ui/react';
import { FC, JSX } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import useBreadcrumbData from '~/common/CustomHooks/useBreadcrumbData.tsx';
import { breadcrumbBaseStyle, breadcrumbVariants } from '~/components/breadcrumb/style.tsx';

export type BreadcrumbVariant = keyof typeof breadcrumbVariants;

interface BreadcrumbProps {
    variant?: BreadcrumbVariant;
    sx?: SystemStyleObject;
    separator?: React.ReactNode;
}

const BreadcrumbComponent: FC<BreadcrumbProps> = ({
    variant = 'header',
    sx = {},
    separator = <ChevronRightIcon color='gray.500' />,
    ...rest
}): JSX.Element => {
    const { category, option, recipe } = useBreadcrumbData();

    const base = breadcrumbBaseStyle;
    const variantStyle = breadcrumbVariants[variant] || {};

    const combinedStyles = {
        container: { ...base.container, ...variantStyle.container, ...sx },
        link: { ...base.link, ...variantStyle.link },
        currentItem: { ...base.currentItem, ...variantStyle.currentItem },
    };

    const items = [
        { label: 'Главная', to: '/main' },
        category && { label: category.label, to: category.value && `/${category.value}` },
        option && {
            label: option.label,
            to: option.value && `/${category?.value}/${option.value}`,
        },
        recipe && { label: recipe.title },
    ].filter(Boolean);

    return (
        <Breadcrumb
            data-test-id='breadcrumbs'
            separator={separator}
            sx={combinedStyles.container}
            {...rest}
        >
            {items.map(({ label, to }, i, arr) => (
                <BreadcrumbItem key={i} isCurrentPage={i === arr.length - 1}>
                    {to && i !== arr.length - 1 ? (
                        <BreadcrumbLink as={RouterLink} to={to} sx={combinedStyles.link}>
                            {label}
                        </BreadcrumbLink>
                    ) : (
                        <Text sx={combinedStyles.currentItem}>{label}</Text>
                    )}
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

export default BreadcrumbComponent;
