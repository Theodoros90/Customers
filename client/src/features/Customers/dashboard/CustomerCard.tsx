import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"



type Props = {
    customer: Customer
    selectCustomer: (id: string) => void;
    deleteCustomer: (id: string) => void;
}

export default function CustomerCard({ customer, selectCustomer, deleteCustomer }: Props) {


    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h5">{customer.firstName} {customer.lastName}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{customer.email}</Typography>
                <Typography variant="body2">{customer.description}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography fontSize='15px'>{customer.phoneNumber}</Typography>
                <Box display='flex' gap={2}>
                    <Button onClick={() => selectCustomer(customer.id)} size="medium"
                        variant="contained">View</Button>

                    <Button onClick={() => deleteCustomer(customer.id)} color="error" size="medium"
                        variant="contained">Delete</Button>
                </Box>

            </CardActions>
        </Card>

    )
}