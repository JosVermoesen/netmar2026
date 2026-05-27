using Core.Entities;

namespace API.DTOs.VsoftCustomer
{
    public class CustomerForUpdateDto : BaseEntity
    {
        /* public string Id { get; set; }
        public string A100 { get; set; }
        public string A107 { get; set; }
        public string A108 { get; set; }
        public string V301 { get; set; } */
        // MAIN        
        public required string A110 { get; set; }
        public string? A10c { get; set; }    // Language code
        public string? A104 { get; set; }    // Street
        public string? A105 { get; set; }    // Number
        public string? A106 { get; set; }    // Box
        public string? A107 { get; set; }    // Postal code
        public string? A108 { get; set; }    // City
        public string? A109 { get; set; }    // Country code (Belgian bPost)
        public string? A161 { get; set; }    // VAT number (BE format)
        public string? V151 { get; set; }    // co-contractor (1=yes)
        public string? V111 { get; set; }    // default VAT code
        public string? V254 { get; set; }    // cloudlink (myDocuments)
        public string? Vs04 { get; set; }    // payment term
        public string? V227 { get; set; }    // date last visit/order
        public string? V247 { get; set; }    // (local)server guid (myDocuments)
        public string? A10a { get; set; }    // main phone number (fixed line)
        public string? Vs02 { get; set; }    // main fax number (fixed line)
        public string? A123 { get; set; }    // marital status
        public string? A124 { get; set; }    // code sex (3= legal person/rechtspersoon)
        public string? A121 { get; set; }    // code nationality 

        // FIRST PERSON
        public string? V301 { get; set; }    // RR number1        
        public string? A102 { get; set; }    // Title code
        public string? A100 { get; set; }    // Name
        public string? V224 { get; set; }    // main email adress
        public string? A101 { get; set; }    // Forename
        public string? V226 { get; set; }    // mobile phone number (main)
        public string? V243 { get; set; }    // Phone work
        public string? V259 { get; set; }    // IBAN banc account
        public string? V260 { get; set; }    // BIC banc account
        public string? A170 { get; set; }    // banc account number (BE old format)

        // SECOND PERSON (PARTNER)
        public string? V302 { get; set; }    // RR number2 (partner)
        public string? Vs01 { get; set; }    // Title code (partner)
        public string? A125 { get; set; }    // Name (partner)
        public string? A127 { get; set; }    // Forename (partner)
        public string? V244 { get; set; }    // Mobile Phone (partner)
        public string? V002 { get; set; }    // email2 (partner)
        public string? V257 { get; set; }    // IBAN banc account2 (partner)
        public string? V258 { get; set; }    // BIC banc account2 (partner)
        public string? V251 { get; set; }    // old banc account (partner)
    }
}