import { BrowserRouter, Routes , Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import AddressList from "./components/address-list.component";
import EditAddress from "./components/edit-address.component";
import CreateAddress from "./components/create-address.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <Navbar />
    <br/>
    <Routes>
        <Route path="/" element={ <AddressList />} />
        <Route path="/edit/:id" element={ <EditAddress />} />
        <Route path="/create" element={<CreateAddress />} />
        <Route path="/user" element={ <CreateUser /> } />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;