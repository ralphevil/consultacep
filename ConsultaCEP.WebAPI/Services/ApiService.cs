
using System;
using System.Net.Http;
using System.Threading.Tasks;
using ConsultaCEP.WebAPI.Models;
using Newtonsoft.Json;

namespace ConsultaCEP.WebAPI.Services
{
    public class ApiService
    {
        public async Task<CEP> AddressAsync(string cep)
        {
            HttpClient client = new HttpClient();
            try
            {
                string url = $"https://viacep.com.br/ws/{cep}/json";
                var response = await client.GetStringAsync(url);
                var address = JsonConvert.DeserializeObject<CEP>(response);
                return address;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}