using System.ComponentModel.DataAnnotations;

namespace ConsultaCEP.WebAPI.Models
{
    public class User
    {
        [Required(ErrorMessage="O login é obrigatório")]
        public string Login { get; set; }

        [Required(ErrorMessage="A senha é obrigatória")]
        public string Senha { get; set; }
    }
}