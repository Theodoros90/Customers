using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class CustomersController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Customer>>> GetCustomers()
    {
        return await context.Customers.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Customer>> GetCustomerDetails(string id)
    {
        var customer = await context.Customers.FindAsync(id);
        if (customer == null) return NotFound();
        return customer;

    }

}
