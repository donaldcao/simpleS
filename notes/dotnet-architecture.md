
## donet architecture
- https://dotnet.microsoft.com/learn/dotnet/architecture-guides  --> general guide.
- https://github.com/dotnet-architecture/eShopOnContainers  --> code repo
- https://devblogs.microsoft.com/cesardelatorre/free-ebookguide-on-net-microservices-architecture-for-containerized-net-applications/  --> free ebook
- https://github.com/dotnet-architecture/News  --> reference applications and news on .net architecture.


CAP theorem
The CAP theorem says that you cannot build a (distributed) database (or a microservice that owns its model) that is continually available, strongly consistent, and tolerant to any partition. You must choose two of these three properties.

In microservices-based architectures, you should choose availablity and tolerance, and you should deemphasize strong consistency.

