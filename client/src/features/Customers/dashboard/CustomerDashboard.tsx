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
}
export default function CustomerDashboard({ customers, selectCustomer,
    cancelSelectCustomer,
    selectedCustomer,
    openForm,
    closeForm,
    editMode
}: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <CustomerList
                    customers={customers}
                    selectCustomer={selectCustomer}
                />
            </Grid2>
            <Grid2 size={5}>
                {selectedCustomer && !editMode &&
                    <CustomerDetails
                        selectedCustomer={selectedCustomer}
                        cancelSelectCustomer={cancelSelectCustomer}
                        openForm={openForm}
                    />}
                {editMode &&
                    <CustomerForm
                        closeForm={closeForm}
                        customer={selectedCustomer}
                    />}
            </Grid2>
        </Grid2>
    )
}