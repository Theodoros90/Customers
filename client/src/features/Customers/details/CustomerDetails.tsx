import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

type Props = {
    customer: Customer
    cancelSelectCustomer: () => void
    openForm: (id: string) => void;
}

export default function CustomerDetails({ customer, cancelSelectCustomer, openForm }: Props) {
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