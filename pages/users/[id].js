import { useRouter } from "next/router";
import Link from 'next/link';

const UserPage = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            <h1>Страница пользователя с id: {id}</h1>
            <Link href="/users">Назад к списку пользователей</Link>
        </div>
    )
}

export default UserPage;