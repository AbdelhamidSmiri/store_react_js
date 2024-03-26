

export function TrimString({ Title, length }) {
    const maxLength = length;

    // Check if the Title length exceeds the maxLength
    const trimmedString = Title.length > maxLength ? `${Title.slice(0, maxLength)}...` : Title;
    return trimmedString
}

export function filteredProducts(listProducts, searchValue) {
    return listProducts.filter((product) => {
        if (typeof searchValue !== 'number') {
            return (
                product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                product.category.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        } else {
            return product.category.id === searchValue;
        }
    });
}
export function Star({ rate }) {
    let halfstar = '';
    let star = [];



    // Check if the rate is a full star
    const myrate = Math.floor(rate);
    for (let index = 1; index <= myrate; index++) {
        const temporerstar = (
            <svg key={`star-${index}`} className="w-3 h-3 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        );
        star = [...star, temporerstar];
    }

    // Check if the rate is a half star
    if (Number(rate) === rate && rate % 1 !== 0 && myrate !== 5) {
        halfstar = (
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
                <defs>
                    <linearGradient id="half-half" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="50%" stopColor="#FFD700" /> {/* Yellow */}
                        <stop offset="50%" stopColor="#808080" /> {/* Gray */}
                    </linearGradient>
                </defs>
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" fill="url(#half-half)" />
            </svg>
        );
    }

    return (
        <>
            {star}
            {halfstar}
        </>
    );
}

