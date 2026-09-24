namespace API.Helpers
{
    public class MailSettings
    {
        public required string SendMailAddress { get; set; }
        public required string SendMailUrl { get; set; }
        public required string SendMailPassword { get; set; }
        public required string AdminCCMailAddress { get; set; }
        public required string AdminCCFullName { get; set; }
        public required string MailGuid { get; set; }
    }
}