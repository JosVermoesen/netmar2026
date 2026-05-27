using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace API.DTOs.VsoftCustomer
{
    public class CustomerForNewDto : BaseEntity
    {
        [Required]
        public string A110 { get; set; } = string.Empty;
        [Required]
        public string A100 { get; set; } = string.Empty;
        [Required]
        public string A107 { get; set; } = string.Empty;
        [Required]
        public string A108 { get; set; } = string.Empty;
        [Required]
        public string? V301 { get; set; } = string.Empty;
    }
}
