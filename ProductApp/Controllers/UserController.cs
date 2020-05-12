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
    public class UserController : ControllerBase
    {



        public UserDomain userDomain { get; set; }
        public UserController()
        {
            this.userDomain = new UserDomain();
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            var users = this.userDomain.Get(id);
            return Ok(users);

        }
        [HttpPost]
        public IActionResult Post(Users users)
        {
            userDomain.Add(users);
            return Ok();
        }
        [HttpPut]
        public IActionResult Put(Users users)
        {
            userDomain.Update(users);
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            userDomain.Delete(id);
            return Ok();
        }

    }


}