using Core.Entities;

namespace Core.Dtos.VsoftSupplier
{
    public class VsoftSupplierForListDto : BaseEntity
    {
        public required string A110 { get; set; }
        public string? A100 { get; set; }
        public string? A104 { get; set; }
        public string? A105 { get; set; }
        public string? A106 { get; set; }
        public string? A107 { get; set; }
        public string? A108 { get; set; }
    }
}
