import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { buttonConfig } from './config';

const ButtonComponent = ({ variantType = 'default', navigateTo, ...props }) => {
    const navigate = useNavigate();
    const config = buttonConfig[variantType];

    const handleClick = (e) => {
        if (navigateTo) {
            navigate(navigateTo);
        }
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <Button
            leftIcon={config?.leftIcon}
            rightIcon={config?.rightIcon}
            {...config?.styleProps}
            {...props}
            onClick={handleClick}
        >
            {config?.children}
        </Button>
    );
};

export default ButtonComponent;
