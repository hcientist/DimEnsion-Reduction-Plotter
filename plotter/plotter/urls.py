from django.conf.urls import patterns, include, url
from md_plotter import views

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
  url(r'^$', views.index, name='index'),
  url(r'^plotter', views.plotter, name='plotter'),
    # Examples:
    # url(r'^$', 'plotter.views.home', name='home'),
    # url(r'^plotter/', include('plotter.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
