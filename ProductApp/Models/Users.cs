using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Models
{
    public class Users
    { 

    public int UserId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public long MobileNumber { get; set; }
    public int Gender { get; set; }
    public string Address { get; set; }
    public DateTime DOB { get; set; }
}
}
