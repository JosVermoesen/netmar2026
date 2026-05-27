using System.ComponentModel.DataAnnotations;
using Core.Entities;

namespace API.DTOs.VsoftCustomerInvoice
{
    public class VsoftCustomerInvoiceForDetailedDto : BaseEntity
    {
        // COMMON                
        public required string A110 { get; set; }
        [StringLength(11)]
        public required string V033 { get; set; } // doc number
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
        public decimal? Decv249 { get; set; }
        [StringLength(20)]
        public string? V039 { get; set; } // payment ref
        [StringLength(3)]
        public string? Vs03 { get; set; } // ISO code default EUR
        [StringLength(15)]
        public string? V040 { get; set; } // daycourse
        public decimal? Decv040 { get; set; }
        [StringLength(1)]
        public string? V041 { get; set; } // flag document
        [StringLength(50)]
        public string? V245 { get; set; } // user number
        [StringLength(50)]
        public string? V246 { get; set; } // systemdate        

        // INSURANCE EXTRAS
        [StringLength(12)]
        public string? A000 { get; set; } // contract nr
        [StringLength(10)]
        public string? B010 { get; set; } // premium to pay
        public decimal? DecB010 { get; set; }
        [StringLength(10)]
        public string? B014 { get; set; } // commission
        public decimal? DecB014 { get; set; }
        [StringLength(10)]
        public string? B090 { get; set; } // premium to return
        public decimal? DecB090 { get; set; }
        [StringLength(10)]
        public string? B094 { get; set; } // commission -
        public decimal? DecB094 { get; set; }
        [StringLength(10)]
        public string? V065 { get; set; } // amount damage paid 
        public decimal? Decv065 { get; set; }
        [StringLength(50)]
        public string? E069 { get; set; } // Admin cost fixed amount
        public string? Dece069 { get; set; }

        [StringLength(50)]
        public string? E071 { get; set; } // Fee %
        [StringLength(50)]
        public string? E072 { get; set; } // Fee amount in EUR

        // VAT EXTRAS
        [StringLength(10)]
        public string? V055 { get; set; } // BOX 00
        public decimal? Decv055 { get; set; }
        [StringLength(10)]
        public string? V056 { get; set; } // BOX 01
        public decimal? Decv056 { get; set; }
        [StringLength(10)]
        public string? V057 { get; set; } // BOX 02
        public decimal? Decv057 { get; set; }
        [StringLength(10)]
        public string? V058 { get; set; } // BOX 03
        public decimal? Decv058 { get; set; }
        [StringLength(10)]
        public string? V059 { get; set; } // BOX 45
        public decimal? Decv059 { get; set; }
        [StringLength(10)]
        public string? V060 { get; set; } // BOX 46
        public decimal? Decv060 { get; set; }
        [StringLength(10)]
        public string? V061 { get; set; } // BOX 47
        public decimal? Decv061 { get; set; }
        [StringLength(10)]
        public string? V062 { get; set; } // BOX 48
        public decimal? Decv062 { get; set; }
        [StringLength(10)]
        public string? V063 { get; set; } // BOX 49
        public decimal? Decv063 { get; set; }
        [StringLength(10)]
        public string? V064 { get; set; } // BOX 54/64 VAT AMOUNT
        public decimal? Decv064 { get; set; }

        // LOOK UP TO DO                
        [StringLength(50)]
        public string? RvDm { get; set; }
        public string? RvXmltb2 { get; set; }    

        // PEPPOL
        public string? V405 { get; set; }    // PEPPOL 1=YES 2 or blanc=NO
        public string? V406 { get; set; }    // PEPPOL 1=YES 2 or blanc=NO    
    }
}
