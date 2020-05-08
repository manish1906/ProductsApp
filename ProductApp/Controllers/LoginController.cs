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
    public class LoginController : ControllerBase
    {

        public CustomerDomain customerDomain { get; set; }
        public LoginController()
        {
            this.customerDomain = new CustomerDomain();
        }

        [HttpGet]
        public IActionResult Get(Customers customers)
        {
            var isLoggedIn = this.customerDomain.IsLogin(customers);
            return Ok(isLoggedIn);
        }

    }
}