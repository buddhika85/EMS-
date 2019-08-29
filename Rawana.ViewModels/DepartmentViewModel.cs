using System.ComponentModel.DataAnnotations;

namespace Rawana.ViewModels
{
    public class DepartmentViewModel : BaseViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Department Name Required")]
        public string Name { get; set; }
    }
}
