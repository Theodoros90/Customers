import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useCustomers } from "../../../lib/hooks/useCustomers";

type Props = {
    customer?: Customer
    closeForm: () => void
}

export default function CustomerForm({ customer, closeForm }: Props) {
    const { updateCustomer, createCustomer } = useCustomers();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: { [key: string]: FormDataEntryValue } = {}
        console.log(data);

        formData.forEach((value, key) => {

            data[key] = value;
        });
        if (customer) {
            data.id = customer.id;
            await updateCustomer.mutateAsync(data as unknown as Customer);
            closeForm();
        } else {
            await createCustomer.mutateAsync(data as unknown as Customer);
            closeForm();
        }


    }
    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
                Create Customer
            </Typography>
            <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
                <TextField name="firstName" label='Name' defaultValue={customer?.firstName} />
                <TextField name="lastName" label='Surname' defaultValue={customer?.lastName} />
                <TextField name="phoneNumber" label='Phone Number' defaultValue={customer?.phoneNumber} />
                <TextField name="email" label='Email' defaultValue={customer?.email} />
                <TextField name="description" label='Description' defaultValue={customer?.description} multiline rows={3} />
                <Box display='flex' gap={3}>
                    <Button onClick={closeForm} color="inherit">Cancel</Button>
                    <Button type="submit"
                        color="success"
                        variant="contained"
                        disabled={updateCustomer.isPending || createCustomer.isPending}
                    >Submit</Button>
                </Box>
            </Box>


        </Paper>
    )
}