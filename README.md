# NetMar 2026

## [API][APIReadMe]

[APIReadMe]: API/README.md

## [Client][ClientReadMe]

[ClientReadMe]: Client/README.md

## [BlazorApp][BlazorAppReadMe]

[BlazorAppReadMe]: BlazorApp/README.md

## Publishing (last but not least!)

dotnet publish -c Release

## Playing in vscode terminals

### Old time MSDOS/PSDOS/CPM

In terminal type cmd + enter
color 2 + enter

## Copilot Advise

Your deployment flow can still work on .NET 10, but there are 3 important differences in your current project that affect Plesk:

Your API currently does not serve Angular files from wwwroot
See Program.cs:39.
There is no static file middleware, so copying Angular files into wwwroot alone will not make the SPA load.

Redis is configured as localhost in production settings
See appsettings.json:7.
On Plesk hosting this usually fails unless Redis is installed on the same server, and your app may crash at startup.

Secrets are committed in appsettings
See appsettings.json:7.
You should rotate DB and Stripe keys and move secrets to Plesk environment variables.

Recommended install path on Plesk (single domain <https://rv-services.be>)

Build Angular production client
Copy Angular output into API wwwroot
Publish API
Upload published output to Plesk document root for that site
Configure environment variables in Plesk
Restart site and test health endpoints
Exact local build commands (from workspace root)

Build client
cd client
npm ci
npm run build

Copy Angular build into API wwwroot
Angular 21 output is typically in dist/client/browser
Copy everything from client/dist/client/browser into API/wwwroot

Publish API
cd ../API
dotnet publish -c Release -o ./bin/Release/net10.0/publish

If your Plesk server does not have .NET 10 Hosting Bundle
Use self-contained publish:
dotnet publish -c Release -r win-x64 --self-contained true -o ./bin/Release/net10.0/publish

Plesk settings to verify

Hosting type: IIS website (not static only)
Application pool: No Managed Code
ASP.NET Core module available (AspNetCoreModuleV2)
Environment variables in Plesk:
ASPNETCORE_ENVIRONMENT = Production
ConnectionStrings__DefaultConnection = your SQL connection
ConnectionStrings__Redis = remote redis or disable redis usage
StripeSettings__PublishableKey = key
StripeSettings__SecretKey = key
Permissions: IIS user can read publish folder, and write logs folder if enabled
Critical project adjustments before production

Add static file hosting middleware in API so Angular routes work.
Make Redis optional or use a real hosted Redis endpoint.
Rotate exposed secrets and remove them from appsettings.json:7.
If you want, I can now make the code changes for you in one pass:

Patch Program.cs to serve Angular from wwwroot with SPA fallback.
Add safe Redis fallback so production does not crash when Redis is unavailable.
Add a deployment checklist section to README.md tailored for your Plesk site.
