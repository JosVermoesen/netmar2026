using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Core.Entities.Mar
{
    [Index(nameof(A000), IsUnique = true)]
    public class VsoftContract : BaseEntity
    {
        [StringLength(12)]
        public required string A000 { get; set; }      // A000 Contract Number        
        [StringLength(12)]
        public required string A110 { get; set; } // A110 in mdv database
        [StringLength(3)]
        public required string V223 { get; set; } // insurance contracttype
        [StringLength(4)]
        public string? A010 { get; set; } // InsuranceCompany code (Belgium: CDV number)        
        [StringLength(30)]
        public string? Vs99 { get; set; } // Description short (30 characters)        
        public string? Vs98 { get; set; } // Description long
        [StringLength(2)]
        public string? V164 { get; set; }
        [StringLength(2)]
        public string? V165 { get; set; }
        [StringLength(8)]
        public string? Aw2 { get; set; }
        [StringLength(1)]
        public string? A325 { get; set; }
        [StringLength(1)]
        public string? A600 { get; set; }
        [StringLength(1)]
        public string? Vs97 { get; set; }
        [StringLength(10)]
        public string? B010 { get; set; }
        [StringLength(10)]
        public string? B014 { get; set; }
        [StringLength(1)]
        public string? V166 { get; set; }
        [StringLength(2)]
        public string? Vs96 { get; set; }
        [StringLength(30)]
        public string? V167 { get; set; }
        [Column(TypeName = "money")]
        public decimal DecB010 { get; set; }
        [Column(TypeName = "money")]
        public decimal DecB014 { get; set; }
        // TODO!!!!!!!!!!!
        public string? Dece069 { get; set; }
        [StringLength(50)]
        public string? E069 { get; set; }
        [StringLength(50)]
        public string? E070 { get; set; }
        [StringLength(50)]
        public string? E071 { get; set; }
        [StringLength(50)]
        public string? E072 { get; set; }

        public required virtual VsoftCustomer VsoftCustomer { get; set; }  // important for ON DELETE CASCADE when Customer is deleted        

        public virtual ICollection<VsoftTelebibContract> VsoftTelebibContracts { get; set; }
        public VsoftContract()
        {
            VsoftTelebibContracts = [];
        }
    }
}
