import { useEffect, useState } from "react";
import { getOverdueCheckouts } from "../../data/checkoutsData";
import { Table } from "reactstrap";

export default function OverdueCheckouts () {
    const [overdueCheckouts, setOverdueCheckouts] = useState([]);

    const renderList = () => {
        getOverdueCheckouts().then(setOverdueCheckouts);
    }
    
    useEffect(() => {
        renderList();
    }, []);


    if (!overdueCheckouts) {
        return null
    }
    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Overdue Checkouts</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Checkout ID</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Patron</th>
                        <th>Was due on</th>
                    </tr>
                </thead>
                <tbody>
                    {overdueCheckouts.map((co) => {
                        return <tr key={`checkouts-${co.id}`}>
                            <th scope="row">{co.id}</th>
                            <th>{co.material.materialName}</th>
                            <th>{co.material.materialType.name}</th>
                            <th>{co.patron.firstName} {co.patron.lastName}</th>
                            <th>{co.checkoutDate + co.material.materialType.checkoutDays}</th>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}