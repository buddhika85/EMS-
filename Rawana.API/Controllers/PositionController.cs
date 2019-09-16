using System;
using System.Web.Http;
using System.Web.Http.Cors;
using Rawana.Services.BusinessLogic.Position;

namespace Rawana.API.Controllers
{
    [AllowAnonymous]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Position")]
    public class PositionController : ApiController
    {
        public IPositionBusinessLogic PositionBusinessLogic { get; set; }

        public PositionController()
        {
            PositionBusinessLogic = new PositionBusinessLogic();
        }

        [HttpGet]
        [Route("SearchPositions")]
        public IHttpActionResult SearchPositions(string searchString = null)
        {
            try
            {
                var list = PositionBusinessLogic.SearchPositions(searchString);
                return Ok(list);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
