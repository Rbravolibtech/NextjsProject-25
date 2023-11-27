import { useRouter} from "next/router"

// our-domain.com/

function DetailPage() {
const router = useRouter()

 const newsId =  router.query.newsId;

 //SEND A REQUEST TO THE BACKEND API
 // TO FETCH THE NEWS ITEM WITH NEWSId

    return <h1>THE DETAIL PAGE</h1>
    }
    
    export default DetailPage