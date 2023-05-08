import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const Provider = ({children}) => {

    // state declare=================================================
    const [item, setItem] = useState([]);




    // loading data=====================================
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])




    // info tha has been being passed to different components==========
    const info = {
        item
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;