using System;

namespace Rawana.ViewModels
{
    public class EmployeeViewModel : BaseViewModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime JoinedDateTime { get; set; }
        public bool IsPermenent { get; set; }
        public bool IsFullTime { get; set; }
        public decimal Salary { get; set; }
        public bool IsActive { get; set; }
        public int? ManagerId { get; set; }
        public int DepartmentId { get; set; }
        public int PositionId { get; set; }

        public string ManagerName { get; set; }
        public string DepartmentName { get; set; }
        public string JobTitle { get; set; }
    }
}
