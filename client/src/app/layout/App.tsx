import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react"
import Navbar from "./Navbar";
import CustomerDashboard from "../../features/Customers/dashboard/CustomerDashboard";
import { useCustomers } from "../../lib/hooks/useCustomers";


function App() {
  const [selectedCustomer, setSelectCustomer] = useState<Customer | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const { customers, isPending } = useCustomers();

  const handleSelectCustomer = (id: string) => {
    setSelectCustomer(customers!.find(x => x.id === id));
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

  return (
    <Box sx={{ bgcolor: '#eae9e9e8', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar openForm={handleFormOpen} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {!customers || isPending ? (
          <Typography color='primary'>Loading...</Typography>) : (
          <CustomerDashboard
            customers={customers}
            selectCustomer={handleSelectCustomer}
            cancelSelectCustomer={handleCancelSelectCustomer}
            selectedCustomer={selectedCustomer}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}

          />
        )}

      </Container>

    </Box>
  )
}

export default App
