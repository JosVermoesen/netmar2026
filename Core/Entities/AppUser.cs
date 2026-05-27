using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Core.Entities
{
    public class AppUser : IdentityUser
    {
        [StringLength(50)]
        public string? FirstName { get; set; }
        [StringLength(50)]
        public string? LastName { get; set; }
        public string? BerNumber { get; set; }
        [StringLength(12)]
        public string? ClientNumber { get; set; }
        public Address? Address { get; set; }
    }
}