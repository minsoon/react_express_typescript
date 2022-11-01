import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Cart = () => {
    const [name, setName] = useState('')
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/get/1`
                , {
                    params: {
                        name: 'mcsung'
                    }
                });
            setName(response.data.name);
        }
        return () => {
            fetchUsers();
        }
    }, []);
}
export default Cart;