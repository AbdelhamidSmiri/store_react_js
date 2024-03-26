import React, { useRef, useState } from 'react';

import { RxDotFilled } from 'react-icons/rx';

function SlideImages({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);


    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
        touchEndX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current < touchEndX.current) {
            // Swiped right
            const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        } else if (touchStartX.current > touchEndX.current) {
            // Swiped left
            const newIndex = (currentIndex + 1) % slides.length;
            setCurrentIndex(newIndex);
        }
    };

    return (
        <>
            <div className='h-full w-full relative group flex justify-center items-end'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex]})` }}
                    className='w-full h-full rounded-t-md bg-center bg-cover duration-500'
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                ></div>
                {/* Left Arrow
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                Right Arrow
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div> */}
                <div className='absolute flex  justify-center '>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default SlideImages;
