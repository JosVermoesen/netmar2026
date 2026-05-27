using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace API.DTOs.VsoftLedgerAccount
{
    public class VsoftLedgerAccountForNewDto : BaseEntity
    {
        [Required]
        public string V019 { get; set; } = string.Empty;
        [Required]
        public string V020 { get; set; } = string.Empty;

    }
}
