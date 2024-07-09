'use client'

import { useTheme } from "@/components/theme-provider";
import { clientSideFuntion } from "@/utils/client-utils";


export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFuntion();
  return (
    <>
      <h1 style={{
        color: theme.colors.primary
      }}
      >
        Client Route {result}
      </h1>
    </>
  );
}
