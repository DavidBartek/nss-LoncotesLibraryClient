import { useEffect, useState } from "react";
import { Button, List } from "reactstrap";
import { deactivatePatron, getPatron } from "../../data/patronsData";
import { Link, useNavigate } from "react-router-dom";

export default function PatronDetail({ patron, renderList, toggle }) {
    const [patronDetail, setPatronDetail] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>
    {
        getPatron(patron.id).then(setPatronDetail);
    }, [patron.id]);

    const handleDeactivate = (e) => {
        e.preventDefault();
        deactivatePatron(patron.id)
            .then(() => renderList())
            .then(() => toggle((patron.id)));
    }

    return (
        <List type="unstyled">
            <li>Patron ID: {patron.id}</li>
            <li>Address: {patron.address}</li>
            <li>Email: {patron.email}</li>
            <li>Status: {patron.isActive ? "Active" : "Inactive"}</li>
            <li>Late Fees accrued: ${patronDetail.balance}</li>
            <Link to={`${patron.id}`}>
                <Button color="success">Edit details</Button>
            </Link>
            {patron.isActive ? (
                <Button color="warning" onClick={(e) => handleDeactivate(e)}>Deactivate</Button>) : null}
        </List>
    )
}