using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Customers.Queries;

public class GetCustomerDetails
{
    public class Query : IRequest<Customer>
    {
        public required string Id { get; set; }
    }
    public class Handler(AppDbContext context) : IRequestHandler<Query, Customer>
    {
        public async Task<Customer> Handle(Query request, CancellationToken cancellationToken)
        {
            var customer = await context.Customers.FindAsync([request.Id], cancellationToken);
            if (customer == null) throw new Exception("Customer not found");
            return customer;
        }
    }

}
