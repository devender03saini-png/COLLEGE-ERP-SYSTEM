import { useEffect } from "react"

import Notifications from "../components/notification_bar";

function Dashboard({ setFirstDiv }) {
    
    useEffect(() => {
        setFirstDiv(<Notifications />);
    }, []);

    return (<h1>Dashboard</h1>)
}

export default Dashboard