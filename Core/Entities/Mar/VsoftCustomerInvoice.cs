using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Core.Entities.Mar
{
    [Index(nameof(V033), IsUnique = true)]
    public class VsoftCustomerInvoice : BaseEntity
    {
        // COMMON        
        [StringLength(11)]
        public required string V033 { get; set; } // doc number V033
        [StringLength(12)]
        public required string A110 { get; set; } // 'K'+ A110 in mdv database
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
        public decimal Decv249 { get; set; }
        [StringLength(35)]
        public string? V039 { get; set; } // payment ref
        [StringLength(3)]
        public string? Vs03 { get; set; } // ISO code default EUR
        [StringLength(15)]
        public string? V040 { get; set; } // daycourse
        [Column(TypeName = "money")]
        public decimal Decv040 { get; set; }
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
        [Column(TypeName = "money")]
        public decimal DecB010 { get; set; }
        [StringLength(10)]
        public string? B014 { get; set; } // commission
        [Column(TypeName = "money")]
        public decimal DecB014 { get; set; }
        [StringLength(10)]
        public string? B090 { get; set; } // premium to return
        [Column(TypeName = "money")]
        public decimal DecB090 { get; set; }
        [StringLength(10)]
        public string? B094 { get; set; } // commission -
        [Column(TypeName = "money")]
        public decimal DecB094 { get; set; }
        [StringLength(10)]
        public string? V065 { get; set; } // amount damage paid 
        [Column(TypeName = "money")]
        public decimal Decv065 { get; set; }
        [StringLength(50)]
        public string? E069 { get; set; } // Admin cost fixed amount
        // TODO!!!!!!!!!!!
        public string? Dece069 { get; set; }
        [StringLength(50)]
        public string? E071 { get; set; } // Fee %
        [StringLength(50)]
        public string? E072 { get; set; } // Fee amount in EUR

        // VAT EXTRAS
        [StringLength(10)]
        public string? V055 { get; set; } // BOX 00
        [Column(TypeName = "money")]
        public decimal Decv055 { get; set; }
        [StringLength(10)]
        public string? V056 { get; set; } // BOX 01
        [Column(TypeName = "money")]
        public decimal Decv056 { get; set; }
        [StringLength(10)]
        public string? V057 { get; set; } // BOX 02
        [Column(TypeName = "money")]
        public decimal Decv057 { get; set; }
        [StringLength(10)]
        public string? V058 { get; set; } // BOX 03
        [Column(TypeName = "money")]
        public decimal Decv058 { get; set; }
        [StringLength(10)]
        public string? V059 { get; set; } // BOX 45
        [Column(TypeName = "money")]
        public decimal Decv059 { get; set; }
        [StringLength(10)]
        public string? V060 { get; set; } // BOX 46
        [Column(TypeName = "money")]
        public decimal Decv060 { get; set; }
        [StringLength(10)]
        public string? V061 { get; set; } // BOX 47
        [Column(TypeName = "money")]
        public decimal Decv061 { get; set; }
        [StringLength(10)]
        public string? V062 { get; set; } // BOX 48
        [Column(TypeName = "money")]
        public decimal Decv062 { get; set; }
        [StringLength(10)]
        public string? V063 { get; set; } // BOX 49
        [Column(TypeName = "money")]
        public decimal Decv063 { get; set; }
        [StringLength(10)]
        public string? V064 { get; set; } // BOX 54/64 VAT AMOUNT
        [Column(TypeName = "money")]
        public decimal Decv064 { get; set; }

        // LOOK UP TO DO                
        [StringLength(50)]
        public string? RvDm { get; set; }        
        public string? RvXmltb2 { get; set; }        
        [StringLength(1000)]
        public string? V405 { get; set; } // sent certificate
        [StringLength(1000)]        
        public string? V406 { get; set; } // sent invoice        
        
        public virtual required VsoftCustomer VsoftCustomer { get; set; }     // important for ON DELETE CASCADE when Customer is deleted        
    }
}
