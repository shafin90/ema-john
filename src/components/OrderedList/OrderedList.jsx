import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Container } from "react-bootstrap";
import OrderedItem from "../OrderedItem/OrderedItem";


const OrderedList = () => {
    const {collection} = useContext(AuthContext);
    console.log(collection)
    return (
        <Container>
            {
               collection.map(e=><OrderedItem
               
               key={e.id}
               item = {e}
               
               ></OrderedItem>)
            }
        </Container>
    );
};

export default OrderedList;