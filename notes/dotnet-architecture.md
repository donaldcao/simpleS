
## donet architecture
- https://dotnet.microsoft.com/learn/dotnet/architecture-guides  --> general guide.
- https://github.com/dotnet-architecture/eShopOnContainers  --> code repo
- https://devblogs.microsoft.com/cesardelatorre/free-ebookguide-on-net-microservices-architecture-for-containerized-net-applications/  --> free ebook
- https://github.com/dotnet-architecture/News  --> reference applications and news on .net architecture.
- Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions

http://cap.dotnetcore.xyz/
CAP is adopted the local message table program integrated with the current database to solve the exception may occur in the process of the distributed system calling each other. It can ensure that the event messages are not lost in any case.


CAP theorem
The CAP theorem says that you cannot build a (distributed) database (or a microservice that owns its model) that is continually available, strongly consistent, and tolerant to any partition. You must choose two of these three properties.

In microservices-based architectures, you should choose availablity and tolerance, and you should deemphasize strong consistency.

