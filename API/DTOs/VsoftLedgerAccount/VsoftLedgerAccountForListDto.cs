using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities;

namespace API.DTOs.VsoftLedgerAccount
{
    public class VsoftLedgerAccountForListDto : BaseEntity
    {
        public required string V019 { get; set; }
        public string? V020 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Dece022 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Dece023 { get; set; }
    }
}
