using ConsultaCEP.WebAPI.Models;

namespace ConsultaCEP.WebAPI.Services.Contracts
{
    public interface IUserService
    {
         User UserAuth(User user);
    }
}