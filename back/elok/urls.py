from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rental.views import (
    UserViewSet, ContactViewSet, RoleViewSet, EngineViewSet,
    ApproViewSet, CommandeViewSet, PayementViewSet, EnginLoueViewSet,UserCreateView
)
from rental.auth import CustomTokenObtainPairView
# Importer la vue de page 404
from django.http import HttpResponseNotFound
from django.conf.urls import handler404
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render

def page_not_found(request, exception):
    return HttpResponseNotFound(render(request, '404.html'))

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'roles', RoleViewSet)
router.register(r'engines', EngineViewSet)
router.register(r'appros', ApproViewSet)
router.register(r'commandes', CommandeViewSet)
router.register(r'payements', PayementViewSet)
router.register(r'engins_loues', EnginLoueViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh', TokenRefreshView.as_view(), name='token_refresh'),
     path('new-account', UserCreateView.as_view(), name='user_register'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = page_not_found