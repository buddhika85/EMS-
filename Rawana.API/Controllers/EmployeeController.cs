using Rawana.Services.BusinessLogic.Employee;
using Rawana.ViewModels;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace Rawana.API.Controllers
{
    [RoutePrefix("api/Employee")]
    public class EmployeeController : ApiController
    {
        public IEmployeeBusinessLogic EmployeeBusinessLogic { get; set; }
        public EmployeeController()
        {
            EmployeeBusinessLogic = new EmployeeBusinessLogic();
        }

        [HttpGet]
        [Route("GetAllEmployees")]
        public List<EmployeeViewModel> GetAllEmployees()
        {
            try
            {
                var employees = EmployeeBusinessLogic.GetAllEmployees();
                return employees;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}
