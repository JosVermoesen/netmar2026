using Core.Entities;

namespace API.DTOs.VsoftTelebibContract
{
    public class VsoftTelebibContractForDetailedDto : BaseEntity
    {        
        public string? Mij { get; set; }
        public string? MemoTb2 { get; set; }
        public string? DocType { get; set; }
        public string? DocStatus { get; set; }        
        public int? RvID { get; set; }        
    }
}
