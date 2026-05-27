using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace API.DTOs.VsoftContract
{
    public class ContractForNewDto : BaseEntity
    {
        [Required]
        [StringLength(12, ErrorMessage = "Contract number required cannot exceed 12 characters.")]
        public string A000 { get; set; } = string.Empty;
        [Required]
        [StringLength(12, ErrorMessage = "Customer number required cannot exceed 12 characters.")]
        public string A110 { get; set; } = string.Empty;
        [Required]
        [StringLength(4)]
        public string? A010 { get; set; } = string.Empty; // InsuranceCompany code (Belgium: CDV number)        
        [Required]
        [StringLength(30)]
        public string? Vs99 { get; set; } = string.Empty; // Description short (30 characters)        
        [Required]
        public string? Vs98 { get; set; } = string.Empty; // Description long
        [Required]
        [StringLength(3, ErrorMessage = "Insurance type code required cannot exceed 3 characters.")]
        public string V223 { get; set; } = string.Empty;
    }
}
