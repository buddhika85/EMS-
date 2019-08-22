using Rawana.ViewModels;
using System.Collections.Generic;

namespace Rawana.Services.BusinessLogic.Employee
{
    public interface IEmployeeBusinessLogic
    {
        List<EmployeeViewModel> GetAllEmployees();

        EmployeeViewModel GetByEmployeeById(int id);

        EmployeeViewModel SaveEmployee(EmployeeViewModel employeeViewModel);

        bool DeactivateEmployee(int id);
        List<EmployeeViewModel> SearchEmployees(string searchString);
        EmployeeViewModel UpdateEmployeeStatus(int employeeId);
    }
}
