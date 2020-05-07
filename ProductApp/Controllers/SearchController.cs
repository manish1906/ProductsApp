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
    public class SearchController : ControllerBase
    {

        public ProductDomain productDomain { get; set; }
        public SearchController()
        {
            this.productDomain = new ProductDomain();
        }
        [HttpGet("{status}")]
        public IActionResult Get(int status)
        {
            var productDetails = this.productDomain.filter(status);
            return Ok(productDetails);


        }


        [HttpPost]
        public IActionResult Post(Products products)
        {
            productDomain.search(products);
            return Ok();
        }

    }
}