import { GridItem } from '@chakra-ui/react';
import { BsBookmarkHeart, BsFillPeopleFill } from 'react-icons/bs';

import SmileIcon from '~/assets/icons/smile';
import RecipeButton from '~/components/buttons/Recipe';
import StatisticComponent from '~/widgets/header/statistic';
import { sideBarRightStyle } from '~/widgets/sideBarRight/style.tsx';

const STATISTIC_CONFIG = [
    {
        icon: BsBookmarkHeart,
        value: 185,
    },
    {
        icon: BsFillPeopleFill,
        value: 589,
    },
    {
        icon: SmileIcon,
        value: 587,
    },
];
const SideBarLeft = () => (
    <GridItem sx={sideBarRightStyle}>
        <StatisticComponent variant='statistic' config={STATISTIC_CONFIG} />
        <RecipeButton />
    </GridItem>
);

export default SideBarLeft;
