import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const Provider = ({ children }) => {

    // state declare=================================================
    const [item, setItem] = useState([]);
    const [num, setNum] = useState(0);
    const [price, setPrice] = useState(0);



    // count the number of added item==============
    const handleCount = (x) => {
        const newNum = num + 1;
        setNum(newNum);

        const newPrice = price + x;
        setPrice(newPrice);

    }






    // loading data=====================================
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])




    // info tha has been being passed to different components==========
    const info = {
        item,
        num,
        handleCount,
        price
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;