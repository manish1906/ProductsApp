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
    public class ProductController : ControllerBase
    {


        public ProductDomain productDomain { get; set; }
        public ProductController()
        {
            this.productDomain = new ProductDomain();
        }
        [HttpGet]
        public IActionResult Get()
        {

            var m = this.productDomain.Get();
            return Ok(m);

        }
        [HttpPost]
        public IActionResult Post(Products products)
        {
            productDomain.Add(products);
            return Ok();
        }
        [HttpPut]
        public IActionResult Put(Products products)
        {
            productDomain.Update(products);
            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            productDomain.Delete(id);
            return Ok();
        }

    }

}
