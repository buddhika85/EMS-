using Rawana.Services.BusinessLogic.Employee;
using System;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Rawana.API.Controllers
{
    [AllowAnonymous]
    [EnableCors(origins: "*", headers: "*", methods: "*")] // tune to your needs    https://stackoverflow.com/questions/18619656/enable-cors-in-web-api-2
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


        [HttpGet]
        [Route("SearchEmployees")]
        public IHttpActionResult SearchEmployees(string searchString = null)
        {
            try
            {
                var employees = EmployeeBusinessLogic.SearchEmployees(searchString);
                return Ok(employees);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }


        [HttpGet]
        [Route("GetEmployeeById")]
        public IHttpActionResult GetEmployeeById(int employeeId)
        {
            try
            {
                var employee = EmployeeBusinessLogic.GetByEmployeeById(employeeId);
                return Ok(employee);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }


        [HttpPut]
        [Route("UpdateEmployeeStatus")]
        public IHttpActionResult UpdateEmployeeStatus(int employeeId)
        {
            try
            {
                var employee = EmployeeBusinessLogic.UpdateEmployeeStatus(employeeId);
                return Ok(employee);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
