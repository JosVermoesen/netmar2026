# API NetMar 2026

## ASP.NET 10.0

### SDK 10 (10.0.2)

STEPS WE TOOK FOR DOTNET setup the project
mkdir netmar2026 (then cd netmar2026)
dotnet new sln

### Creating the API project

dotnet new webapi -o API -controllers

### Creating class libraries

dotnet new classlib -o Core
dotnet new classlib -o Infrastructure

### Adding the API and class libraries to the solution

dotnet sln add API/
dotnet sln add Core/
dotnet sln add Infrastructure/

### Setting Dependencies

#### API depends on Infrastructure (and Core)

cd API
dotnet add reference ../Infrastructure
cd ..

#### Infrastructure depends on Core

cd Infrastructure
dotnet add reference ../Core
cd ..

### TEST THE API

cd API
dotnet watch run

## https dev and trust (launchSettings.json)

```json
"profiles": {
    "api": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": false,
      "applicationUrl": "http://localhost:5000;https://localhost:5001",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
```

## Trusting the certificate

```bash

dotnet dev-certs https --trust (if not working then do --clean first)
  
```

## Publishing

dotnet publish -c Release

## dotnet-ef Entity Framework tool

### Checking tools installed globally

```bash
dotnet tool list -g
```

#### Intall EF or update to latest version

```bash
dotnet tool install --global dotnet-ef --version 10.0.2
```

#### Some EF commands (use it wisely and with care)

```bash
dotnet ef migrations add InitialCreate -s API -p Infrastructure
```

```bash
dotnet ef migrations add IdentityAdded -s API -p Infrastructure
```

```bash
dotnet ef migrations add DeliveryMethodsAdded -p Infrastructure -s API
```

```bash
dotnet ef migrations add IdentityUpdateForStringLength -s API -p Infrastructure
```

```bash
dotnet ef migrations add AddressAdded -s API -p Infrastructure
```

```bash
dotnet ef migrations remove -s API -p Infrastructure
```

```bash
dotnet ef database update -s API -p Infrastructure
```

```bash
dotnet ef database drop -p Infrastructure -s API
```

## Use SQL SERVER Management Studio

![SSMS](Images/sql-server.png)

## Docker

## Docker compose

```bash
docker compose up -d
```

```bash
docker compose down
```

## REDIS WINDOWS

### Starting Redis

* starting: redis-server

### Running Redis

* command line interface: redis-cli

### Testing Redis on commandline interface

* command: ping
* should return: pong

When the Redis-Server is started you can open a new terminal tab and use:

```bash
redis-cli KEYS '*'
```

This will give you a list of the keys from the command line.

You can then use:

```bash
redis-cli GET keyvalue
```

Which will show you the value of the key.

### Set ASPNETCORE_ENVIRONMENT

Command prompt (or bash):

set ASPNETCORE_ENVIRONMENT=Development
set ASPNETCORE_ENVIRONMENT=Production

used before generating different migrations for different database engins

PowerShell:

```powershell
$Env:ASPNETCORE_ENVIRONMENT = "Development"
```

## STRIPE PAYMENT

[Stripe Dashboard][def]

### STRIPE WEBHOOKS

(github.com/stripe/stripe-cli)

using the Stripe CLI for testing
on windows =>

1. in PowerShell, install scoop:
   iwr -useb get.scoop.sh | iex
   and later on:
   scoop update
2. follow the instruction for Stripe CLI

Stripe console commands used here:
stripe login
stripe listen
stripe listen -f <https://localhost:5001/api/payments/webhook>
or specific:
stripe listen -f <https://localhost:5001/api/payments/webhook> -e payment_intent.succeeded,payment_intent.payment_failed

[def]: https://dashboard.stripe.com/test/dashboard

## WebDAVModule

On some Microsoft IIS hosting services WebDAVModule should be disabled

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <location path="." inheritInChildApplications="false">
    <system.webServer>
      <modules>
        <remove name="WebDAVModule" />
      </modules>
      <handlers>
        <add name="aspNetCore" path="*" verb="*" modules="AspNetCoreModuleV2" resourceType="Unspecified" />
      </handlers>
      <aspNetCore processPath=".\API.exe" stdoutLogEnabled="false" stdoutLogFile=".\logs\stdout" hostingModel="inprocess" />
    </system.webServer>
  </location>
</configuration>
```

## Publishing (last but not least!)

dotnet publish -c Release

## Playing in vscode terminals

### Old time MSDOS/PSDOS/CPM

In terminal type cmd + enter
color 2 + enter
