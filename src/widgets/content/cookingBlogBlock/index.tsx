import { Flex, Text } from '@chakra-ui/react';
import { JSX } from 'react';

import AUTHOR_CARD_CONFIG from '~/common/configs/userAuthorConfig.tsx';
import ButtonComponent from '~/components/buttons/Buttons';
import { cookingBlogStyle } from '~/widgets/content/cookingBlogBlock/style.tsx';
import UserCard from '~/widgets/content/cookingBlogBlock/UserCard';

const CookingBlogBlock = (): JSX.Element => (
    <Flex m={{ base: '20px', ml: 0 }}>
        <Flex sx={cookingBlogStyle.wrapper}>
            <Flex sx={cookingBlogStyle.wrapper.label}>
                <Text sx={cookingBlogStyle.text}>Кулинарные блоги</Text>
                <Flex display={{ base: 'none', md: 'flex' }}>
                    <ButtonComponent variantType='authors' />
                </Flex>
            </Flex>
            <Flex sx={cookingBlogStyle.wrapper.users}>
                {AUTHOR_CARD_CONFIG.map((author) => (
                    <UserCard
                        key={author.username}
                        name={author.name}
                        username={author.username}
                        avatar={author.avatar}
                        description={author.text}
                    />
                ))}
            </Flex>
            <Flex sx={cookingBlogStyle.wrapper.footer}>
                <ButtonComponent variantType='authors' />
            </Flex>
        </Flex>
    </Flex>
);

export default CookingBlogBlock;
