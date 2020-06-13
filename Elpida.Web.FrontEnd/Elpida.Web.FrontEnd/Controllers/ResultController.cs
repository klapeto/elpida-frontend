using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Elpida.Web.FrontEnd.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class ResultController: Controller
	{
		[HttpPost]
		public async Task<IActionResult> PostNew()
		{
			return Created("", new { });
		}
	}
}