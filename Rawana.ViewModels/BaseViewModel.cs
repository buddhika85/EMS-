namespace Rawana.ViewModels
{
    public class BaseViewModel
    {
        public bool IsSuccessful => string.IsNullOrWhiteSpace(ErrorMessage);

        public string ErrorMessage { get; set; }
    }
}
