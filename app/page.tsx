"use client";

import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const { user, userLoading } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo_horizontal.svg"
                alt="Follow It"
                width={150}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {userLoading ? (
              <div className="w-20 h-8 bg-gray-200 animate-pulse rounded"></div>
            ) : user ? (
              <Link href="/dashboard">
                <Button>Ir a Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost">Iniciar Sesión</Button>
                </Link>
                <Link href="/auth/register">
                  <Button>Comenzar Gratis</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                ✨ La solución más completa para tu negocio
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Gestión de Repartos
              <br />
              <span className="bg-linear-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Simple y Eficiente
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Optimiza tus entregas con seguimiento en tiempo real, asignación
              inteligente y comprobantes digitales. Todo en un solo lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/auth/register">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  Comenzar Ahora
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 hover:bg-primary-50 transition-all duration-200"
                >
                  Ver Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600">Tiempo Real</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary-600 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Disponible</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  ∞
                </div>
                <div className="text-sm text-gray-600">Escalable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todo lo que necesitas para gestionar tus repartos de manera
              profesional
            </p>
          </div>

          {/* Feature 1 */}
          <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/feature_1.png"
                  alt="Seguimiento en Tiempo Real"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Seguimiento en Tiempo Real
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Monitorea la ubicación exacta de tus mensajeros y el estado de
                cada entrega en tiempo real desde un mapa interactivo. Visualiza
                rutas, tiempos estimados y recibe notificaciones instantáneas.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-secondary-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Ubicación GPS en tiempo real
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-secondary-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Mapa interactivo y visual
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-secondary-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Notificaciones instantáneas
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Comprobantes Digitales
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Captura fotos y firmas como prueba de entrega con
                geolocalización y timestamp automático. Genera comprobantes
                profesionales que se almacenan de forma segura y son accesibles
                en cualquier momento.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Fotos y firmas digitales
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Geolocalización automática
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Almacenamiento seguro en la nube
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/feature_2.png"
                  alt="Comprobantes Digitales"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/feature_3.png"
                  alt="Gestión de Equipos"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Gestión de Equipos
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Asigna pedidos, gestiona mensajeros y optimiza rutas desde un
                panel de control intuitivo. Administra tu equipo completo con
                herramientas profesionales de gestión.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-secondary-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Asignación inteligente de pedidos
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-secondary-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Panel de control completo
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-secondary-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Optimización automática de rutas
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-linear-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Follow It?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beneficios que transforman tu operación de entregas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Rápido y Eficiente
              </h3>
              <p className="text-gray-600">
                Optimiza tus procesos y reduce tiempos de entrega con
                herramientas inteligentes
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-secondary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Seguro y Confiable
              </h3>
              <p className="text-gray-600">
                Tus datos y comprobantes están protegidos con encriptación de
                nivel empresarial
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Escalable
              </h3>
              <p className="text-gray-600">
                Crece sin límites, desde pequeños negocios hasta grandes
                operaciones
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Multiplataforma
              </h3>
              <p className="text-gray-600">
                Accede desde cualquier dispositivo, web y móvil, siempre
                sincronizado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Planes Simples para Negocios Reales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Paga solo por los mensajeros que usas. Sin complicaciones, sin
              sorpresas.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Primer mes gratis para nuevos usuarios
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Plan Básico */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                  Plan Básico
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Para entrar sin miedo
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Ideal para pequeños negocios
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">300</span>
                  <span className="text-gray-600 ml-2">CUP/mes</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">1 negocio</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Hasta 2 mensajeros</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Entregas ilimitadas</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Tracking en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Comprobante simple (foto)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Panel web + app mensajero
                  </span>
                </li>
              </ul>
              <Link href="/auth/register">
                <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                  Comenzar Gratis
                </Button>
              </Link>
            </div>

            {/* Plan Negocio - Destacado */}
            <div className="bg-linear-to-br from-primary-600 to-secondary-600 rounded-2xl border-2 border-primary-500 p-8 transform scale-105 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                  ⭐ MÁS POPULAR
                </span>
              </div>
              <div className="mb-6 mt-4">
                <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                  Plan Negocio
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  El más vendido
                </h3>
                <p className="text-white/90 text-sm mb-6">
                  Ideal para restaurantes y mensajería diaria
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">600</span>
                  <span className="text-white/90 ml-2">CUP/mes</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-300 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">1 negocio</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-300 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">Hasta 5 mensajeros</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-300 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">Todo lo del Básico</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-300 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">Historial de entregas</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-300 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">
                    Tracking para clientes (link)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-yellow-300 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white">Notificaciones</span>
                </li>
              </ul>
              <Link href="/auth/register">
                <Button className="w-full bg-white! text-primary-600! hover:bg-gray-100! font-semibold">
                  Comenzar Gratis
                </Button>
              </Link>
            </div>

            {/* Plan Pro */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                  Plan Pro
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Para los que ya crecieron
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Ideal para negocios con flota pequeña
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">1000</span>
                  <span className="text-gray-600 ml-2">CUP/mes</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">1 negocio</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Hasta 10-15 mensajeros</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Todo lo anterior</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Roles (admin / operador)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Reportes simples</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Soporte prioritario</span>
                </li>
              </ul>
              <Link href="/auth/register">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Comenzar Gratis
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link href="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 hover:bg-primary-50 transition-all duration-200"
              >
                Ver detalles completos de planes y opciones de crecimiento →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tus entregas?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Únete a cientos de negocios que ya están optimizando sus repartos
            con Follow It
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button
                variant="ghost"
                size="lg"
                className="bg-white! text-primary-600! hover:bg-gray-100! shadow-lg! text-lg px-8 py-4 font-semibold hover:scale-105 transition-all duration-200"
              >
                Comenzar Gratis
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary-600 transition-all duration-200 font-semibold"
              >
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo_horizontal.svg"
                  alt="Follow It"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-gray-600 text-sm text-center md:text-left max-w-md">
                La solución completa para gestionar tus repartos de manera
                profesional y eficiente.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link href="/auth/login">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-primary-600"
                >
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                  Comenzar Gratis
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-500 text-sm">
            <p>&copy; 2026 Follow It. Todos los derechos reservados.</p>
            <a
              href="https://fullkod.com/?ref=follow-it"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 hover:text-gray-700"
            >
              Desarrollado por
              <Image
                src="/brand/fullkod-symbol.svg"
                alt=""
                width={14}
                height={14}
              />
              <span className="font-semibold text-gray-700">Fullkod</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
