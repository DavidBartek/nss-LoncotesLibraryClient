import { useEffect, useState } from "react";
import { getCheckouts, returnCheckout } from "../../data/checkoutsData";
import { Button, Table } from "reactstrap";

export default function CheckoutsList () {
    const [checkouts, setCheckouts] = useState([]);
    
    const renderList = () => {
        getCheckouts().then(setCheckouts);
    }

    useEffect(() => {
        renderList();
    }, [])

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        const formattedDate = `${month}/${day}/${year}`;
        return formattedDate;
    }

    const handleReturn = (e, checkoutId) => {
        e.preventDefault();
        returnCheckout(checkoutId)
            .then(() => renderList());
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
                        <th>Patron</th>
                        <th>Checked out on</th>
                        <th>Returned on</th>
                        <th>Late fee status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {checkouts.map((co) => {
                        return <tr key={`checkout-${co.id}`}>
                            <th scope="row">{co.id}</th>
                            <td>{co.material.materialName}</td>
                            <td>{co.material.materialType.name}</td>
                            <td>{formatDateTime(co.checkoutDate)}</td>
                            <td>{co.returnDate ? formatDateTime(co.returnDate) : "Not yet returned"}</td>
                            <td>{co.lateFee ? "$" + co.lateFee : "N/A"}</td>
                            <td>{co.returnDate ? "" : 
                                <Button color="info" onClick={(e) => handleReturn(e, co.id)}>Return</Button>
                                }
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}