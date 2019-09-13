using System;
using System.Web.Http;
using System.Web.Http.Cors;
using Rawana.Services.BusinessLogic.Department;
using Rawana.ViewModels;

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

        [HttpGet]
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

        [HttpGet]
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

        [HttpPost]
        [Route("SaveDepartment")]
        public IHttpActionResult SaveDepartment(DepartmentViewModel departmentViewModel)
        {
            try
            {
                departmentViewModel = DepartmentBusinessLogic.SaveDepartment(departmentViewModel);
                return Ok(departmentViewModel);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
