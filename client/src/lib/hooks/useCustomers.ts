import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

export const useCustomers = () => {
    const queryClient = useQueryClient();

    const { data: customers, isPending } = useQuery({
        queryKey: ['customers'],
        queryFn: async () => {
            const response = await agent.get<Customer[]>('/customers');
            return response.data;
        }
    });
    const updateCustomer = useMutation({
        mutationFn: async (customer: Customer) => {
            await agent.put(`/customers`, customer);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['customers']
            });
        }
    })

    const createCustomer = useMutation({
        mutationFn: async (customer: Customer) => {
            await agent.post('/customers', customer);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['customers']
            });
        }
    });

    const deleteCustomer = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete(`/customers/${id}`);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['customers']
            });
        }
    });

    return {
        customers,
        isPending,
        updateCustomer,
        createCustomer,
        deleteCustomer
    };
}