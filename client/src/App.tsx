import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"


function App() {

  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    axios.get<Customer[]>('https://localhost:5001/api/customers')
      .then(response => setCustomers(response.data))
    return () => { }
  }, [])
  return (
    <>
      <Typography variant="h4">Customers</Typography>
      <List>
        {customers.map((customer) => (
          <ListItem key={customer.id}>
            <ListItemText>{customer.firstName} {customer.lastName}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
