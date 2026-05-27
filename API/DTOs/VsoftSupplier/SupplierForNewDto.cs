using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace API.DTOs.VsoftSupplier
{
    public class SupplierForNewDto : BaseEntity
    {
        [Required]
        public string A110 { get; set; } = string.Empty;
        [Required]
        public string A100 { get; set; } = string.Empty;
        [Required]
        public string A107 { get; set; } = string.Empty;
        [Required]
        public string A108 { get; set; } = string.Empty;
    }
}
