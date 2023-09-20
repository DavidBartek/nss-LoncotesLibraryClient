import { useEffect, useState } from "react"
import { getPatrons } from "../../data/patronsData";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import PatronDetail from "./PatronDetail";

export default function PatronList() {
    const [patrons, setPatrons] = useState([]);
    const [open, setOpen] = useState('0');
    
    const renderList = () => {
        getPatrons().then(setPatrons);
    }

    useEffect(() => {
        renderList();
    }, [])

    const toggle = (id) => {
        if (open === id) {
            setOpen('0');
            console.log(open);
        } else {
            setOpen(id);
            console.log(open);
        }
    };

    if (!patrons) {
        return null
    }
    return (
    <div className="container">
        <div className="sub-menu bg-light">
            <h4>Patrons</h4>
        </div>
        <Accordion open={open} toggle={toggle}>
            {patrons.map(p => {
                return (
                    <AccordionItem key={p.id}>
                        <AccordionHeader targetId={(p.id).toString()}>{p.firstName} {p.lastName}</AccordionHeader>
                        <AccordionBody accordionId={(p.id).toString()}>
                            <PatronDetail patron={p} renderList={renderList} toggle={toggle}/>
                        </AccordionBody>
                    </AccordionItem>
                )
                })
            }
        </Accordion>
    </div>
    )
}