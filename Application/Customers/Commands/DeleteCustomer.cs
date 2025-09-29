using System;
using MediatR;
using Persistence;

namespace Application.Customers.Commands;

public class DeleteCustomer
{

    public class Command : IRequest
    {
        public required string Id { get; set; }
    }
    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var customer = await context.Customers
             .FindAsync([request.Id], cancellationToken)
             ?? throw new Exception("Cannot find the customer");

            context.Remove(customer);

            await context.SaveChangesAsync(cancellationToken);
        }
    }

}
