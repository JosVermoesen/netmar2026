using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Core.Entities.Mar
{
    [Index(nameof(A110), IsUnique = true)]
    public class VsoftSupplier : BaseEntity
    {
        [StringLength(12)]
        public required string A110 { get; set; } // codenumber (A110)
        [StringLength(1)]
        public string? A102 { get; set; } // Title code
        [StringLength(50)]
        public string? A100 { get; set; } // Name 1
        [StringLength(1)]
        public string? Vs01 { get; set; } // Title code 2
        [StringLength(50)]
        public string? A125 { get; set; } // Name 2
        [StringLength(1)]
        public string? A10c { get; set; } // Language code
        [StringLength(50)]
        public string? A104 { get; set; } // Street
        [StringLength(5)]
        public string? A105 { get; set; } // Number
        [StringLength(4)]
        public string? A106 { get; set; } // Box
        [StringLength(7)]
        public string? A107 { get; set; } // Postal code
        [StringLength(50)]
        public string? A108 { get; set; } // Place
        [StringLength(3)]
        public string? V149 { get; set; } // ISO Country NUMBER
        [StringLength(3)]
        public string? A109 { get; set; } // Country code Postoffice
        [StringLength(2)]
        public string? V150 { get; set; } // ISO Country CODE
        [StringLength(3)]
        public string? Vs03 { get; set; } // ISO Currency code
        [StringLength(12)]
        public string? A10a { get; set; } // Phone number
        [StringLength(12)]
        public string? Vs02 { get; set; } // Fax        
        [StringLength(60)]
        public string? V224 { get; set; } // Email 
        [StringLength(1)]

        // e072 paperless
        public string? V163 { get; set; } // connection for stock       
        [StringLength(7)]
        public string? V016 { get; set; } // connection for 6-costaccount
        [StringLength(7)]
        public string? V161 { get; set; } // connection for 44-account
        [StringLength(15)]
        public string? A161 { get; set; } // VAT number
        [StringLength(50)]
        public string? V404 { get; set; } // company id number
        [StringLength(14)]
        public string? A170 { get; set; } // belgian fin. account old format
        [StringLength(50)]
        public string? V259 { get; set; } // fin. account IBAN format
        [StringLength(50)]
        public string? V260 { get; set; } // fin. account BIC
        [StringLength(10)]
        public string? A400 { get; set; } // fixed ref/agent number
        [StringLength(10)]
        public string? V015 { get; set; } // registration number
        [StringLength(1)]
        public string? V151 { get; set; } // medecontractant
        [StringLength(1)]
        public string? V111 { get; set; } // default VAT code
        [StringLength(4)]
        public string? Vs04 { get; set; } // payment delay days
        [StringLength(1)]
        public string? V017 { get; set; } // aardcode gestruct. mededeling
        [StringLength(9)]
        public string? V018 { get; set; } // streefomzet
        [StringLength(30)]
        public string? V001 { get; set; } // Picture
        [StringLength(64)]
        public string? V002 { get; set; } // Video file
        [StringLength(50)]
        public string? V226 { get; set; } // Mobile Phone number
        [StringLength(50)]
        public string? V227 { get; set; } // Date last visit
        [StringLength(50)]
        public string? V247 { get; set; } // Opmerkingen
        [StringLength(50)]
        public string? V254 { get; set; } // SQL aankoopverrichting        
        [StringLength(50)]
        public string? V255 { get; set; } // ?
        [StringLength(50)]
        public string? V256 { get; set; } // ?
        public string? V262 { get; set; } // ?  
        
        public virtual ICollection<VsoftSupplierInvoice> VsoftSupplierInvoices { get; set; }
        public VsoftSupplier()
        {
            VsoftSupplierInvoices = [];
        }
    }
}