using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Customers.Commands;

public class EditCustomer
{
    public class Command : IRequest
    {
        public required Customer Customer { get; set; }
    }
    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var customer = await context.Customers
            .FindAsync([request.Customer.Id], cancellationToken)
            ?? throw new Exception("Cannot find the customer");
            mapper.Map(request.Customer, customer);
            await context.SaveChangesAsync(cancellationToken);


        }
    }
}
