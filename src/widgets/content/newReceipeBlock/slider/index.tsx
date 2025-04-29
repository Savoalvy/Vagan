import 'swiper/swiper-bundle.css';

import { Box, IconButton } from '@chakra-ui/react';
import { JSX } from 'react';
import { BsBookmarkHeart } from 'react-icons/bs';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SmileIcon from '~/assets/icons/smile';
import { RECIPE_CONFIG } from '~/common/configs/recipeConfig.tsx';
import CardComponent from '~/widgets/content/newReceipeBlock/slider/card';
import { sliderStyle } from '~/widgets/content/newReceipeBlock/slider/style.tsx';

const sortRecipes = (
    recipes: typeof RECIPE_CONFIG,
    key: 'date' | 'likes' | 'bookmarks',
    order: 'desc' | 'asc' = 'desc',
) =>
    [...recipes].sort((a, b) => {
        if (key === 'date') {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return order === 'desc' ? dateB - dateA : dateA - dateB;
        }
        return order === 'desc' ? b[key] - a[key] : a[key] - b[key];
    });

const byDate = sortRecipes(RECIPE_CONFIG, 'date');

const SliderComponent = (): JSX.Element => {
    const navigate = useNavigate();

    const handleCardClick = (category: string, option: string, id: string) => {
        navigate(`/${category}/${option}/${id}`);
    };

    return (
        <Box
            sx={{
                ...sliderStyle.container,
                '.swiper-button-prev::after, .swiper-button-next::after': {
                    display: 'none',
                },
            }}
        >
            <Swiper
                data-test-id='carousel'
                style={{ height: 'auto' }}
                spaceBetween={24}
                modules={[Navigation]}
                slidesPerView='auto'
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                breakpoints={{
                    320: {
                        spaceBetween: 12,
                    },
                    1920: {
                        spaceBetween: 24,
                    },
                }}
                loop
            >
                {byDate.map((item) => (
                    <SwiperSlide style={{ width: 'auto', height: 'auto' }} key={item.id}>
                        <CardComponent
                            data-test-id='food-card-${i}'
                            variant='slider'
                            image={item.image}
                            label={item.title}
                            description={item.description}
                            category={{ label: item.category }}
                            statistics={[
                                { icon: BsBookmarkHeart, value: item.bookmarks },
                                { icon: SmileIcon, value: item.likes },
                            ]}
                            recommended={item?.recommended}
                            onClick={() =>
                                handleCardClick(item.category[0], item.subcategory[0], item.id)
                            }
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <IconButton
                data-test-id='carousel-back'
                aria-label='Previous'
                icon={<HiArrowLongLeft />}
                className='swiper-button-prev'
                sx={{
                    ...sliderStyle.arrowButton,
                    ...sliderStyle.arrowButtonLeft,
                }}
            />
            <IconButton
                data-test-id='carousel-forward'
                aria-label='Next'
                icon={<HiArrowLongRight />}
                className='swiper-button-next'
                sx={{
                    ...sliderStyle.arrowButton,
                    ...sliderStyle.arrowButtonRight,
                }}
            />
        </Box>
    );
};

export default SliderComponent;
