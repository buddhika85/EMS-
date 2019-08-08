using Rawana.DataAccess_GR_UOW;

namespace Rawana.Services.BusinessLogic
{
    public class CoreBusinessLogic
    {
        public UnitOfWork UnitOfWork { get; set; }

        public CoreBusinessLogic()
        {
            UnitOfWork = new UnitOfWork();
        }
    }
}
