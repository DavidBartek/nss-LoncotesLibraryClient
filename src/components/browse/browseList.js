import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { getAvailableMaterials } from "../../data/materialsData";
import { Link } from "react-router-dom";

export default function BrowseList () {
    const [materials, setMaterials] = useState([]);

  const renderList = () => {
    getAvailableMaterials().then(setMaterials);
  }

  useEffect(() => {
    renderList();
  }, []);

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials Available for Checkout</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {materials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`}>
                    <Button color="info">Check out</Button>
                </Link>    
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
