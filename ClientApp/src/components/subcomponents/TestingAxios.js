//import { GetUsers } from '../../DB/CallsApi';
import axios from 'axios';
import { useState, useEffect } from 'react';

const TestingAxios = () => {

    const URL = 'https://jsonplaceholder.typicode.com/users';
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get(URL).then((response) => {
            setInfo(response.data);
        });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {info.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                </tr>)}
            </tbody>
        </table>
    );
}

export default TestingAxios;
