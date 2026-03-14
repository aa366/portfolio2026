"use client";
import { headers } from "next/headers";
import { userAgent } from "next/server";
import { createContext } from "react";

const UserInfo = createContext<typeof userAgent | null>(null);

export function UserInfoProvider() {
  return <UserInfo.Provider value={userAgent(awaheaders)}></UserInfo.Provider>;
}
