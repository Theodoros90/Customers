import { Box } from "@mui/material";
import CustomerCard from "./CustomerCard";
type Props = {
    customers: Customer[]
    selectCustomer: (id: string) => void;
}

export default function CustomerList({
    customers,
    selectCustomer
}: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {customers.map(customer => (
                <CustomerCard
                    key={customer.id}
                    customer={customer}
                    selectCustomer={selectCustomer}
                />
            ))}
        </Box>
    )
}