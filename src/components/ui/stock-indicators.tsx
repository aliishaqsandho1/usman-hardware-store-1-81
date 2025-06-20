
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Package } from "lucide-react";
import { useGlobalModal } from "@/contexts/GlobalModalContext";

interface StockBadgeProps {
  stock: number;
  minStock: number;
  className?: string;
}

export const StockStatusBadge: React.FC<StockBadgeProps> = ({ 
  stock, 
  minStock, 
  className = "" 
}) => {
  const { openLowStockModal, openOutOfStockModal } = useGlobalModal();

  const getStockStatus = () => {
    if (stock === 0) {
      return { 
        status: 'Out of Stock', 
        color: 'bg-red-500 text-white hover:bg-red-600', 
        icon: AlertTriangle,
        onClick: openOutOfStockModal
      };
    }
    if (stock <= minStock) {
      return { 
        status: 'Low Stock', 
        color: 'bg-orange-500 text-white hover:bg-orange-600', 
        icon: AlertTriangle,
        onClick: openLowStockModal
      };
    }
    return { 
      status: 'In Stock', 
      color: 'bg-green-500 text-white', 
      icon: Package,
      onClick: () => {} // No action for in stock
    };
  };

  const stockStatus = getStockStatus();
  const StatusIcon = stockStatus.icon;

  return (
    <Badge 
      className={`text-xs ${stockStatus.color} transition-colors cursor-pointer ${className}`}
      onClick={stockStatus.onClick}
    >
      <StatusIcon className="h-3 w-3 mr-1" />
      {stockStatus.status}
    </Badge>
  );
};

interface ClickableLowStockProps {
  count: number;
  className?: string;
  children?: React.ReactNode;
}

export const ClickableLowStock: React.FC<ClickableLowStockProps> = ({ 
  count, 
  className = "", 
  children 
}) => {
  const { openLowStockModal } = useGlobalModal();

  return (
    <div 
      className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={openLowStockModal}
    >
      {children || (
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-orange-500" />
          <span className="text-orange-600 font-medium">{count} Low Stock</span>
        </div>
      )}
    </div>
  );
};

export const ClickableOutOfStock: React.FC<ClickableLowStockProps> = ({ 
  count, 
  className = "", 
  children 
}) => {
  const { openOutOfStockModal } = useGlobalModal();

  return (
    <div 
      className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={openOutOfStockModal}
    >
      {children || (
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-red-500" />
          <span className="text-red-600 font-medium">{count} Out of Stock</span>
        </div>
      )}
    </div>
  );
};
