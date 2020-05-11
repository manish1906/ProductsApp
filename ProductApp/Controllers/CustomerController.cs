using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Domain;
using ProductApp.Models;

namespace ProductApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {


        public CustomerDomain customerDomain { get; set; }
        public CustomerController()
        {
            this.customerDomain = new CustomerDomain();
        }
        [HttpGet("{code}")]
        public IActionResult Get(int code)
        {

            var customer = this.customerDomain.Get(code);
            return Ok(customer);

        }
        [HttpPost]
        public IActionResult Post(Customers customers)
        {
            customerDomain.Add(customers);
            return Ok();
        }
        [HttpPut]
        public IActionResult Put(Customers customers)
        {
            customerDomain.Update(customers);
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            customerDomain.Delete(id);
            return Ok();
        }

    }
}