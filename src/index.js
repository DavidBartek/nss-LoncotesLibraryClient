import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/materials/MaterialList";
import MaterialDetails from "./components/materials/MaterialDetails";
import CreateMaterial from "./components/materials/CreateMaterial";
import PatronList from "./components/patrons/PatronList";
import EditPatron from "./components/patrons/EditPatron";
import CheckoutsList from "./components/checkouts/CheckoutsList";
import BrowseList from "./components/browse/browseList";
import MaterialCheckout from "./components/browse/MaterialCheckout";
import OverdueCheckouts from "./components/checkouts/OverdueCheckouts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronList />} />
          <Route path=":id" element={<EditPatron />} />
        </Route>
        <Route path="checkouts">
          <Route index element={<CheckoutsList />} />
        </Route>
        <Route path="browse">
          <Route index element={<BrowseList />} />
          <Route path=":id" element={<MaterialCheckout />} />
        </Route>
        <Route path="overdue">
          <Route index element={<OverdueCheckouts />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
