using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Customers.Commands;

public class CreateCustomer
{
    public class Command : IRequest<string>
    {
        public required Customer Customer { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            context.Customers.Add(request.Customer);

            await context.SaveChangesAsync(cancellationToken);

            return request.Customer.Id;
        }
    }

}
