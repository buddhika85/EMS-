using Rawana.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using Rawana.DataAccess_GR_UOW;

namespace Rawana.Services.BusinessLogic.Department
{
    public class DepartmentBusinessLogic : CoreBusinessLogic, IDepartmentBusinessLogic
    {
        public GenericRepository<DataAccess_EF.Department> Repository { get; set; }

        public DepartmentBusinessLogic()
        {
            Repository = UnitOfWork.DepartmentRepository;
        }

        public List<DepartmentViewModel> GetAllDepartments()
        {
            try
            {
                var list = Repository.GetAll().Select(ConvertToViewModel).ToList();
                return list;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        public DepartmentViewModel GetByDepartmentById(int id)
        {
            try
            {
                var department = Repository.GetByPrimaryKey(id);
                if (department == null)
                    return null;
                var viewModel = ConvertToViewModel(department);
                return viewModel;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public List<DepartmentViewModel> SearchDepartments(string searchString)
        {
            try
            {
                searchString = string.IsNullOrWhiteSpace(searchString) ? "" : searchString.Trim().ToLower();
                var list = Repository.GetAll()
                    .Where(x => (x.Name == null || searchString == "" ||
                                 x.Name.Trim().ToLower().Contains(searchString))).Select(ConvertToViewModel).ToList();
                return list;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }



        public DepartmentViewModel SaveDepartment(DepartmentViewModel departmentViewModel)
        {
            throw new NotImplementedException();
        }

        private DepartmentViewModel ConvertToViewModel(DataAccess_EF.Department model)
        {
            return new DepartmentViewModel
            {
                Id = model.Id,
                Name = model.Name
            };
        }
    }
}
