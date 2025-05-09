import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <h1>Это главная страница</h1>
            <Link href="/users">Перейти к списку пользователей</Link>
        </div>
    )
}

export default Index;