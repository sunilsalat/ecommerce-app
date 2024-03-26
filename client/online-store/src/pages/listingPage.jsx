import { useState } from "react";
import { usersData } from "../assets/userData";
import style from "./listingPage.module.css";
import { useNavigate } from "react-router-dom";

const ListingPage = () => {
    const [tbData, setTbData] = useState(usersData);
    const navigate = useNavigate();

    return (
        <div>
            <div className={style.container}>
                {tbData.map((item) => {
                    return (
                        <div className={style.childContainer} key={item.id}>
                            <div
                                onClick={() => {
                                    navigate(`/detail/${item.id}`);
                                }}
                            >
                                {item.name} - {item.email}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListingPage;
