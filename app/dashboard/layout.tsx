"use client";

import { FullkodCredit } from "@/components/FullkodCredit";
import { DesktopHeader } from "@/components/navigation/DesktopHeader";
import { DesktopSidebar } from "@/components/navigation/DesktopSidebar";
import { MobileBottomNav } from "@/components/navigation/MobileBottomNav";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { useAuth } from "@/lib/contexts/AuthContext";
import { useIsCapacitor } from "@/lib/hooks/useIsCapacitor";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  const isCapacitor = useIsCapacitor();
  const router = useRouter();
  const { user, userLoading, roleType, roleLoading } = useAuth();

  // En Capacitor, siempre usar layout móvil independientemente del tamaño de pantalla
  const shouldUseMobileLayout = isMobile || isCapacitor;

  useEffect(() => {
    if (userLoading || roleLoading) return;

    if (!user) {
      router.replace("/auth/login");
      return;
    }

    // If user has no role, redirect to onboarding
    if (!roleType) {
      router.replace("/auth/onboarding");
    }
  }, [user, roleType, userLoading, roleLoading, router]);

  if (userLoading || roleLoading || !user || !roleType) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (shouldUseMobileLayout) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <MobileHeader />
        <main
          className="flex-1 overflow-y-auto"
          style={{
            paddingBottom: "calc(6rem + env(safe-area-inset-bottom))",
          }}
        >
          {children}
          <div className="flex justify-center px-4 pt-8">
            <FullkodCredit />
          </div>
        </main>
        <MobileBottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DesktopSidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <DesktopHeader />
        <main className="flex-1 overflow-y-auto">
          {children}
          <div className="flex justify-end px-8 pb-6 pt-10">
            <FullkodCredit />
          </div>
        </main>
      </div>
    </div>
  );
}
