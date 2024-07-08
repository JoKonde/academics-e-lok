from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rental.views import (
    UserViewSet, ContactViewSet, RoleViewSet, EngineViewSet,
    ApproViewSet, CommandeViewSet, PayementViewSet, EnginLoueViewSet
)
from rental.auth import CustomTokenObtainPairView

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
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
