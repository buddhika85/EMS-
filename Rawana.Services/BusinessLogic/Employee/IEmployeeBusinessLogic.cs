using Rawana.ViewModels;
using System.Collections.Generic;

namespace Rawana.Services.BusinessLogic.Employee
{
    public interface IEmployeeBusinessLogic
    {
        List<EmployeeViewModel> GetAllEmployees();

        EmployeeViewModel GetById(int id);

        EmployeeViewModel SaveEmployee(EmployeeViewModel employeeViewModel);

        bool DeactivateEmployee(int id);
    }
}
