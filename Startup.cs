using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Startup))]
public partial class Startup
{
    public void Configuration(IAppBuilder app)
    {
        ConfigureAuth(app);
    }
}
