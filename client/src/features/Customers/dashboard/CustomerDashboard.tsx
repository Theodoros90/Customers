import { Grid2 } from "@mui/material";
import CustomerList from "./CustomerList";
import CustomerDetails from "../details/CustomerDetails";
import CustomerForm from "../form/CustomerForm";

type Props = {
    customers: Customer[]
    selectCustomer: (id: string) => void;
    cancelSelectCustomer: () => void;
    selectedCustomer?: Customer | undefined;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
    submitForm: (customer: Customer) => void;
    deleteCustomer: (id: string) => void;
}
export default function CustomerDashboard({ customers, selectCustomer,
    cancelSelectCustomer,
    selectedCustomer,
    openForm,
    closeForm,
    editMode,
    submitForm,
    deleteCustomer
}: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <CustomerList
                    customers={customers}
                    selectCustomer={selectCustomer}
                    deleteCustomer={deleteCustomer}
                />
            </Grid2>
            <Grid2 size={5}>
                {selectedCustomer && !editMode &&
                    <CustomerDetails
                        customer={selectedCustomer}
                        cancelSelectCustomer={cancelSelectCustomer}
                        openForm={openForm}
                    />}
                {editMode &&
                    <CustomerForm
                        closeForm={closeForm}
                        customer={selectedCustomer}
                        submitForm={submitForm}
                    />}
            </Grid2>
        </Grid2>
    )
}