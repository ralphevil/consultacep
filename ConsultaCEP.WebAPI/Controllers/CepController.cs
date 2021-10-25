using System;
using ConsultaCEP.WebAPI.Services.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ConsultaCEP.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CepController : ControllerBase
    {
        private readonly ICepService _cepService;

        public CepController(ICepService cepService)
        {
            _cepService = cepService;
        }
        
        [HttpGet("{cep}")]
        public IActionResult GetAdress(string cep){
            try{
                if (cep.Length == 8){
                    var resultado = _cepService.GetAddressByCep(cep);
                    return Ok(resultado);
                }else{
                    return BadRequest("CEP com falta de caracteres");
                }
                
            }catch(Exception ex){
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro na aplicação: {ex.Message}");
            }
            
        }
    }
}