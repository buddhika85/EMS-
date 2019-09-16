using Rawana.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using Rawana.DataAccess_GR_UOW;

namespace Rawana.Services.BusinessLogic.Position
{
    public class PositionBusinessLogic : CoreBusinessLogic, IPositionBusinessLogic
    {
        public GenericRepository<DataAccess_EF.Position> Repository { get; set; }

        public List<PositionViewModel> SearchPositions(string searchString)
        {
            try
            {
                var list = Repository.GetAll().Where(x =>
                        (string.IsNullOrWhiteSpace(searchString) || x.Description.Contains(searchString)) &&
                        (string.IsNullOrWhiteSpace(searchString) || x.JobTitle.Contains(searchString)))
                    .Select(ConvertToViewModel).ToList();
                return list;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        private PositionViewModel ConvertToViewModel(DataAccess_EF.Position model)
        {
            return new PositionViewModel
            {
                Id = model.Id,
                Description = model.Description,
                JobTitle = model.JobTitle
            };
        }
    }
}
