using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities;

namespace API.DTOs.VsoftContract
{
    public class VsoftContractForListDto : BaseEntity
    {
        public string? A000 { get; set; } // A000
        [StringLength(4)]
        public string? A010 { get; set; }
        [StringLength(12)]
        public string? A110 { get; set; }
        [Column("vs99")]
        [StringLength(30)]
        public string? Vs99 { get; set; }
        [Column("vs98")]
        public string? Vs98 { get; set; }
    }
}
