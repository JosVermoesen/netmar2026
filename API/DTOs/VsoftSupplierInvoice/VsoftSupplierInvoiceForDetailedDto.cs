using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Core.Entities;

namespace API.DTOs.VsoftSupplierInvoice 
{
    public class VsoftSupplierInvoiceForDetailedDto : BaseEntity
    {
        // COMMON        
        [StringLength(11)] 
        public required string V033 { get; set; } // doc number V033
        public required string A110 { get; set; }
        [StringLength(8)]
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
        [Column(TypeName = "money")]
        public decimal? Decv249 { get; set; }
        [StringLength(20)]
        public string? V039 { get; set; } // payment ref
        [StringLength(3)]
        public string? Vs03 { get; set; } // ISO code default EUR
        [StringLength(15)]
        public string? V040 { get; set; } // daycourse
        [Column(TypeName = "money")]
        public decimal? Decv040 { get; set; }
        [StringLength(1)]
        public string? V041 { get; set; } // flag document
        [StringLength(50)]
        public string? V245 { get; set; } // user number
        [StringLength(50)]
        public string? V246 { get; set; } // systemdate        
        
        // LOOK UP TO DO                
        [StringLength(50)]
        public string? RvDm { get; set; }
        
        // VAT SUPPLIERS        
        [StringLength(10)]
        public string? V042 { get; set; } // BOX 55
        [StringLength(10)]
        public string? V043 { get; set; } // BOX 56
        [StringLength(10)]
        public string? V044 { get; set; } // BOX 57
        [StringLength(10)]
        public string? V045 { get; set; } // BOX 59/63
        [StringLength(10)]
        public string? V046 { get; set; } // BOX 81
        [StringLength(10)]
        public string? V047 { get; set; } // BOX 82
        [StringLength(10)]
        public string? V048 { get; set; } // BOX 83
        [StringLength(10)]
        public string? V049 { get; set; } // depts via thirts other than 81-83
        [StringLength(10)]
        public string? V050 { get; set; } // BOX 84
        [StringLength(10)]
        public string? V051 { get; set; } // BOX 85
        [StringLength(10)]
        public string? V052 { get; set; } // BOX 86
        [StringLength(10)]
        public string? V053 { get; set; } // BOX 87
        [StringLength(10)]
        public string? V054 { get; set; } // BOX 88 ptjer than 86/87
        [Column(TypeName = "money")]
        public decimal? Decv042 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv043 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv044 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv045 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv046 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv047 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv048 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv049 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv050 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv051 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv052 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv053 { get; set; }
        [Column(TypeName = "money")]
        public decimal? Decv054 { get; set; }
    }
}
