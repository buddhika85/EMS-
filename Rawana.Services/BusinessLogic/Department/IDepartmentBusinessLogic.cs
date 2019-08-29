using System.Collections.Generic;
using Rawana.ViewModels;

namespace Rawana.Services.BusinessLogic.Department
{
    public interface IDepartmentBusinessLogic
    {
        List<DepartmentViewModel> GetAllDepartments();

        DepartmentViewModel GetByDepartmentById(int id);

        DepartmentViewModel SaveDepartment(DepartmentViewModel departmentViewModel);
        
        List<DepartmentViewModel> SearchDepartments(string searchString);
    }
}