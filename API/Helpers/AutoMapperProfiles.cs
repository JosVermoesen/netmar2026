using Core.Entities.Mar;
using AutoMapper;
using API.DTOs.VsoftLedgerAccount;
using API.DTOs.VsoftLedger;
using API.DTOs.VsoftCustomer;
using API.DTOs.VsoftSupplier;
using Core.Dtos.VsoftSupplier;
using API.DTOs.VsoftSupplierInvoice;
using Core.Dtos.VsoftSupplierInvoice;
using API.DTOs.VsoftContract;
using API.DTOs.VsoftTelebibContract;
using API.DTOs.VsoftCustomerInvoice;

namespace Core.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {            
            CreateMap<VsoftLedgerAccount, VsoftLedgerAccountForDetailedDto>();
            CreateMap<VsoftLedgerAccount, VsoftLedgerAccountForListDto>();
            CreateMap<VsoftLedgerAccountForNewDto, VsoftLedgerAccount>();
            CreateMap<VsoftLedgerAccountForUpdateDto, VsoftLedgerAccount>();

            CreateMap<VsoftLedger, VsoftLedgerForDetailedDto>();

            CreateMap<VsoftCustomer, VsoftCustomerForDetailedDto>();
            CreateMap<VsoftCustomer, VsoftCustomerForListDto>();
            CreateMap<CustomerForNewDto, VsoftCustomer>();
            CreateMap<CustomerForUpdateDto, VsoftCustomer>();

            CreateMap<VsoftSupplier, VsoftSupplierForDetailedDto>();
            CreateMap<VsoftSupplier, VsoftSupplierForListDto>();
            CreateMap<SupplierForNewDto, VsoftSupplier>();
            CreateMap<SupplierForUpdateDto, VsoftSupplier>();

            CreateMap<VsoftSupplierInvoice, VsoftSupplierInvoiceForDetailedDto>();
            CreateMap<VsoftSupplierInvoice, VsoftSupplierInvoiceForListDto>();

            CreateMap<VsoftContract, VsoftContractForDetailedDto>();
            CreateMap<VsoftContract, VsoftContractForListDto>();
            CreateMap<VsoftTelebibContract, VsoftTelebibContractForDetailedDto>();
            CreateMap<VsoftTelebibContract, VsoftTelebibContractForListDto>();
            CreateMap<VsoftCustomerInvoice, VsoftCustomerInvoiceForDetailedDto>();
            CreateMap<VsoftCustomerInvoice, VsoftCustomerInvoiceForListDto>();            
        }
    }
}
