import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import CustomerDashboard from "../../features/Customers/dashboard/CustomerDashboard";


function App() {

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectCustomer] = useState<Customer | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Customer[]>('https://localhost:5001/api/customers')
      .then(response => setCustomers(response.data))
    return () => { }
  }, [])

  const handleSelectCustomer = (id: string) => {
    setSelectCustomer(customers.find(x => x.id === id));
  }
  const handleCancelSelectCustomer = () => {
    setSelectCustomer(undefined);
  }
  const handleFormOpen = (id?: string) => {
    if (id) handleSelectCustomer(id);
    else handleCancelSelectCustomer();
    setEditMode(true);
  }
  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (customer: Customer) => {
    if (customer.id) {
      setCustomers(customers.map(x => x.id === customer.id ? customer : x));
      setSelectCustomer(undefined);
    } else {
      const newCustomer = { ...customer, id: customers.length.toString() };
      setSelectCustomer(newCustomer);
      setCustomers([...customers, { ...newCustomer }]);
      setSelectCustomer(undefined);
    }
    setEditMode(false);
  }
  const handleDelete = (id: string) => {
    setCustomers(customers.filter(x => x.id !== id));
    setSelectCustomer(undefined);
  }
  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <Navbar openForm={handleFormOpen} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <CustomerDashboard
          customers={customers}
          selectCustomer={handleSelectCustomer}
          cancelSelectCustomer={handleCancelSelectCustomer}
          selectedCustomer={selectedCustomer}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
          deleteCustomer={handleDelete}
        />
      </Container>

    </Box>
  )
}

export default App
