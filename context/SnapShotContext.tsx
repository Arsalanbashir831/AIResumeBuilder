"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SnapshotContextProps {
  snapshot: string | null; // Store only one snapshot URL
  setSnapshot: (url: string) => void; // Set a new snapshot URL
  clearSnapshot: () => void; // Clear the snapshot URL
}

const SnapshotContext = createContext<SnapshotContextProps | undefined>(undefined);

export const SnapshotProvider = ({ children }: { children: ReactNode }) => {
  const [snapshot, setSnapshotState] = useState<string | null>(null);

  const setSnapshot = (url: string) => {
    setSnapshotState(url); // Replace the current snapshot URL
  };

  const clearSnapshot = () => {
    setSnapshotState(null); // Clear the snapshot URL
  };

  return (
    <SnapshotContext.Provider value={{ snapshot, setSnapshot, clearSnapshot }}>
      {children}
    </SnapshotContext.Provider>
  );
};

export const useSnapshot = () => {
  const context = useContext(SnapshotContext);
  if (!context) {
    throw new Error("useSnapshot must be used within a SnapshotProvider");
  }
  return context;
};
