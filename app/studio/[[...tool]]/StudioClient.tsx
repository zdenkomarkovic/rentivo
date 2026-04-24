"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const isConfigured = /^[a-z0-9-]+$/.test(projectId);

export default function StudioClient() {
  if (!isConfigured) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-8">
        <div className="bg-[#111118] border border-[#1e2030] rounded-2xl p-8 max-w-lg text-center">
          <h1 className="text-white font-bold text-xl mb-3">Sanity CMS nije konfigurisan</h1>
          <p className="text-[#94a3b8] text-sm mb-5 leading-relaxed">
            Unesite validan Project ID u{" "}
            <code className="bg-[#0a0a0f] px-1.5 py-0.5 rounded text-[#113078]">.env.local</code>:
          </p>
          <code className="block bg-[#0a0a0f] border border-[#1e2030] rounded-xl p-4 text-left text-sm text-[#94a3b8]">
            NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def
          </code>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
