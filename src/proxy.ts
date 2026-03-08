import { NextRequest, NextResponse, userAgent } from "next/server";

export function proxy(request: NextRequest) {
  const { device, os, cpu } = userAgent(request);
  console.log(os.version, os.name);

  // device.type can be: 'mobile', 'tablet', 'console', 'smarttv',
  // 'wearable', 'embedded', or undefined (for desktop browsers)
  const viewport = device.type || "desktop";
}
