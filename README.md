# UI for Dynamic IP Restrictions for App Services

Azure App Services has an interesting feature, "Dynamic IP Restriction" which can be used for protection against attacks such as Distributed Denial of Service.

Restrictions can be imposed on the App Service, to deny access based on
- The number of concurrent requests made.
- The number of requests made in certain interval of time.

These settings can be configured either in the application web.config or applicationHost.xdt of the Azure App Service.
The Site Extension "Dynamic IP restriction for App Services" provides an User Interface to update the settings.

For more details, please refer :
https://techcommunity.microsoft.com/t5/azure-app-service/dynamic-ip-restriction-for-app-services/ba-p/1150049
