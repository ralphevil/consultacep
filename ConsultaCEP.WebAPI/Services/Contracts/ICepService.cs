using ConsultaCEP.WebAPI.Models;

namespace ConsultaCEP.WebAPI.Services.Contracts
{
    public interface ICepService
    {
         CEP GetAddressByCep(string cep);
    }
}