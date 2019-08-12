using Rawana.DataAccess_EF;
using System;

namespace Rawana.DataAccess_GR_UOW
{
    //https://github.com/buddhika85/bcmy.stock/blob/master/GenericRepository_UnitOfWork/UOW/UnitOfWork.cs
    public class UnitOfWork : IDisposable
    {

        #region PROPERTIES

        public readonly EMSEntities Context = new EMSEntities();
        private bool _disposed = false;

        #endregion PROPERTIES

        

        // save and commit to the DB
        public void Save()
        {
            Context.SaveChanges();
        }

        // clean and release the resouces
        public void Dispose()
        {
            if (_disposed == false)
            {
                Context.Dispose();
                _disposed = true;
                GC.SuppressFinalize(this);
            }
        }

    }
}
