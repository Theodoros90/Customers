using System;
using Domain;

namespace Persistence;

public class DbInitializer
{

    public static async Task SeedData(AppDbContext context)
    {
        if (context.Customers.Any()) return;
        var customers = new List<Customer>
        {
            new()
    {
        FirstName = "John",
        LastName = "Doe",
        PhoneNumber = "+44 7700 900123",
        Email = "john.doe@example.com",
        Description = "Sample user for testing",
        CreatedAt = DateTime.UtcNow,
        IsActive = true
    },
    new()
    {
        FirstName = "Jane",
        LastName = "Smith",
        PhoneNumber = "+44 7700 900456",
        Email = "jane.smith@example.com",
        Description = "Second test user entry",
        CreatedAt = DateTime.UtcNow,
        IsActive = true
    },
    new()
    {
        FirstName = "Alice",
        LastName = "Johnson",
        PhoneNumber = "+44 7700 900789",
        Email = "alice.j@example.com",
        Description = "Inactive test user",
        CreatedAt = DateTime.UtcNow,
        IsActive = false
    },
    new()
    {

        FirstName = "Bob",
        LastName = "Brown",
        PhoneNumber = "+44 7700 901234",
        Email = "bob.brown@example.com",
        Description = "User with minimal info",
        CreatedAt = DateTime.UtcNow,
        IsActive = true
    },
    new()
    {
        FirstName = "Clara",
        LastName = "Wilson",
        PhoneNumber = "+44 7700 901567",
        Email = null,
        Description = "No email provided",
        CreatedAt = DateTime.UtcNow,
        IsActive = false
    }
        };

        context.Customers.AddRange(customers);

        await context.SaveChangesAsync();
    }

}
