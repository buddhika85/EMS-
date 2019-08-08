using Rawana.DataAccess_EF;
using System;

namespace Rawana.DataAccess_GR_UOW
{
    //https://github.com/buddhika85/bcmy.stock/blob/master/GenericRepository_UnitOfWork/UOW/UnitOfWork.cs
    public class UnitOfWork : IDisposable
    {

        #region PROPERTIES

        private readonly EMSEntities _context = new EMSEntities();
        private bool _disposed = false;

        #endregion PROPERTIES



        #region REPOSITORIES

        // all the table/entity specific repositories as instances
        private GenericRepository<Employee> _employeeRepository;
        private GenericRepository<Department> _departmentRepository;
        private GenericRepository<Position> _jobTitleRepository;
        
        #endregion REPOSITORIES


        // properties to return table/entity specific repository instances
        public GenericRepository<Employee> EmployeeRepository => _employeeRepository ?? (_employeeRepository = new GenericRepository<Employee>(_context));
        public GenericRepository<Department> DepartmentRepository => _departmentRepository ?? (_departmentRepository = new GenericRepository<Department>(_context));
        public GenericRepository<Position> JobTitleRepository => _jobTitleRepository ?? (_jobTitleRepository = new GenericRepository<Position>(_context));

        // save and commit to the DB
        public void Save()
        {
            _context.SaveChanges();
        }

        // clean and release the resouces
        public void Dispose()
        {
            if (_disposed == false)
            {
                _context.Dispose();
                _disposed = true;
                GC.SuppressFinalize(this);
            }
        }

    }
}
