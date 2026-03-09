import {useEffect, useState} from "react";
import {Link} from "react-router";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type ApiResponse = Post[];

function Home() {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((data: ApiResponse) => {
                setList(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div >Loading...</div>
    }
    return (
        <>
            <div className={"p-6 box-border"}>
                <h1 className="mb-5">게시판</h1>
                <ul className="list-none p-0">
                    {list.map(
                        (item, index) => {
                            return (
                                <li className="p-4 border-b border-gray-500" key={index}>
                                    <Link className="no-underline text-gray-800 text-lg font-bold"
                                        // to={"/detail/" + item.id}>
                                        to={`/detail/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        </>


    );
}

export default Home;