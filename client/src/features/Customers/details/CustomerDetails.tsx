import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { useCustomers } from "../../../lib/hooks/useCustomers";

type Props = {
    selectedCustomer: Customer
    cancelSelectCustomer: () => void
    openForm: (id: string) => void;
}

export default function CustomerDetails({ selectedCustomer, cancelSelectCustomer, openForm }: Props) {
    const { customers } = useCustomers();
    const customer = customers?.find(x => x.id === selectedCustomer.id);
    if (!customer) return <Typography color="error">Customer not found</Typography>
    return (
        <Card sx={{ borderRadius: 3 }}>

            <CardContent>
                <Typography variant="h5">{customer.firstName} {customer.lastName}</Typography>
                <Typography variant="subtitle1" fontWeight='light'>{customer.phoneNumber}</Typography>
                <Typography variant="body1">{customer.description}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => openForm(customer.id)} color="primary">Edit</Button>
                <Button onClick={cancelSelectCustomer} color="inherit">Cancel</Button>
            </CardActions>

        </Card>
    )
}