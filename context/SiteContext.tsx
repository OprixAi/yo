import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent } from '../types';
import { DEFAULT_CONTENT } from '../constants';

interface SiteContextType {
  content: SiteContent;
  updateContent: (section: keyof SiteContent, data: any) => void;
  resetContent: () => void;
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('oprix_site_content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
  }, []);

  // Save to local storage whenever content changes
  useEffect(() => {
    localStorage.setItem('oprix_site_content', JSON.stringify(content));
  }, [content]);

  const updateContent = (section: keyof SiteContent, data: any) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data,
      },
    }));
  };

  const resetContent = () => {
    if (window.confirm("Are you sure you want to reset all content to defaults? This cannot be undone.")) {
      setContent(DEFAULT_CONTENT);
    }
  };

  const toggleAdminMode = () => setIsAdminMode(!isAdminMode);

  return (
    <SiteContext.Provider value={{ content, updateContent, resetContent, isAdminMode, toggleAdminMode }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
