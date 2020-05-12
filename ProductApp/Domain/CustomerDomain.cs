using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductApp.Models;

namespace ProductApp.Domain
{
    public class CustomerDomain:BaseDomain
    {


        public List<vCustomers> Get (int code)
        {

            var reader = this.GetReader($"select *from vCustomers where CustomerCode='{code}'");
            var vCustomers = new List<vCustomers>();
            while (reader.Read())
            {
                var vCustomers1 = new vCustomers();
                vCustomers1.CustomerCode = reader.GetInt32(0);
                vCustomers1.FirstName = reader.GetString(1);
                vCustomers1.LastName = reader.GetString(2);
                vCustomers1.Email = reader.GetString(3);
                vCustomers1.MobileNumber = reader.GetInt64(4);
                vCustomers1.DOB = reader.GetDateTime(5);
                vCustomers1.Gender = reader.GetString(6);
                vCustomers1.Address = reader.GetString(7);
               
                vCustomers.Add(vCustomers1);

            }
            return vCustomers;
        }


        //public bool IsLogin(Customers customers)

        //{

        //    var reader = this.GetReader($"select * from customers where Email='{customers.Email}' and Password='{customers.Password}'");
        //    var isLoggedIn = false;
        //    while (reader.Read())
        //    {
        //        //var c = new Customers();
        //        //c.CustomerCode=reader.GetInt32(0);
        //        isLoggedIn = true;
        //    }
        //    return isLoggedIn;

        //}

        public int IsLogin(Customers customers)

        {

            var reader = this.GetReader($"select customercode from customers where Email='{customers.Email}' and Password='{customers.Password}'");
            
            var c = new Customers();
            while (reader.Read())
            {
               
                c.CustomerCode = reader.GetInt32(0);
            }
            return c.CustomerCode;

        }

        public void Add(Customers customers)
        {
            this.ExecuteNonQuery($"insert into customers values ('{customers.FirstName}','{customers.LastName}','{customers.Email}',{customers.MobileNumber},'{customers.DOB}',{customers.Gender},'{customers.Address}','{customers.Password}')");
        }
        public void Update(Customers customers)
        {
            this.ExecuteNonQuery($"update customers set FirstName='{customers.FirstName}',LastName='{customers.LastName}',MobileNumber={customers.MobileNumber},Email='{customers.Email}',Password='{customers.Password}',DOB='{customers.DOB}',Address='{customers.Address}',Gender='{customers.Gender}' where CustomerCode = {customers.CustomerCode}");
        }
        public void Delete(int id)
        {
            this.ExecuteNonQuery($"delete from customers where CustomerCode = {id}");
        }
    }
}
