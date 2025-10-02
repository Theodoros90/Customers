import { Box } from "@mui/material";
import CustomerCard from "./CustomerCard";
type Props = {
    customers: Customer[]
    selectCustomer: (id: string) => void;
    deleteCustomer: (id: string) => void;
}

export default function CustomerList({
    customers,
    selectCustomer,
    deleteCustomer
}: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {customers.map(customer => (
                <CustomerCard
                    key={customer.id}
                    customer={customer}
                    selectCustomer={selectCustomer}
                    deleteCustomer={deleteCustomer}
                />
            ))}
        </Box>
    )
}