﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Domain
{
    public abstract class BaseDomain
    {


        public BaseDomain()
        {
            this.SqlConnection = new SqlConnection(@"Data Source=MANISHPARMAR\SQLEXPRESS;initial catalog=ProductDB; Integrated Security=True;MultipleActiveResultSets=True;Trusted_Connection=True;");
            this.SqlConnection.Open();


        }
        public SqlDataReader GetReader(string commadText)
        {
            SqlCommand sqlCommand = new SqlCommand(commadText, this.SqlConnection);
            return sqlCommand.ExecuteReader();
        }
        public void ExecuteNonQuery(string commandText)
        {
            this.SqlCommand = new SqlCommand(commandText, this.SqlConnection);
            this.SqlCommand.ExecuteNonQuery();

        }
        public void CloseConnection()
        {
            this.SqlConnection.Close();
        }
        public SqlConnection SqlConnection { get; set; }
        public SqlCommand SqlCommand { get; set; }
    }
}
