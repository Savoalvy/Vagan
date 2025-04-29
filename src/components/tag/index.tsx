import { Tag, TagLabel } from '@chakra-ui/react';
import { JSX } from 'react';

import { tagStyle } from '~/components/tag/style.tsx';

const TagComponent = ({ val, label }): JSX.Element => (
    <Tag sx={tagStyle} key={val}>
        <TagLabel>{label}</TagLabel>
    </Tag>
);

export default TagComponent;
