import { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { RECIPE_CONFIG } from '~/common/configs/recipeConfig.tsx';
import { JUICIEST_PAGE_CONFIG, menuConfig } from '~/components/menuList/menuConfig.tsx';

const useBreadcrumbData = () => {
    const { pathname } = useLocation();
    const { category: paramCategory, option: paramOption, id } = useParams();
    const [categorySlug, optionSlug] = pathname.split('/').filter(Boolean);

    return useMemo(() => {
        const allCategories = [...menuConfig, JUICIEST_PAGE_CONFIG];

        const category = allCategories.find(
            (c) => c.value === categorySlug || c.value === paramCategory,
        );

        if (category?.value === 'juiciest') {
            category.label = 'Самое сочное';
        }

        const option =
            category?.options?.find((o) => o.value === optionSlug || o.value === paramOption) ||
            null;

        const recipe = id ? RECIPE_CONFIG.find((r) => r.id === id) || null : null;

        return { category: category || null, option, recipe };
    }, [categorySlug, optionSlug, paramCategory, paramOption, id]);
};

export default useBreadcrumbData;
