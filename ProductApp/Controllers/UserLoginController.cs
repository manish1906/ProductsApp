using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Models;
using ProductApp.Domain;
namespace ProductApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserLoginController : ControllerBase
    {

        public UserDomain userDomain { get; set; }
        public ProductDomain productDomain { get; set; }
        public UserLoginController()
        {
            this.userDomain = new UserDomain();
            this.productDomain = new ProductDomain();

        }
        [HttpGet]
        public IActionResult Get()
        {

            var product= this.productDomain.UserProduct();
            return Ok(product);
        }

        [HttpPost]
        public IActionResult Post(Users users)
        {
            var isLoggedIn = this.userDomain.IsLogin(users);
            return Ok(isLoggedIn);
        }

    }
}