import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getMaterial } from "../../data/materialsData";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { postCheckout } from "../../data/checkoutsData";

// error handling for future: prevent bad user id inputs

export default function MaterialCheckout () {
    const params = useParams();
    const materialId = params.id
    const navigate = useNavigate();
    
    const [material, setMaterial] = useState({});
    const [patronId, setPatronId] = useState("");

    useEffect(() => {
        getMaterial(materialId).then(setMaterial);
    }, [materialId])

    const handlePatronIdChange = (e) => {
        e.preventDefault();
        setPatronId(e.target.value)
    }

    const handleSubmitCheckout = (e) => {
        e.preventDefault();
        const newCheckout = {
            materialId: materialId,
            patronId: patronId
        }

        console.log(newCheckout);

        postCheckout(newCheckout)
            .then(() => navigate("/browse"));

    }

    if (!material) {
        return null;
    }
    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Check out {material.materialName}</h4>
            </div>
            <Form>
                <FormGroup>
                    <Label for="patronId">Input patron ID</Label>
                    <Input 
                        id="patronId"
                        name="id"
                        value={patronId}
                        type="number"
                        onChange={(e) => handlePatronIdChange(e)}
                    />
                </FormGroup>
                <Button color="info" onClick={(e) => handleSubmitCheckout(e)}>
                    Submit checkout
                </Button>
            </Form>
        </div>
    )
}