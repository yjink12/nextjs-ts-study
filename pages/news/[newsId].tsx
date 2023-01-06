import { useRouter} from 'next/router'

const DetailPage = () => {
    const router = useRouter();
    console.log(router.query.newsId);

    const newsId = router.query.newsId

    // send a request to the backend API
    // to fetch the news item with newsId
    return (
        <>
            <h1>THE DETAIL</h1>
        </>
    )
}
export default DetailPage