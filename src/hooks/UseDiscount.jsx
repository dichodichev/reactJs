import { useState, useEffect } from 'react';

export const useDiscount = (product) => {

    const [discount, setDiscount] = useState(product);

    useEffect(() => {
        if (product) {
            const a = Number(product.price);
            const b = Number(product.discountPercentage);
            const discount = a - (a * b / 100);
            const discountedPrice = discount.toFixed(2);
            setDiscount(discountedPrice);
        }
    }, [product]);

    return discount;
};