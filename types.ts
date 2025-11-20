import React from 'react';

export enum ViewState {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  CONTACT = 'CONTACT',
  AI_TOOL = 'AI_TOOL'
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface AIEditResult {
  imageUrl: string | null;
  loading: boolean;
  error: string | null;
}