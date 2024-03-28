import { useParams, useSearchParams } from "react-router-dom";

const DetailPage = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const c = searchParams.get("a");

    return (
        <div>
            <h1>
                Detail page - {id} - {c}
            </h1>
        </div>
    );
};

export default DetailPage;
