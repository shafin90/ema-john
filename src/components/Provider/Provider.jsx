import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const Provider = ({ children }) => {

    // state declare=================================================
    const [item, setItem] = useState([]);
    const [num, setNum] = useState(0);
    const [price, setPrice] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [collection, setCollection] = useState([]);



    // x=id,y=item,z=shipping cost

    // count the number of added item==============
    const handleCount = (x, y, z) => {
        const newNum = num + 1;
        setNum(newNum);


        const newShippingCost = shippingCost + z;
        setShippingCost(newShippingCost);

        const newPrice = price + x;
        setPrice(newPrice);

        const newGrandTotal = price + shippingCost + 114;
        setGrandTotal(newGrandTotal);

        const newCollection = [...collection, y];
        setCollection(newCollection);

    }



    // x=id
    //Remove button ==========================================
    const handleRemove = (x) => {

        let newShortedCollection = collection.filter(e => e.id !== x);
        setCollection(newShortedCollection);


        // const getItem = collection.find(e => e.id === x);
        // console.log(getItem)
        // const getIndex = collection.indexOf(getItem);

        // let collectionCopy = [...collection];

        // let newRemovedCollection = collection.splice(getIndex,1); 

        // let newRemovedlist = collection.filter(e=>collection.indexOf(e)!==getIndex);

       






        let newShortedNum = num - 1;
        setNum(newShortedNum);
    }



    // clear cart ========================================
    const handeClearCart = () => {
        setNum(0);
        setPrice(0);
        setGrandTotal(0);
        setCollection([]);
        setShippingCost(0);
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
        price,
        grandTotal,
        handeClearCart,
        collection,
        handleRemove,
        shippingCost

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;