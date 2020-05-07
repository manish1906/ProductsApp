﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Models
{
    public class Products
    {
        public int ProductCode { get; set; }
        public string ProductName { get; set; }
        public string ProductBrand { get; set; }
        public int ProductPrice { get; set; }
        public int ProductStatus { get; set; }
    }
}
