using System;
using ConsultaCEP.WebAPI.Models;
using ConsultaCEP.WebAPI.Services.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ConsultaCEP.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        public readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Auth(User userLogin){            
            try
            {
                var user = _userService.UserAuth(userLogin);
                if (user != null)
                    return Ok(user);
                else
                    return NotFound("Usuário e/ou senha inválido(s)");
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro na aplicação: " + ex);
            }
        }
    }
}