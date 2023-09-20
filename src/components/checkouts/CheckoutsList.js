import { useEffect, useState } from "react";
import { getCheckouts } from "../../data/checkoutsData";
import { Table } from "reactstrap";

export default function CheckoutsList () {
    const [checkouts, setCheckouts] = useState([]);
    
    const renderList = () => {
        getCheckouts().then(setCheckouts);
    }

    useEffect(() => {
        renderList();
    }, [])

    const formatDateTime = (dateTimeString) => {
        const formattedDate = dateTimeString // conversion logic here
        return formattedDate;
    }

    if (!checkouts) {
        return null;
    }
    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Checkouts</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Item</th>
                        <th></th>
                        <th>Patron</th>
                        <th>Checked out on</th>
                        <th>Returned on</th>
                        <th>Late status</th>
                        <th>Late fee status</th>
                    </tr>
                </thead>
                <tbody>
                    {checkouts.map((co) => {
                        return <tr key={`checkout-${co.id}`}>
                            <th scope="row">{co.id}</th>
                            <td>{co.material.materialName}</td>
                            <td>Check in logic here</td>
                            <td>{co.material.materialType.name}</td>
                            <td>{co.checkoutDate} apply conversion logic here</td>
                            <td>{co.returnDate ? co.returnDate + "apply conversion logic" : "Not yet returned"}</td>
                            <td>finish table</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}