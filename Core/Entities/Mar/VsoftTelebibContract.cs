using System.ComponentModel.DataAnnotations;

namespace Core.Entities.Mar
{
    public class VsoftTelebibContract : BaseEntity
    {
        [StringLength(4)]
        public string? Mij { get; set; }
        public string? MemoTb2 { get; set; }
        [StringLength(2)]
        public string? DocType { get; set; }
        public virtual required VsoftContract VsoftContract { get; set; } // important for ON DELETE CASCADE when Customer is deleted
    }
}
