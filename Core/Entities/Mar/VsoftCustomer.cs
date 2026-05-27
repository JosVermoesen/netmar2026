using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Core.Entities.Mar
{
    [Index(nameof(A110), IsUnique = true)]
    public class VsoftCustomer : BaseEntity
    {
        // MAIN        
        [StringLength(12)]
        public required string A110 { get; set; }      // A110 Unique code number                
        [StringLength(1)]
        public string? E072 { get; set; }    // paperless J/N
        [StringLength(1)]
        public string? G101 { get; set; }    // voorkeur documenten J/N
        [StringLength(1)]
        public string? G102 { get; set; }    // relatiegeschenk A J/N  
        [StringLength(1)]
        public string? G103 { get; set; }    // relatiegeschenk B J/N  
        [StringLength(1)]
        public string? G104 { get; set; }    // relatiegeschenk C J/N  
        [StringLength(1)]
        public string? G105 { get; set; }    // relatiegeschenk D J/N  
        [StringLength(1)]
        public string? G106 { get; set; }    // relatiegeschenk E J/N  
        [StringLength(1)]
        public string? A10c { get; set; }    // Language code
        [StringLength(50)]
        public string? A104 { get; set; }    // Street
        [StringLength(5)]
        public string? A105 { get; set; }    // Number
        [StringLength(4)]
        public string? A106 { get; set; }    // Box
        [StringLength(7)]
        public string? A107 { get; set; }    // Postal code
        [StringLength(50)]
        public string? A108 { get; set; }    // City
        [StringLength(3)]
        public string? V149 { get; set; }    // ISO Country number
        [StringLength(3)]
        public string? A109 { get; set; }    // Country code (Belgian bPost)
        [StringLength(2)]
        public string? V150 { get; set; }    // ISO Country code ()
        [StringLength(3)]
        public string? Vs03 { get; set; }    // ISO Currency code (EUR)
        [StringLength(7)]
        public string? V161 { get; set; }    // 40-account connection
        [StringLength(15)]
        public string? A161 { get; set; }    // VAT number (BE format)
        [StringLength(50)]
        public string? V404 { get; set; }    // company id number        
        [StringLength(1)]
        public string? V151 { get; set; }    // co-contractor (1=yes)
        [StringLength(1)]
        public string? V111 { get; set; }    // default VAT code
        [StringLength(100)]
        public string? V254 { get; set; }    // cloudlink (myDocuments)
        [StringLength(50)]
        public string? V255 { get; set; }    // domic. reference/abonnee ref
        [StringLength(50)]
        public string? V256 { get; set; }    // domic. number
        [StringLength(14)]
        public string? A170 { get; set; }    // banc account number (BE old format)
        [StringLength(4)]
        public string? Vs04 { get; set; }    // payment term
        [StringLength(3)]
        public string? Vs05 { get; set; }    // fixed korting (%)
        [StringLength(1)]
        public string? Vs06 { get; set; }    // sorting code +
        [StringLength(1)]
        public string? Vs07 { get; set; }    // number of sheets (invoice)
        [StringLength(50)]
        public string? V225 { get; set; }    // 60-account connection
        [StringLength(50)]
        public string? V227 { get; set; }    // date last visit
        [StringLength(100)]
        public string? V247 { get; set; }    // (local)server guid (myDocuments)
        [StringLength(20)]
        public string? A10a { get; set; }    // main phone number (fixed)
        [StringLength(12)]
        public string? Vs02 { get; set; }    // main fax number
        [StringLength(60)]
        public string? V224 { get; set; }    // main email adress
        [StringLength(1)]
        public string? A123 { get; set; }    // marital status
        [StringLength(1)]
        public string? A124 { get; set; }    // code sex (3= legal person/rechtspersoon)
        [StringLength(3)]
        public string? A121 { get; set; }    // code nationality 
        [StringLength(12)]
        public string? A122 { get; set; }    // optional description nationality
        [StringLength(50)]
        public string? V259 { get; set; }    // IBAN banc account
        [StringLength(50)]
        public string? V260 { get; set; }    // BIC banc account
        [StringLength(50)]
        public string? E070 { get; set; }    // fee active (1=yes)
        [StringLength(50)]
        public string? E071 { get; set; }    // fee percentage
        [StringLength(50)]
        public string? V252 { get; set; }    // quitance forfait/kwijting forfait (1=yes)

        // INSURANCE MAIN
        [StringLength(8)]
        public string? A191 { get; set; }    // number drivers licence
        [StringLength(2)]
        public string? A192 { get; set; }    // type drivers licence
        [StringLength(8)]
        public string? A193 { get; set; }    // date drivers licence
        [StringLength(8)]
        public string? A194 { get; set; }    // driving since
        [StringLength(2)]
        public string? A197 { get; set; }    // profession risc class
        [StringLength(1)]
        public string? _510z { get; set; }   // main driver (1=yes)
        [StringLength(1)]
        public string? A130 { get; set; }    // physical person (1=yes)

        // FIRST IDENT
        [StringLength(11)]
        public string? V301 { get; set; }    // RR number1        
        [StringLength(1)]
        public string? A102 { get; set; }    // Title code
        [StringLength(50)]
        public string? A100 { get; set; }    // Name
        [StringLength(25)]
        public string? A101 { get; set; }    // First name
        [StringLength(16)]
        public string? V226 { get; set; }    // mobile phone number (main)
        [StringLength(50)]
        public string? V243 { get; set; }    // Phone work


        // SECOND IDENT (PARTNER)
        [StringLength(11)]
        public string? V302 { get; set; }    // RR number2 (partner)
        [StringLength(1)]
        public string? Vs01 { get; set; }    // Title code (partner)
        [StringLength(50)]
        public string? A125 { get; set; }    // Name (partner)
        [StringLength(25)]
        public string? A127 { get; set; }    // First name (partner)
        [StringLength(60)]
        public string? V002 { get; set; }    // email2 (partner)
        [StringLength(50)]
        public string? V257 { get; set; }    // IBAN banc account2 (partner)
        [StringLength(50)]
        public string? V258 { get; set; }    // BIC banc account2 (partner)
        [StringLength(50)]
        public string? V244 { get; set; }    // Mobile Phone (partner)
        [StringLength(50)]
        public string? V251 { get; set; }    // old banc account (partner)

        [StringLength(8)]
        public string? A120 { get; set; }    // birth date
        [StringLength(8)]
        public string? V201 { get; set; }    // birth date partner
        [StringLength(8)]
        public string? V202 { get; set; }    // birth date kid1
        [StringLength(8)]
        public string? V203 { get; set; }    // birth date kid2
        [StringLength(8)]
        public string? V204 { get; set; }    // birth date kid3
        [StringLength(8)]
        public string? V205 { get; set; }    // birth date kid4
        [StringLength(8)]
        public string? V206 { get; set; }    // birth date kid5
        [StringLength(15)]
        public string? V207 { get; set; }    // forname kid1
        [StringLength(15)]
        public string? V208 { get; set; }    // forname kid2
        [StringLength(15)]
        public string? V209 { get; set; }    // forname kid3
        [StringLength(15)]
        public string? V210 { get; set; }    // forname kid4
        [StringLength(15)]
        public string? V211 { get; set; }    // forname kid5
        [StringLength(50)]
        public string? V245 { get; set; }    // user number
        [StringLength(50)]
        public string? V246 { get; set; }    // system date         
        [StringLength(50)]
        public string? V253 { get; set; }    // SQL sell instruction
        [StringLength(50)]
        public string? Uxxx { get; set; }    // ?
        public string? V262 { get; set; }    // ?
        public string? V263 { get; set; }    // ?  
        public string? V407 { get; set; }    // XML suported documents
                      
        public virtual ICollection<VsoftContract> VsoftContracts { get; set; }
        public virtual ICollection<VsoftCustomerInvoice> VsoftCustomerInvoices { get; set; }        
              
        public VsoftCustomer()
        {
            VsoftContracts = [];
            VsoftCustomerInvoices = [];
        }
    }
}
