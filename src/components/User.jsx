import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState(null);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://api.github.com/users/poojavermaa");
        const json = await  data.json();
        setInfo(json);
    }

    // const {name} = info?.data;

    // const {name, location} = props;
    if (info === null) return <Shimmer />;
    return (
        <div>
            <h1>Count : {count}</h1>
            <button className="bg-gray-300" onClick={() => {
                setCount(count+1);
            }}>Button</button>
            <img className="h-20 w-20" src={info.avatar_url} />
            <h2>Name: {info.name}</h2>
            <h3>Location: {info.location}</h3>
            <h4>Bio: {info.bio}</h4>
        </div>
    );
};

export default User;