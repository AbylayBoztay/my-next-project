import Link from "next/link";
import { useState } from "react";

const Users = () => {
    const [users] = useState([
        {id: 1, name: 'Пользователь 1'},
        {id: 2, name: 'Пользователь 2'},
    ]);

    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
            <br/>
            <Link href = "/">Назад на главную страницу</Link>
        </div>
    )
}

export default Users;