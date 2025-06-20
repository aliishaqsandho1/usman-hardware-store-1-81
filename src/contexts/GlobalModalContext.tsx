
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FilteredProductsModal } from "@/components/FilteredProductsModal";
import { inventoryApi } from "@/services/api";

interface GlobalModalContextType {
  openLowStockModal: () => void;
  openOutOfStockModal: () => void;
  openInStockModal: () => void;
  openAllProductsModal: () => void;
}

const GlobalModalContext = createContext<GlobalModalContextType | undefined>(undefined);

export const useGlobalModal = () => {
  const context = useContext(GlobalModalContext);
  if (!context) {
    throw new Error('useGlobalModal must be used within a GlobalModalProvider');
  }
  return context;
};

interface GlobalModalProviderProps {
  children: ReactNode;
}

export const GlobalModalProvider: React.FC<GlobalModalProviderProps> = ({ children }) => {
  const [modalState, setModalState] = useState({
    open: false,
    title: '',
    filterType: 'all' as 'lowStock' | 'outOfStock' | 'inStock' | 'all'
  });

  const fetchAllProductsForModal = async (): Promise<any[]> => {
    try {
      const response = await inventoryApi.getAll({
        limit: 10000 // Large number to get all products
      });
      
      if (response.success) {
        const inventoryData = response.data?.inventory || response.data || [];
        return Array.isArray(inventoryData) ? inventoryData : [];
      }
      return [];
    } catch (error) {
      console.error('Failed to fetch all products for modal:', error);
      return [];
    }
  };

  const openLowStockModal = () => {
    setModalState({
      open: true,
      title: 'Low Stock Items',
      filterType: 'lowStock'
    });
  };

  const openOutOfStockModal = () => {
    setModalState({
      open: true,
      title: 'Out of Stock Items',
      filterType: 'outOfStock'
    });
  };

  const openInStockModal = () => {
    setModalState({
      open: true,
      title: 'In Stock Items',
      filterType: 'inStock'
    });
  };

  const openAllProductsModal = () => {
    setModalState({
      open: true,
      title: 'All Products',
      filterType: 'all'
    });
  };

  const handleModalClose = (open: boolean) => {
    setModalState(prev => ({ ...prev, open }));
  };

  return (
    <GlobalModalContext.Provider value={{
      openLowStockModal,
      openOutOfStockModal,
      openInStockModal,
      openAllProductsModal
    }}>
      {children}
      
      {/* Global FilteredProductsModal */}
      <FilteredProductsModal
        open={modalState.open}
        onOpenChange={handleModalClose}
        title={modalState.title}
        filterType={modalState.filterType}
        onFetchAllProducts={fetchAllProductsForModal}
      />
    </GlobalModalContext.Provider>
  );
};
