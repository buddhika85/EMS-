using System;
using System.ComponentModel.DataAnnotations;

namespace Rawana.ViewModels
{
    public class EmployeeViewModel : BaseViewModel
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public DateTime JoinedDateTime { get; set; }
        public bool IsPermenent { get; set; }
        
        public bool IsFullTime { get; set; }
        [Required]
        public decimal Salary { get; set; }
        public bool IsActive { get; set; }
        public int? ManagerId { get; set; }
        [Required]
        public int DepartmentId { get; set; }
        [Required]
        public int PositionId { get; set; }

        public string ManagerName { get; set; }
        public string DepartmentName { get; set; }
        public string JobTitle { get; set; }
        public string IsPermenentString => IsPermenent ? "Yes" : "No";
        public string IsFullTimeString => IsFullTime ? "Yes" : "No";
        public string JoinedDateString => JoinedDateTime.ToShortDateString();

        public string FullName => $"{FirstName} {LastName}";
    }
}
