using System;
using System.Web.Http;
using System.Web.Http.Cors;
using Rawana.Services.BusinessLogic.Department;

namespace Rawana.API.Controllers
{
    [AllowAnonymous]
    [EnableCors(origins: "*", headers: "*", methods: "*")] 
    [RoutePrefix("api/Department")]
    public class DeaprtmentController : ApiController
    {
        public IDepartmentBusinessLogic DepartmentBusinessLogic { get; set; }

        public DeaprtmentController()
        {
            DepartmentBusinessLogic = new DepartmentBusinessLogic();
        }

        [Route("SearchDepartments")]
        public IHttpActionResult SearchDepartments(string searchString = null)
        {
            try
            {
                var departments = DepartmentBusinessLogic.SearchDepartments(searchString);
                return Ok(departments);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }


        [Route("GetDepartmentById")]
        public IHttpActionResult GetDepartmentById(int id)
        {
            try
            {
                var department = DepartmentBusinessLogic.GetByDepartmentById(id);
                return Ok(department);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
