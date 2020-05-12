using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductApp.Models;
namespace ProductApp.Domain
{
    public class UserDomain:BaseDomain
    {

        public List<vUsers> Get(int id)
        {

            var reader = this.GetReader($"select *from vUsers where UserId='{id}'");
            var vUsers = new List<vUsers>();
            while (reader.Read())
            {
                var vUsers1 = new vUsers();
                vUsers1.UserId = reader.GetInt32(0);
                vUsers1.FirstName = reader.GetString(1);
                vUsers1.LastName = reader.GetString(2);
                vUsers1.Email = reader.GetString(3);
                vUsers1.MobileNumber = reader.GetInt64(4);
                vUsers1.DOB = reader.GetDateTime(5);
                vUsers1.Gender = reader.GetString(6);
                vUsers1.Address = reader.GetString(7);

                vUsers.Add(vUsers1);

            }
            return vUsers;
        }

        public int IsLogin(Users users)

        {

            var reader = this.GetReader($"select * from users where Email='{users.Email}' and Password='{users.Password}'");

            var c = new Users();
            while (reader.Read())
            {

                c.UserId = reader.GetInt32(0);
            }
            return c.UserId;

        }

        public void Add(Users users)
        {
            this.ExecuteNonQuery($"insert into users values ('{users.FirstName}','{users.LastName}','{users.Email}',{users.MobileNumber},'{users.DOB}',{users.Gender},'{users.Address}','{users.Password}')");
        }
        public void Update(Users users)
        {
            this.ExecuteNonQuery($"update users set FirstName='{users.FirstName}',LastName='{users.LastName}',MobileNumber={users.MobileNumber},Email='{users.Email}',Password='{users.Password}',DOB='{users.DOB}',Address='{users.Address}',Gender='{users.Gender}' where UserId = {users.UserId}");
        }
        public void Delete(int id)
        {
            this.ExecuteNonQuery($"delete from users where UserId = {id}");
        }
    }
}
