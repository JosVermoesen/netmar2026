using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using API.DTOs.VsoftTelebibContract;
using Core.Entities;

namespace API.DTOs.VsoftContract
{
    public class VsoftContractForDetailedDto : BaseEntity
    {
        [StringLength(4)]
        public string? A010 { get; set; }
        [StringLength(12)]
        public string? A000 { get; set; }
        [StringLength(12)]
        public string? A110 { get; set; }
        [Column("vs99")]
        [StringLength(30)]
        public string? Vs99 { get; set; }
        [Column("vs98")]
        public string? Vs98 { get; set; }
        [Column("v164")]
        [StringLength(2)]
        public string? V164 { get; set; }
        [Column("v165")]
        [StringLength(2)]
        public string? V165 { get; set; }
        [Column("AW_2")]
        [StringLength(8)]
        public string? Aw2 { get; set; }
        [StringLength(1)]
        public string? A325 { get; set; }
        [StringLength(1)]
        public string? A600 { get; set; }
        [Column("vs97")]
        [StringLength(1)]
        public string? Vs97 { get; set; }
        [StringLength(10)]
        public string? B010 { get; set; }
        [StringLength(10)]
        public string? B014 { get; set; }
        [Column("v166")]
        [StringLength(1)]
        public string? V166 { get; set; }
        [Column("v223")]
        [StringLength(3)]
        public string? V223 { get; set; }
        [Column("vs96")]
        [StringLength(2)]
        public string? Vs96 { get; set; }
        [Column("v167")]
        [StringLength(30)]
        public string? V167 { get; set; }
        [Column("decB010", TypeName = "money")]
        public decimal? DecB010 { get; set; }
        [Column("decB014", TypeName = "money")]
        public decimal? DecB014 { get; set; }
        [Column("dece069")]
        public string? Dece069 { get; set; }
        [Column("e069")]
        [StringLength(50)]
        public string? E069 { get; set; }
        [Column("e070")]
        [StringLength(50)]
        public string? E070 { get; set; }
        [Column("e071")]
        [StringLength(50)]
        public string? E071 { get; set; }
        [Column("e072")]
        [StringLength(50)]
        public string? E072 { get; set; }
        public ICollection<VsoftTelebibContractForDetailedDto> VsoftTelebibContracts { get; set; } = [];
    }
}
