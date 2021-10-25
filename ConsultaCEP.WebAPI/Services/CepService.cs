using ConsultaCEP.WebAPI.Models;
using ConsultaCEP.WebAPI.Services.Contracts;

namespace ConsultaCEP.WebAPI.Services
{
    public class CepService : ICepService
    {      

        public CEP GetAddressByCep(string cep)
        {
            ApiService _apiService = new ApiService();
            var address = _apiService.AddressAsync(cep);
            return address.Result;
        }
    }
}