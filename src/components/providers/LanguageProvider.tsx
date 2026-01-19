"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language } from "@/lib/i18n";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof dictionaries.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // Default to English, looking forward to checking localStorage/browser prefs
    const [language, setLanguage] = useState<Language>("en");

    const value = {
        language,
        setLanguage,
        t: dictionaries[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
