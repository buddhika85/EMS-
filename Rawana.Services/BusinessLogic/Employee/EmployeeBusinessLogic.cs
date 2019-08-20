using Rawana.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Rawana.Services.BusinessLogic.Employee
{
    public class EmployeeBusinessLogic : CoreBusinessLogic<DataAccess_EF.Employee>, IEmployeeBusinessLogic
    {
        public List<EmployeeViewModel> GetAllEmployees()
        {
            try
            {
                var employees = Repository.GetAll().Select(ConvertToViewModel).ToList();
                return employees;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        

        public EmployeeViewModel GetByEmployeeById(int id)
        {
            try
            {
                var employee = ConvertToViewModel(Repository.GetByPrimaryKey(id));
                return employee;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public List<EmployeeViewModel> SearchEmployees(string searchString)
        {
            try
            {
                searchString = string.IsNullOrWhiteSpace(searchString) ? searchString : searchString.ToLower();

                var employees = Repository.GetAll().
                    Where(x => string.IsNullOrWhiteSpace(searchString) ||
                                (!string.IsNullOrWhiteSpace(x.FirstName) && x.FirstName.ToLower().Contains(searchString)) ||
                                (!string.IsNullOrWhiteSpace(x.LastName) && x.LastName.ToLower().Contains(searchString)) ||
                                (!string.IsNullOrWhiteSpace(x.Position?.Description) && x.Position.Description.ToLower().Contains(searchString)) ||
                                (!string.IsNullOrWhiteSpace(x.Department?.Name) && x.Department.Name.ToLower().Contains(searchString)) ||
                                (!string.IsNullOrWhiteSpace(x.Employee2?.FirstName) && x.Employee2.FirstName.ToLower().Contains(searchString)) ||
                                (!string.IsNullOrWhiteSpace(x.Employee2?.LastName)) && x.Employee2.LastName.ToLower().Contains(searchString))
                    .Select(ConvertToViewModel).ToList();
                return employees;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public EmployeeViewModel SaveEmployee(EmployeeViewModel employeeViewModel)
        {
            throw new System.NotImplementedException();
        }

        public bool DeactivateEmployee(int id)
        {
            throw new System.NotImplementedException();
        }

        private EmployeeViewModel ConvertToViewModel(DataAccess_EF.Employee model)
        {
            try
            {
                return new EmployeeViewModel
                {
                    Id = model.Id,
                    DepartmentId = model.DepartmentId,
                    DepartmentName = model.Department.Name,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    IsActive = model.IsActive,
                    IsFullTime = model.IsFullTime,
                    IsPermenent = model.IsPermenent,
                    JobTitle = model.Position.JobTitle,
                    JoinedDateTime = model.JoinedDateTime,
                    ManagerId = model.ManagerId,
                    ManagerName = model.Employee2 != null ? $"{model.Employee2.FirstName} {model.Employee2.LastName}" : string.Empty,
                    PositionId = model.PositionId,
                    Salary = model.Salary
                };
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}
