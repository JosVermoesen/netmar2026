using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities;

namespace API.DTOs.VsoftLedger
{
    public class VsoftLedgerForDetailedDto : BaseEntity
    {        
        public required string V019 { get; set; } // important for ON DELETE CASCADE when User is deleted
        [Column("v070")]
        [StringLength(15)]
        public string? V070 { get; set; }
        [Column("v034")]
        [StringLength(13)]
        public string? V034 { get; set; }
        [Column("v066")]
        [StringLength(8)]
        public string? V066 { get; set; }
        [Column("v033")]
        [StringLength(11)]
        public string? V033 { get; set; }
        [Column("v038")]
        [StringLength(8)]
        public string? V038 { get; set; }
        [Column("v035")]
        [StringLength(8)]
        public string? V035 { get; set; }
        [Column("v067")]
        [StringLength(35)]
        public string? V067 { get; set; }
        [Column("v068")]
        [StringLength(12)]
        public string? V068 { get; set; }
        [Column("v069")]
        [StringLength(7)]
        public string? V069 { get; set; }
        [Column("v041")]
        [StringLength(1)]
        public string? V041 { get; set; }
        [Column("v249")]
        [StringLength(50)]
        public string? V249 { get; set; }
        [Column("v248")]
        [StringLength(12)]
        public string? V248 { get; set; }
        [Column("v245")]
        [StringLength(50)]
        public string? V245 { get; set; }
        [Column("v246")]
        [StringLength(50)]
        public string? V246 { get; set; }
        [Column("dece068", TypeName = "money")]
        public decimal? Dece068 { get; set; }
        [Column("v102")]
        public string? V102 { get; set; }        
    }
}