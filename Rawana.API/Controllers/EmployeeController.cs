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
        public IHttpActionResult GetAllEmployees()
        {
            try
            {
                var employees = EmployeeBusinessLogic.GetAllEmployees();
                return Ok(employees);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
