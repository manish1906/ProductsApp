using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductApp.Models;
namespace ProductApp.Domain
{
    public class ProductDomain:BaseDomain
    {

        public List<vProducts> Get()
        {

            var reader = this.GetReader("select *from vProducts");
            var vProducts = new List<vProducts>();
            while (reader.Read())
            {
                var vProducts1 = new vProducts();
                vProducts1.ProductCode = reader.GetInt32(0);
                vProducts1.ProductName = reader.GetString(1);
                vProducts1.ProductBrand = reader.GetString(2);
                vProducts1.ProductPrice = reader.GetInt32(3);
                vProducts1.ProductStatus = reader.GetString(4);
              
                vProducts.Add(vProducts1);

            }
            return vProducts;
        }

        public void Add(Products products)
        {
            this.ExecuteNonQuery($"insert into products values ('{products.ProductName}','{products.ProductBrand}',{products.ProductPrice},{products.ProductStatus})");
        }
        public void Update(Products products)
        {
            this.ExecuteNonQuery($"update products set ProductName='{products.ProductName}',ProductBrand='{products.ProductBrand}',ProductPrice={products.ProductPrice},ProductStatus={products.ProductStatus} where ProductCode = {products.ProductCode}");
        }
        public void Delete(int id)
        {
            this.ExecuteNonQuery($"delete from products where ProductCode = {id}");
        }
        //public void search(Products products)
        //{
        //    this.ExecuteNonQuery($"exec spSearchProducts @productname='{products.ProductName}'");
        //}
        public List<Products> filter(int status)
        {

            var reader = this.GetReader($"select *from Products where ProductStatus={status}");
            var products = new List<Products>();
            while (reader.Read())
            {
                var products1 = new Products();
                products1.ProductCode = reader.GetInt32(0);
                products1.ProductName = reader.GetString(1);
                products1.ProductBrand = reader.GetString(2);
                products1.ProductPrice = reader.GetInt32(3);
               

                products.Add(products1);

            }
            return products;
        }
    }
}
