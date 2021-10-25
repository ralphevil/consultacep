using System.Linq;
using System.Xml.Linq;
using ConsultaCEP.WebAPI.Models;
using ConsultaCEP.WebAPI.Services.Contracts;

namespace ConsultaCEP.WebAPI.Services
{
    public class UserService : IUserService
    {
        public User UserAuth(User userLogin)
        {            
            var userXml = GetUserXML();
            if(userXml.Login.Equals(userLogin.Login) && userXml.Senha.Equals(userLogin.Senha)){
                return userLogin;
            }else{
                return null;
            }            
        }

        public User GetUserXML(){
            XDocument xDocument = XDocument.Load("UserData.xml");
            var userXml = xDocument.Descendants("User").Select
                (x => new User()
                {
                    Login = x.Element("Login").Value,
                    Senha = x.Element("Senha").Value

                }).FirstOrDefault();            
            return userXml;
        }
    }
}