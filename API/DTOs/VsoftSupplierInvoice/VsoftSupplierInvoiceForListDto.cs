using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace Core.Dtos.VsoftSupplierInvoice
{
    public class VsoftSupplierInvoiceForListDto : BaseEntity
    {
        // COMMON        
        public required string V033 { get; set; }
        public required string A110 { get; set; } 
        [StringLength(11)]
        public string? V035 { get; set; } // doc date
        [StringLength(50)]
        public string? V066 { get; set; } // booking date
        [StringLength(8)]
        public string? V036 { get; set; } // expire date
        [StringLength(10)]
        public string? V037 { get; set; } // paid already
        [StringLength(8)]
        public string? V038 { get; set; } // bank sheet nr
        [StringLength(12)]
        public string? V249 { get; set; } // total doc in EUR
        public decimal? Decv249 { get; set; }
        [StringLength(20)]
        public string? V039 { get; set; } // payment ref
    }
}
