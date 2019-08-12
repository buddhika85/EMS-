using Rawana.DataAccess_GR_UOW;

namespace Rawana.Services.BusinessLogic
{
    public class CoreBusinessLogic<T> where T : class 
    {
        public UnitOfWork UnitOfWork { get; set; }
        public GenericRepository<T> Repository { get; set; }

        public CoreBusinessLogic()
        {
            UnitOfWork = new UnitOfWork();
            Repository = new GenericRepository<T>(UnitOfWork.Context);
        }
    }
}
