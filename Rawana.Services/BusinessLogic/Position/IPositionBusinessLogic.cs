using Rawana.ViewModels;
using System.Collections.Generic;

namespace Rawana.Services.BusinessLogic.Position
{
    public interface IPositionBusinessLogic
    {
        List<PositionViewModel> SearchPositions(string searchString);
    }
}
