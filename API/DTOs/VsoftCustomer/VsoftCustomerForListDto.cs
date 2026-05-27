using Core.Entities;

namespace API.DTOs.VsoftCustomer
{
    public class VsoftCustomerForListDto : BaseEntity
    {
        public required string A110 { get; set; }
        public string? G101 { get; set; }    // preference documents 
                                             // 0 = classic postal mail only
                                             // 1 = email PUSH
                                             // 2 = email PULL
        public required string A100 { get; set; } // LastName 1
        public string? A101 { get; set; } // FirstName 1
        public string? V301 { get; set; } // RR number 1 or
        public string? A161 { get; set; } // if company VAT number (BE format)
        public string? V226 { get; set; } // mobile phone number (main)
        public string? V224 { get; set; } // main email adress

        public string? A125 { get; set; } // LastName 2
        public string? A127 { get; set; } // FirstName 2
        public string? V302 { get; set; } // RR number 2 (partner or sales contact if company)
        public string? V002 { get; set; } // email 2 (partner or sales contact if company)
        public string? V244 { get; set; } // Mobile Phone (partner or sales contact if company)
        public string? A10a { get; set; } // main phone number (fixed)
        public string? A104 { get; set; } // Street
        public string? A105 { get; set; } // House number
        public string? A106 { get; set; } // App. Box number 
        public string? A107 { get; set; } // Postal Code
        public string? A108 { get; set; } // City

        // END OF YEAR PRESENTS
        public string? G102 { get; set; }    // A 1=YES 2 or blanc=NO  
        public string? G103 { get; set; }    // B 1=YES 2 or blanc=NO  
        public string? G104 { get; set; }    // C 1=YES 2 or blanc=NO  
        public string? G105 { get; set; }    // D 1=YES 2 or blanc=NO          

        // PEPPOL
        public string? V407 { get; set; }    // PEPPOL 1=YES 2 or blanc=NO
    }
}
