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
    public class FilterController : ControllerBase
    {





        public ProductDomain productDomain { get; set; }
        public FilterController()
        {
            this.productDomain = new ProductDomain();
        }



        [HttpPost]
        public IActionResult Post(vProducts products)
        {
            var productDetails = this.productDomain.filter(products);
            return Ok(productDetails);


        }


    }
}