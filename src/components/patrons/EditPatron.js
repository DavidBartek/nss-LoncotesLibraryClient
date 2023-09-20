import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { editPatron, getPatron } from "../../data/patronsData";

export default function EditPatron () {
    const params = useParams();
    const patronId = params.id;
    const [patron, setPatron] = useState({});
    const [newEmail, setNewEmail] = useState(patron.email);
    const [newAddress, setNewAddress] = useState(patron.address);
    const navigate = useNavigate();

    useEffect(() => {
        getPatron(patronId).then(setPatron);
    }, [patronId]);


    // handler: call editPatron function, passing in id and patron object (props: id, address, email)

    const handleSubmitEdits = (e) => {
        e.preventDefault();

        const updatedPatron = {
            id: patron.id,
            email: newEmail,
            address: newAddress
        }
        // correct - passing a function reference (a callback) to .then
        editPatron(patron.id, updatedPatron)
            .then(() => navigate("/patrons"));

        // wrong - immediately invoking a function in .then
        // editPatron(patron.id, updatedPatron)
        //     .then(navigate("/patrons"));
    }

    if (!patron) {
        return null;
    }
    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Edit patron info: {patron.firstName} {patron.lastName}</h4>
            </div>
            <Form>
                <FormGroup>
                    <Label for="patronEmail">Email</Label>
                    <Input 
                        id="patronEmail"
                        name="email"
                        placeholder={patron.email}
                        value={newEmail}
                        type="email"
                        onChange={(e) => setNewEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="patronAddress">Address</Label>
                    <Input 
                        id="patronAddress"
                        name="address"
                        placeholder={patron.address}
                        value={newAddress}
                        type="text"
                        onChange={(e) => setNewAddress(e.target.value)}
                    />
                </FormGroup>
                <Button color="info" onClick={(e) => handleSubmitEdits(e)}>
                    Submit changes
                </Button>
            </Form>
        </div>
    )
}